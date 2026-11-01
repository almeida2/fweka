import { useState } from 'react'
import ClassificadorPresenter from './ClassificadorPresenter'

const initialMeasurements = {
  sepalLength: '',
  sepalWidth: '',
  petalLength: '',
  petalWidth: '',
}

function ClassificadorContainer() {
  const [measurements, setMeasurements] = useState(initialMeasurements)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(field, value) {
    setMeasurements((currentMeasurements) => ({
      ...currentMeasurements,
      [field]: value,
    }))
  }

  function handleFormBack() {
    setMeasurements(initialMeasurements)
    setResult(null)
    setError('')
  }

  function handleResultBack() {
    setResult(null)
    setError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    const payload = Object.fromEntries(
      Object.entries(measurements).map(([field, value]) => [field, Number(value)]),
    )

    try {
      const response = await fetch('http://localhost:8080/api/v1/iris/classify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Não foi possível classificar a flor (HTTP ${response.status}).`)
      }

      const data = await response.json()
      if (
        typeof data.predictedClass !== 'string' ||
        typeof data.confidence !== 'number' ||
        !Number.isFinite(data.confidence)
      ) {
        throw new Error('A resposta da API não contém uma classificação válida.')
      }

      setResult(data)
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Ocorreu um erro inesperado ao classificar a flor.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <ClassificadorPresenter
      measurements={measurements}
      result={result}
      loading={loading}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onFormBack={handleFormBack}
      onResultBack={handleResultBack}
    />
  )
}

export default ClassificadorContainer
