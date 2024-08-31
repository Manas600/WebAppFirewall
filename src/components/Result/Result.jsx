import s from "./style.module.css";

export function Result({ isMalicious }) {
  const resultText =
    isMalicious === "malicious"
      ? "The input is Malicious!!!"
      : "The input is not Malicious.";

  const resultColor = isMalicious === "malicious" ? "red" : "green";

  return (
    <div className={s.container} style={{ color: resultColor }}>
      <h2>{resultText}</h2>
    </div>
  );
}
