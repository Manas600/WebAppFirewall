import { useState } from "react";
import { Header } from "./components/Header/Header";
import { InputComponent } from "./components/InputComponent/InputComponent";
import { Result } from "./components/Result/Result";

export function App() {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <Header></Header>
      <InputComponent inputText={inputText} setInputText={setInputText} />
      <Result />
    </>
  );
}
