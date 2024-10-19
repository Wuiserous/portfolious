'use client'
import React, { useState } from "react";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";

export default function Home() {
  const [postContent, setPostContent] = useState("");

  
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left />
      <Middle />      
      <Right />
    </div>
  )
}
