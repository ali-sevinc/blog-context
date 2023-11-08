import { useBlogContext } from "../../store/BlogContext";

export default function Results() {
  const { posts } = useBlogContext();
  return <p>🚀 {posts.length} atomic posts found</p>;
}
