import { use } from "react";

async function getStories(id) {
  let post = await fetch(`https://dummyjson.com/posts/${id}`);

  return post.json();
}

export default function Page({ params }) {
  let id = params.id;
  let story = use(getStories(id));

  return (
    <div>
      <p>{story.title}</p>
      <p>{story.body}</p>
    </div>
  );
}
