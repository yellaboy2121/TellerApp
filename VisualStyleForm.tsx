import { FormWrapper } from "./FormWrapper";

type VisualStyleData = {
  visualStyle: string;
};

type VisualStyleFormProps = VisualStyleData & {
  updateFields: (fields: Partial<VisualStyleData>) => void;
};

export function VisualStyleForm({
  visualStyle,
  updateFields,
}: VisualStyleFormProps) {
  const styles = [
    { label: "Anime", src: "/styles/anime.jpg", value: "anime" },
    {
      label: "Cartoon (3D)",
      src: "/styles/cartoon_3d.jpg",
      value: "cartoon3d",
    },
    { label: "Cinematic", src: "/styles/cinematic.jpg", value: "cinematic" },
    { label: "Dark", src: "/styles/dark.jpg", value: "dark" },
    {
      label: "Cartoon (2D)",
      src: "/styles/cartoon_2d.jpg",
      value: "cartoon_2d",
    },
    { label: "Comic", src: "/styles/comic.jpg", value: "comic" },
    { label: "Realistic", src: "/styles/realistic.jpg", value: "realistic" },
  ];

  return (
    <FormWrapper title="Choose Your Visual Style">
      <p
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "1rem",
          color: "#555",
        }}
      >
        Pick a vibe. This style will shape how your video looks visually — from
        anime to cinematic.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {styles.map((style) => (
          <div
            key={style.value}
            onClick={() => updateFields({ visualStyle: style.value })}
            style={{
              border:
                visualStyle === style.value
                  ? "3px solid #007bff"
                  : "2px solid #ccc",
              borderRadius: "10px",
              cursor: "pointer",
              padding: "0.5rem",
              textAlign: "center",
              width: "150px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow:
                visualStyle === style.value
                  ? "0 0 10px rgba(0, 123, 255, 0.5)"
                  : "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                "scale(1.05)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                visualStyle === style.value
                  ? "0 0 10px rgba(0, 123, 255, 0.5)"
                  : "none";
            }}
          >
            <img
              src={style.src}
              alt={style.label}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>
              {style.label}
            </p>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
}
