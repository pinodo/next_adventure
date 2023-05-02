import Link from "next/link";

export default function StoriesList({ stories }) {
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.id}>
          <Link href={`/main/${story.id}`}>
            <img alt="book img" />
            <p>{story.title}</p>
            <p>{story.author}</p>
            <p>{story.phase}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
