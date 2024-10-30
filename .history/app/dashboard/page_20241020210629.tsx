'use client';
import Left from ",.";
import Middle from "../components/Middle";
import Right from "../components/Right";
import { useState, useEffect, useCallback } from 'react';
import axios from "axios";  

interface Post {
  id: number;
  content: string;
  createdAt: string; // Ensure this matches your API response
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostCreated, setNewPostCreated] = useState(false); // Track post creation

  // Fetch posts when component mounts or a new post is created
  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const res = await axios.get('/api/posts');
              const data = res.data;
              console.log("Fetched posts:", JSON.stringify(data)); // Debugging log
              setPosts(data);
          } catch (error) {
              console.error('Error fetching posts:', error);
          }
      };
      fetchPosts();
  }, [newPostCreated]); // Re-run effect when newPostCreated changes

  // Handle adding a new post
  const addPost = useCallback((newPost: Post) => {
      setPosts((prevPosts) => [...prevPosts, newPost]); // Optionally add new post instantly
      setNewPostCreated((prev) => !prev); // Toggle the state to trigger refetch
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left addPost={addPost} />
      <Middle posts={posts} />
      <Right />
    </div>
  );
}
