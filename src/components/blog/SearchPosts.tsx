import { useBlogContext } from "../../store/BlogContext";

export default function SearchPosts() {
  const { searchQuery, setSearchQuery } = useBlogContext();

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
