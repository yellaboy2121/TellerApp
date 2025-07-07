import { FormWrapper } from "./FormWrapper";

type MusicData = {
  music: string;
};

type MusicFormProps = MusicData & {
  updateFields: (fields: Partial<MusicData>) => void;
};

export function MusicForm({ music, updateFields }: MusicFormProps) {
  return (
    <FormWrapper title="Choose Background Music">
      <label>Music Style</label>
      <select
        required
        value={music}
        onChange={(e) => updateFields({ music: e.target.value })}
      >
        <option value="">Select a music style</option>
        <option value="chill">Chill</option>
        <option value="suspense">Suspense</option>
        <option value="upbeat">Upbeat</option>
        <option value="sad">Sad</option>
        <option value="upload">Upload Your Own</option>
      </select>

      {music === "upload" && (
        <div style={{ marginTop: "1rem" }}>
          <label>Upload your music file:</label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const fileUrl = URL.createObjectURL(file);
                updateFields({ music: fileUrl });
              }
            }}
          />
          {music.startsWith("blob:") && (
            <audio controls src={music} style={{ marginTop: "0.5rem" }} />
          )}
        </div>
      )}
    </FormWrapper>
  );
}
