'use client'
import React, { useState } from "react";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";

export default function Home() {
  const PostApp = () => {
    const [postContent, setPostContent] = useState("");
  
    // Handler to update the post content state
    const handlePostChange = (content) => {
      setPostContent(content);
    };
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left />
      <Middle />      
      <Right />
    </div>
  )
}
