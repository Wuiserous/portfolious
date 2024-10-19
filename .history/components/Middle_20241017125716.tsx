'use client';
interface Post {
    id: number;
    content: string;        
} // Assuming you have types defined or you can just use `interface` locally

export default function Middle({ posts }: { posts: Post[] }) {
    return (
        <div className="w-[50%] h-[100%] flex flex-col justify-center items-center bg-transparent border-r-[1px] border-gray-700">
            <div className="flex sticky top-0 gap-2 w-full h-fit justify-between items-center border-b-[1px] border-gray-700 bg-orange-500">
                <button>for you</button>
                <button>followers</button>
                <button>ideas</button>
                <button>projects</button>
            </div>
            <div className="w-[100%] h-[100vh] overflow-y-scroll flex flex-col gap-2 p-2 bg-transparent border-gray-700 no-scrollbar scroll-smooth">
           {posts.map((post) => (
            <div key={post.id} className="w-[100%] h-fit p-2 bg-transparent border-[0.5px] border-gray-700 rounded-md">
              {post.content}
            </div>
           ))}
        </div>
        </div>
        
    );
}
