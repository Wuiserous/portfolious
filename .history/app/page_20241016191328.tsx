'use client';
import Image from "next/image";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";
import { useState, useEffect } from 'react';
import axios from "axios";


interface Post {
  id: number;
  content: string;
  createdAt: Date;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);



  useEffect(() => {
      const fetchPosts = async () => {
          const res = await axios.get('/api/posts');
          const data = res.data
          console.log(data)
          setPosts(data);
      };
      fetchPosts();
  }, []);

    // Fetch posts on page load
    const addPost = (newPost: Post) => {
      setPosts((prevPosts) => [...prevPosts, newPost]);
  };


  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left addPost={addPost} />
      <Middle posts={posts} />      
      <Right />
    </div>
  )
}
