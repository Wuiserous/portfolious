'use client';
interface Post {
    id: number;
    content: string;        
} // Assuming you have types defined or you can just use `interface` locally

export default function Middle({ posts }: { posts: Post[] }) {
    return (
        <div className="w-[50%] h-[100vh] overflow-y-scroll flex flex-col gap-2 p-2 bg-transparent border-gray-700 no-scrollbar scroll-smooth">
            <div className="flex gap-2 w-fit h-fit justify-center">
                <button>for you</button>
                <button>followers</button>
                <button>ideas</button>
                <button>projects</button>
            </div>
           {posts.map((post) => (
            <div key={post.id} className="w-[100%] h-fit p-2 bg-transparent border-[0.5px] border-gray-700 rounded-md">
              {post.content}
            </div>
           ))}
        </div>
    );
}
