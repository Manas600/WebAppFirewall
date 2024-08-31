import { useState } from "react";
import { Header } from "./components/Header/Header";
import { InputComponent } from "./components/InputComponent/InputComponent";
import { Result } from "./components/Result/Result";

export function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  const checkInput = async () => {
    try {
      console.log("Sending input:", inputText);
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputText }),
      });

      const data = await response.json();
      console.log("Received response:", data);

      if (response.ok) {
        setResult(data.result);
      } else {
        console.error(data.error);
        setResult(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult(null);
    }
  };

  return (
    <>
      <Header></Header>
      <InputComponent
        inputText={inputText}
        setInputText={setInputText}
        checkInput={checkInput}
      />
      {result !== null && <Result isMalicious={result} />}
    </>
  );
}
