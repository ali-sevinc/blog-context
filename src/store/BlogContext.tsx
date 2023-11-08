import { createContext, ReactNode, useState, useContext } from "react";
import { faker } from "@faker-js/faker";

import { PostType } from "../App";

type InitialType = {
  posts: { title: string; body: string }[];
  searchQuery: string;
  handleAddPost: (post: PostType) => void;
  handleClearPosts: () => void;
  setSearchQuery: (e: string) => void;
};
const initialState: InitialType = {
  posts: [],
  searchQuery: "",
  handleAddPost: () => {},
  handleClearPosts: () => {},
  setSearchQuery: () => {},
};

const BlogContext = createContext(initialState);

export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export default function BlogContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: PostType) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <BlogContext.Provider
      value={{
        posts: searchedPosts,
        handleAddPost,
        handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  const blog = useContext(BlogContext);
  return blog;
}
