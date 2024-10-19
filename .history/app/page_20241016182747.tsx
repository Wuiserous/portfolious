import Image from "next/image";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";
import { useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

    const addPost = (newPost: any) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left addPost />
      <Middle />      
      <Right />
    </div>
  )
}
