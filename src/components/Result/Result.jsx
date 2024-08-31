import s from "./style.module.css";

export function Result({ isMalicious }) {
  const resultText = isMalicious
    ? "The input is Malicious!!!"
    : "The input is not Malicious.";

  const resultColor = isMalicious ? "red" : "green";

  return (
    <div className={s.container} style={{ color: resultColor }}>
      <h2>{resultText}</h2>
    </div>
  );
}
