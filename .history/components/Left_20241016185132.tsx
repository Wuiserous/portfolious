import { useState } from "react";
import axios from "axios";

export default function Left({ addPost }: { addPost: (post: any) => void }) {
  const [content, setContent] = useState("");

  const handleChange = (e: any) => {
    setContent(e.target.value);
  };

  const handlePostSubmit = async () => {
    try {
      const response = await axios.post('/api/posts', { content });
      if (response.status === 200) {
        addPost(response.data); // Trigger re-fetch after successful post creation
        setContent(""); // Clear the textarea after successful post
      }
    } catch (error) {
      console.error('Failed to post:', error);
    }
  };

  return (
    <div className="w-[30%] flex justify-center h-full bg-transparent border-r-[1px] border-gray-700">
      <div className="w-[100%] h-[30%] gap-2 p-2 border-b-[1px] border-gray-700 flex justify-center flex-col">
        <div className="w-[100%] h-[90%] border-b-[1px] border-gray-700">
          <textarea
            value={content}
            onChange={handleChange}
            name="post"
            id="post"
            placeholder="what's in your mind..?"
            className="w-full h-full bg-transparent border-none p-2 text-white custom-textarea"
          />
        </div>
        <div className="w-[100%] h-[10%] justify-between items-center  border-gray-700 flex flex-row">
          <div className="flex gap-2 w-fit h-fit">
            <button>Image</button>
            <button>GIF</button>
            <button>Poll</button>
            <button>Emoji</button>
          </div>
          <div className="flex w-fit h-fit">
            <button className="bg-orange-500 w-20 rounded-md" onClick={handlePostSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
