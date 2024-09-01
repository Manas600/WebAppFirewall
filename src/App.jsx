import { useState } from "react";
import { Header } from "./components/Header/Header";
import { InputComponent } from "./components/InputComponent/InputComponent";
import { Result } from "./components/Result/Result";
import "./App.css";

export function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  const checkInput = async () => {
    setHasSubmitted(true);

    if (inputText.trim() === "") {
      setResult("no_input");
      return;
    }

    setLoading(true); // Set loading to true before making the request

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
    } finally {
      setLoading(false); // Set loading to false after request is completed
    }
  };

  return (
    <>
      <Header />
      <div className="main_body">
        <InputComponent
          inputText={inputText}
          setInputText={setInputText}
          checkInput={checkInput}
        />
        {loading && <p>Loading...</p>} {/* Show loading indicator */}
        {!loading && hasSubmitted && <Result isMalicious={result} />}
      </div>
    </>
  );
}
