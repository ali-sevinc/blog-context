import { useState, FormEvent } from "react";
import { useBlogContext } from "../../store/BlogContext";

export default function FormAddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { handleAddPost } = useBlogContext();

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();
    if (!body || !title) return;
    handleAddPost({ title, body });
    setTitle("");
    setBody("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}
