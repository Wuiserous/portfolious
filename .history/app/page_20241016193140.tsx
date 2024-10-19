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
  const [newPostCreated, setNewPostCreated] = useState(false); // Track post creation
  const router = useRo
  // Fetch posts when component mounts or a new post is created
 
    
      const fetchPosts = async () => {
          try {
              const res = await axios.get('/api/posts');
              const data = res.data;
              console.log(data);
              setPosts(data);
          } catch (error) {
              console.error('Error fetching posts:', error);
          }
      };
      fetchPosts();
  }, [newPostCreated]); // Re-run effect when newPostCreated changes

  // Handle adding a new post
  const addPost = (newPost: Post) => {
      setNewPostCreated((prev) => !prev); // Toggle the state to trigger refetch
      setPosts((prevPosts) => [...prevPosts, newPost]); // Optionally add new post instantly
  };

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left addPost={addPost} />
      <Middle posts={posts} />
      <Right />
    </div>
  );
}
