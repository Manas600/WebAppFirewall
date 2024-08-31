import s from "./style.module.css";

export function InputComponent({ inputText, setInputText }) {
  return (
    <div className={s.container}>
      <p>Test for malicious payload. Insert Payload below</p>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button>Check Payload</button>
    </div>
  );
}
