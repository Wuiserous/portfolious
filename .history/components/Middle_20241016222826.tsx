'use client';
interface Post {
    id: number;
    content: string;        
} // Assuming you have types defined or you can just use `interface` locally

export default function Middle({ posts }: { posts: Post[] }) {
    return (
        <div className="w-[50%] h-[100vh] overflow-y-scroll flex flex-col gap-2 p-2 bg-transparent border-gray-700 no-scrollbar scroll-smooth">
           {posts.map((post) => (
            <div key={post.id} className="">
              {post.content}
            </div>
           ))}
        </div>
    );
}
