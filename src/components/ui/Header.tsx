import { useBlogContext } from "../../store/BlogContext";
import Results from "../blog/Results";
import SearchPosts from "../blog/SearchPosts";

export default function Header() {
  const { handleClearPosts } = useBlogContext();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
