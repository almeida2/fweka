export const classificadorStyles = `
  .iris-page {
    --iris-ink: #20342b;
    --iris-muted: #78857a;
    --iris-green: #315d43;
    --iris-green-dark: #244b35;
    --iris-line: #e6e9df;
    --iris-paper: #fffefa;
    min-height: 100vh;
    color: var(--iris-ink);
    background:
      radial-gradient(ellipse at 10% 12%, rgba(218, 228, 199, .52), transparent 34%),
      radial-gradient(ellipse at 91% 87%, rgba(242, 223, 195, .42), transparent 31%),
      #f7f7f0;
    font-family: 'DM Sans', 'Segoe UI', sans-serif;
    text-align: left;
  }
  .iris-page * { box-sizing: border-box; }
  .iris-header {
    width: min(1120px, calc(100% - 64px));
    height: 82px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(49, 93, 67, .12);
  }
  .iris-brand {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: var(--iris-ink);
    font-family: Georgia, serif;
    font-size: 23px;
    font-weight: 700;
    text-decoration: none;
  }
  .iris-brand-mark { color: #76915e; font-size: 24px; }
  .iris-brand-light { color: #84917f; font-weight: 400; }
  .iris-header-note, .iris-eyebrow, .iris-step, .iris-step-count, .iris-result-label, .iris-footer {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.65px;
  }
  .iris-header-note { color: #899385; }
  .iris-content {
    width: min(560px, calc(100% - 40px));
    margin: 0 auto;
    padding: 78px 0 42px;
  }
  .iris-intro { margin-bottom: 34px; text-align: center; }
  .iris-eyebrow { color: #788c69; }
  .iris-intro h1 {
    margin: 13px 0 9px;
    color: var(--iris-ink);
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(36px, 7vw, 48px);
    font-weight: 400;
    letter-spacing: -1.6px;
    line-height: 1.12;
  }
  .iris-intro p {
    max-width: 430px;
    margin: 0 auto;
    color: var(--iris-muted);
    font-size: 14px;
    line-height: 1.65;
  }
  .iris-card {
    overflow: hidden;
    border: 1px solid rgba(67, 87, 66, .12);
    border-radius: 12px;
    background: var(--iris-paper);
    box-shadow: 0 20px 55px rgba(48, 62, 42, .08), 0 2px 6px rgba(48, 62, 42, .03);
  }
  .iris-card-top {
    min-height: 53px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--iris-line);
    background: rgba(248, 249, 242, .78);
  }
  .iris-step { color: #63795d; }
  .iris-step-count { color: #a4aa9d; letter-spacing: 1px; }
  .iris-form { padding: 28px 30px 24px; }
  .iris-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 21px 18px; }
  .iris-field { display: flex; flex-direction: column; gap: 8px; }
  .iris-field > span { color: #4a574d; font-size: 12px; font-weight: 600; }
  .iris-input-wrap { position: relative; }
  .iris-input-wrap input {
    width: 100%;
    height: 48px;
    padding: 0 48px 0 14px;
    border: 1px solid #dfe4d9;
    border-radius: 6px;
    outline: none;
    background: #fff;
    color: var(--iris-ink);
    font: 15px 'DM Sans', 'Segoe UI', sans-serif;
    transition: border-color .16s, box-shadow .16s;
  }
  .iris-input-wrap input::placeholder { color: #b7beb3; }
  .iris-input-wrap input:focus { border-color: #739176; box-shadow: 0 0 0 3px rgba(87, 127, 91, .12); }
  .iris-input-wrap input:disabled { background: #f7f8f4; }
  .iris-unit { position: absolute; top: 50%; right: 14px; color: #9aa397; font-size: 12px; transform: translateY(-50%); }
  .iris-error {
    margin: 20px 0 0;
    padding: 11px 13px;
    border: 1px solid #efcaca;
    border-radius: 6px;
    background: #fff7f6;
    color: #a33d39;
    font-size: 13px;
    line-height: 1.5;
  }
  .iris-actions { display: flex; justify-content: space-between; gap: 12px; margin-top: 29px; }
  .iris-button {
    min-height: 45px;
    padding: 0 19px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    font: 600 13px 'DM Sans', 'Segoe UI', sans-serif;
    transition: background .16s, border-color .16s, transform .16s;
  }
  .iris-button:focus-visible { outline: 3px solid rgba(87, 127, 91, .28); outline-offset: 2px; }
  .iris-button:disabled { cursor: wait; opacity: .65; }
  .iris-button-primary { min-width: 122px; background: var(--iris-green); color: white; }
  .iris-button-primary:hover:not(:disabled) { background: var(--iris-green-dark); transform: translateY(-1px); }
  .iris-button-primary span { font-size: 17px; font-weight: 400; }
  .iris-button-secondary { border-color: #dfe4d9; background: transparent; color: #5f6b60; }
  .iris-button-secondary:hover:not(:disabled) { border-color: #aebca8; background: #f8f9f4; }
  .iris-form-note { margin: 18px 0 0; color: #a0a79b; font-size: 11px; text-align: center; }
  .iris-result { padding: 32px 30px 28px; text-align: center; }
  .iris-result-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 17px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #eef2e7;
    color: #668056;
    font-size: 30px;
  }
  .iris-result-label { color: #899580; font-size: 9px; }
  .iris-result-name {
    margin: 8px 0 25px;
    color: var(--iris-ink);
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 30px;
  }
  .iris-confidence { display: flex; align-items: center; justify-content: space-between; color: #758075; font-size: 12px; }
  .iris-confidence strong { color: var(--iris-green); font-size: 14px; }
  .iris-confidence-track { height: 6px; overflow: hidden; margin-top: 10px; border-radius: 8px; background: #edf0e9; }
  .iris-confidence-track span { height: 100%; display: block; border-radius: inherit; background: #6d8d5d; transition: width .3s ease; }
  .iris-result-back { margin-top: 29px; }
  .iris-footer {
    margin-top: 28px;
    display: flex;
    justify-content: center;
    gap: 9px;
    color: #a0a79b;
    font-size: 8px;
    letter-spacing: 1.35px;
  }
  .iris-footer-dot { color: #8e9f7d; font-size: 13px; line-height: 8px; }
  @media (max-width: 600px) {
    .iris-header { width: calc(100% - 40px); height: 68px; }
    .iris-header-note { max-width: 130px; font-size: 8px; line-height: 1.5; text-align: right; }
    .iris-content { padding-top: 54px; }
    .iris-card-top { padding: 0 20px; }
    .iris-form, .iris-result { padding-right: 20px; padding-left: 20px; }
    .iris-fields { gap: 18px 12px; }
    .iris-field > span { font-size: 11px; }
  }
  @media (max-width: 380px) {
    .iris-fields { grid-template-columns: 1fr; }
    .iris-content { padding-top: 40px; }
  }
`
