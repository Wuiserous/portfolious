'use client'
import React, { useState } from "react";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";

export default function Home() {
  const [postContent, setPostContent] = useState("");

  const handlePostChange = (content) => {
    setPostContent(content);
  };

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left postContent={postContent} onPostChange={handlePostChange} />
      <Middle postContent={postContent} />      
      <Right />
    </div>
  )
}
