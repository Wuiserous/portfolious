'use client';
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
  const [newPostCreated, setNewPostCreated] = useState(false); // New state to track post creation

  // Fetch posts when component mounts or when a new post is created
  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const res = await axios.get('/api/posts');
              const data = res.data;
              setPosts(data);
          } catch (error) {
              console.error('Error fetching posts:', error);
          }
      };

      fetchPosts();
  }, [newPostCreated]); // Re-run effect when newPostCreated changes

  // Function to handle adding new post and refetching posts
  const addPost = (newPost: Post) => {
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setNewPostCreated((prev) => !prev); // Toggle the state to refetch posts
  };

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left addPost={addPost} />
      <Middle posts={posts} />      
      <Right />
    </div>
  );
}
``
