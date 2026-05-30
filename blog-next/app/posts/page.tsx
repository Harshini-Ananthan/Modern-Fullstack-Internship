"use client";

import Link from "next/link";
import {useEffect, useState } from "react";
import {Post, posts as postsData } from "../../lib/posts";

export default function PostsPage() {
  const [data, setData] = useState<Post[]>([]);
  async function loadPosts() {
    return postsData
  }

  useEffect(() => {
    async function fetchData() {
      const result = await loadPosts();
      setData(result);
    }
    fetchData();
  },[]);

  return (
    <>
      <h1>Blog</h1>
      <br/>
      <ul>
        {data.map((post) =>(
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <br/>
            <p>{post.summary}</p>
            <br/>
            <br/>
          </li>
     ))}
      </ul>
    </>
  );
}
