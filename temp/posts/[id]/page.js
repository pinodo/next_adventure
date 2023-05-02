import { use } from "react";

async function getPost(id) {
  let post = await fetch(`https://dummyjson.com/posts/${id}`);

  return post.json();
}

export default function Page({ params }) {
  let id = params.id;
  let post = use(getPost(id));

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
