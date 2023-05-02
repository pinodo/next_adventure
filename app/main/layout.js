import { use } from "react";

import CreateNewThreadButton from "@/components/main/CreateNewThreadButton";
import StoriesList from "../../components/main/StoriesList";
import SearchBar from "@/components/main/SearchBar";
import Link from "next/link";

async function getStories() {
  // let stories = await fetch("https://api.github.com/users/pinodo");
  let stories = await fetch("https://dummyjson.com/posts?limit=3");

  return stories.json();
}

export default function MainLayout({ children }) {
  let { stories } = use(getStories());

  return (
    <div>
      <h1>Main Page</h1>
      <SearchBar />
      <CreateNewThreadButton />
      {/* <StoriesList stories={[]} /> */}
      {/* <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link href={`/main/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul> */}
      <div>{children}</div>
    </div>
  );
}
