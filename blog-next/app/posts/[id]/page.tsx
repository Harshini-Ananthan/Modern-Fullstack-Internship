"use client";


import {useEffect, useState } from "react";
import {useParams } from "next/navigation";
import {Post, posts as postsData } from "../../../lib/posts";

export default function PostPage() {
  const params = useParams();
  const id = params?.id;
  const [data, setData] = useState<Post | null>(null);

  async function loadPost() {
    if (!id) {
      return;
    }

    const found = postsData.find((post) => String(post.id) === String(id)) ?? null;
    setData(found);
  }

  useEffect(() => {
    loadPost();
  }, [id]);

  return (
    <>
      
      {data ? (
        <>
          <h2>{data.title}</h2>
          <br />
          <p>{data.summary}</p>
          <br/>
          <p>{data.content}</p>
          <br/>
        </>
      ) : 
        (
        <>Loading post...</>
    )}
    </>
  )
}
