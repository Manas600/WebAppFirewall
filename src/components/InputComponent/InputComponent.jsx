import s from "./style.module.css";

export function InputComponent({ inputText, setInputText }) {
  const handleInput = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };
  const handleButton = () => {
    console.log("Button clicked with input", inputText);
  };

  return (
    <div className={s.container}>
      <p>Test for malicious payload. Insert Payload below</p>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleButton}>Check Payload</button>
    </div>
  );
}
