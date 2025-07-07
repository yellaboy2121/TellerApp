import { FormWrapper } from "./FormWrapper";
import { useState } from "react";

type RedditFormData = {
  subreddit: string;
  keyword?: string;
};

type RedditFormProps = RedditFormData & {
  updateFields: (fields: Partial<RedditFormData>) => void;
};

export function RedditToolForm({
  subreddit,
  keyword,
  updateFields,
}: RedditFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // TODO: Call backend Reddit scraper with subreddit + keyword
    // fetch(`/api/reddit?subreddit=${subreddit}&keyword=${keyword}`)
    //   .then((res) => res.json())
    //   .then((data) => { ... });
  };

  return (
    <FormWrapper title="Reddit Story Tool">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          Subreddit:
          <input
            type="text"
            value={subreddit}
            onChange={(e) => updateFields({ subreddit: e.target.value })}
            placeholder="e.g., AskReddit"
            required
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </label>

        <label>
          Keyword Filter (optional):
          <input
            type="text"
            value={keyword || ""}
            onChange={(e) => updateFields({ keyword: e.target.value })}
            placeholder="e.g., cheating"
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </label>

        <button type="submit" style={{ padding: "0.5rem", fontWeight: "bold" }}>
          Fetch Top Story
        </button>

        {submitted && (
          <p style={{ color: "#888", fontSize: "0.9rem" }}>
            🔄 Fetching from Reddit backend soon...
          </p>
        )}
      </form>
    </FormWrapper>
  );
}
