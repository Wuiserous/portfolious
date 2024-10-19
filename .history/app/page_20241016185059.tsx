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

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();  // Call the function when the component mounts
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      const data = res.data;
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to handle adding a new post and refetching posts
  const addPost = async (newPost: Post) => {
    try {
      await axios.post('/api/posts', newPost);  // Post to the server
      fetchPosts(); // Fetch posts again after successfully creating a post
    } catch (error) {
      console.error('Error adding post:', error);
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
