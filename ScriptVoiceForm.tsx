import { FormWrapper } from "./FormWrapper";

type ScriptVoiceData = {
  script: string;
  voice: string;
};

type ScriptVoiceFormProps = ScriptVoiceData & {
  updateFields: (fields: Partial<ScriptVoiceData>) => void;
};

export function ScriptVoiceForm({
  script,
  voice,
  updateFields,
}: ScriptVoiceFormProps) {
  const voiceOptions = [
    { label: "Rachel", value: "rachel" },
    { label: "Adam", value: "adam" },
    { label: "Bella", value: "bella" },
  ];

  return (
    <FormWrapper title="Enter Script and Select Voice">
      <label>Script</label>
      <textarea
        required
        rows={6}
        value={script}
        onChange={(e) => updateFields({ script: e.target.value })}
      />

      <label style={{ marginTop: "20px" }}>Voice</label>
      <select
        required
        value={voice}
        onChange={(e) => updateFields({ voice: e.target.value })}
      >
        <option value="">Select a voice</option>
        {voiceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {voice && (
        <button
          type="button"
          style={{ marginTop: "10px" }}
          onClick={() => alert(`Preview for "${voice}" coming soon!`)}
        >
          🔊 Preview Voice
        </button>
      )}
    </FormWrapper>
  );
}
