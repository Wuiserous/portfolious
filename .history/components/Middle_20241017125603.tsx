'use client';
interface Post {
    id: number;
    content: string;        
} // Assuming you have types defined or you can just use `interface` locally

export default function Middle({ posts }: { posts: Post[] }) {
    return (
        <div>
            <div className="flex sticky top-0 gap-2 w-full h-fit justify-between items-center border-b-[1px] border-gray-700 bg-orange-500">
                <button>for you</button>
                <button>followers</button>
                <button>ideas</button>
                <button>projects</button>
            </div>
        </div>
        
    );
}
