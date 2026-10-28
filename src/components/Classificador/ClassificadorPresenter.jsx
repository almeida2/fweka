import { classificadorStyles } from './Classificador.styles'

const fields = [
  { name: 'sepalLength', label: 'Sepal Length', id: 'sepal-length' },
  { name: 'sepalWidth', label: 'Sepal Width', id: 'sepal-width' },
  { name: 'petalLength', label: 'Petal Length', id: 'petal-length' },
  { name: 'petalWidth', label: 'Petal Width', id: 'petal-width' },
]

function ClassificadorPresenter({
  measurements,
  result,
  loading,
  error,
  onChange,
  onSubmit,
  onFormBack,
  onResultBack,
}) {
  return (
    <main className="iris-page">
      <style>{classificadorStyles}</style>
      <header className="iris-header">
        <a className="iris-brand" href="/" aria-label="Classificador Iris, início">
          <span className="iris-brand-mark" aria-hidden="true">✿</span>
          <span>Íris<span className="iris-brand-light">.lab</span></span>
        </a>
        <span className="iris-header-note">BOTÂNICA · classificação automática</span>
      </header>

      <section className="iris-content" aria-live="polite">
        <div className="iris-intro">
          <span className="iris-eyebrow">Weka - classifier</span>
          <h1>{result ? 'Flor Classificada' : 'Classificador Iris'}</h1>
          <p>
            {result
              ? 'Conheça a espécie identificada a partir das medidas informadas.'
              : 'Informe as dimensões da flor para descobrir a qual espécie ela pertence.'}
          </p>
        </div>

        <div className="iris-card">
          <div className="iris-card-top">
            <span className="iris-step">{result ? 'RESULTADO' : 'MEDIDAS DA FLOR'}</span>
            <span className="iris-step-count">{result ? '02 / 02' : '01 / 02'}</span>
          </div>

          {result ? (
            <div className="iris-result">
              <div className="iris-result-icon" aria-hidden="true">✿</div>
              <span className="iris-result-label">ESPÉCIE IDENTIFICADA</span>
              <p className="iris-result-name">{result.predictedClass}</p>
              <div className="iris-confidence">
                <span>Confiança</span>
                <strong>{result.confidence}%</strong>
              </div>
              <div
                className="iris-confidence-track"
                role="progressbar"
                aria-label="Confiança da classificação"
                aria-valuenow={Math.min(100, Math.max(0, result.confidence))}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span style={{ width: `${Math.min(100, Math.max(0, result.confidence))}%` }} />
              </div>
              <button className="iris-button iris-button-secondary iris-result-back" type="button" onClick={onResultBack}>
                <span aria-hidden="true">←</span> Voltar
              </button>
            </div>
          ) : (
            <form className="iris-form" onSubmit={onSubmit}>
              <div className="iris-fields">
                {fields.map((field) => (
                  <label className="iris-field" htmlFor={field.id} key={field.name}>
                    <span>{field.label}</span>
                    <div className="iris-input-wrap">
                      <input
                        id={field.id}
                        name={field.name}
                        type="number"
                        min="0"
                        step="any"
                        required
                        value={measurements[field.name]}
                        onChange={(event) => onChange(field.name, event.target.value)}
                        placeholder="0.0"
                        disabled={loading}
                      />
                      <span className="iris-unit">cm</span>
                    </div>
                  </label>
                ))}
              </div>

              {error && <p className="iris-error" role="alert">{error}</p>}

              <div className="iris-actions">
                <button
                  className="iris-button iris-button-secondary"
                  type="button"
                  onClick={onFormBack}
                  disabled={loading}
                >
                  Voltar
                </button>
                <button className="iris-button iris-button-primary" type="submit" disabled={loading}>
                  {loading ? 'Classificando...' : 'OK'}
                  {!loading && <span aria-hidden="true">→</span>}
                </button>
              </div>
              <p className="iris-form-note">As medidas devem ser informadas em centímetros.</p>
            </form>
          )}
        </div>

        <footer className="iris-footer">
          <span>IRIS DATASET</span>
          <span className="iris-footer-dot" aria-hidden="true">·</span>
          <span>CLASSIFICAÇÃO DE ESPÉCIES</span>
        </footer>
      </section>
    </main>
  )
}

export default ClassificadorPresenter
