import { useState } from "react";
import { Header } from "./components/Header/Header";
import { InputComponent } from "./components/InputComponent/InputComponent";
import { Result } from "./components/Result/Result";

export function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  const checkInput = async () => {
    //Backend call to be integrated here
    //For now fake backend call
    const isMalicious = await mockBackendCheck(inputText);
    setResult(isMalicious);
  };

  const mockBackendCheck = (text) => {
    // Simulate a delay and then return a random result for now
    return new Promise((resolve) => {
      setTimeout(() => {
        const malicious = text.toLowerCase().includes("malicious");
        resolve(malicious);
      }, 1000);
    });
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
