import { FormEvent, useState } from "react";
import { ScriptVoiceForm } from "./ScriptVoiceForm";
import { MusicForm } from "./MusicForm";
import { VisualStyleForm } from "./VisualStyleForm";
import { useMultistepForm } from "./useMultistepForm";

type FormData = {
  subreddit: string;
  keyword?: string;
  visualStyle: string;
  script: string;
  voice: string;
  music: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  subreddit: "",
  keyword: "",
  visualStyle: "",
  script: "",
  voice: "",
  music: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <VisualStyleForm {...data} updateFields={updateFields} />,
      <ScriptVoiceForm {...data} updateFields={updateFields} />,
      <MusicForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("✅ Successful Video Submission!");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem auto",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "600px",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          Step {currentStepIndex + 1} of {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
