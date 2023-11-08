import { PostType } from "../../App";
import { useBlogContext } from "../../store/BlogContext";

export default function List() {
  const { posts } = useBlogContext();
  return (
    <ul>
      {posts.map((post: PostType, i: number) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
