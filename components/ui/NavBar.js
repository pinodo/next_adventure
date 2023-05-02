import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/" style={{ padding: "0 3px 0 0" }}>
        Home
      </Link>
      <Link href="/login" style={{ padding: "0 3px 0 0" }}>
        Login
      </Link>
      {/* <Link href="/posts" style={{ padding: "0 3px 0 0" }}>
        Posts
      </Link> */}
    </nav>
  );
}
