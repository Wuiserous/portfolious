'use client';
import { useEffect, useState } from "react";

export default function Middle() {
    const [posts, setPosts] = useState([]);

    // Fetch posts on component mount
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data);
      };
  
      fetchPosts();
    }, []); //
    return (
        <div className="w-[50%] h-[100vh] overflow-y-scroll flex flex-col gap-2 p-2 bg-transparent border-gray-700 no-scrollbar scroll-smooth">
            <div className="w-full md:w-[50%] h-[100vh] overflow-y-scroll flex flex-col gap-2 p-2 bg-transparent border-gray-700">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-4 mb-2 rounded-lg border border-gray-600">
            <p className="text-white">{post.content}</p>
            <span className="text-gray-400 text-xs">{new Date(post.createdAt).toLocaleString()}</span>
          </div>
        ))
      ) : (
        <p className="text-white">No posts yet.</p>
      )}
    </div>
        </div>
    )
}