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

  // Fetch posts function
  const fetchPosts = async () => {
      try {
          const res = await axios.get('/api/posts');
          const data = res.data;
          setPosts(data);
      } catch (error) {
          console.error('Error fetching posts:', error);
      }
  };

  // Fetch posts when the component mounts
  useEffect(() => {
      fetchPosts();
  }, []);

  // Handle adding a new post
  const addPost = async (newPost: Post) => {
      try {
          // Add the new post to the server
          await axios.post('/api/posts/createPost', newPost);
          // Fetch updated posts list from the server after creating the post
          // fetchPosts();
      } catch (error) {
          console.error('Failed to add post:', error);
      }
  };

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Left addPost={addPost} />
      <Middle posts={posts} />
      <Right />
    </div>
  );
}
