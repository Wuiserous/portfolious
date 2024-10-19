'use client';
import { useEffect, useState } from "react";

//icons//

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
            Lisa sat alone in the dark, flipping through old family photos when her phone buzzed. It was a picture—of her sitting there, in the very same room, taken from just behind her shoulder.
            Heart pounding, she spun around, but no one was there. She quickly locked the doors, checking the windows, her breath shaky. Another message: "You missed a spot." Attached was a photo of the basement door, slightly ajar.
            She stared at the photo in disbelief—she hadn’t been to the basement in weeks. Cautiously, she walked over, her hand trembling as she reached for the handle.
            Suddenly, a whisper filled the room: "I’ve been waiting."
            The basement door creaked open, but on the other side, there was no basement… just her empty, cold bedroom.
            <div>

            </div>
            </div>
        </div>
    )
}