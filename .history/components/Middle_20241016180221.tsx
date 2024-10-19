'use client';
import { useEffect, useState } from "react";

//icons//
import { DiCodeigniter } from "react-icons/di";

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
            <div className="border-[1px] border-orange-500 rounded-md p-2">
            {posts.map}
            </div>
        </div>
    )
}