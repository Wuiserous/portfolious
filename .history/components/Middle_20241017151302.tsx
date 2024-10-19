'use client';
import styles from './BurgerMenu.module.css';
import { useState } from 'react';

interface Post {
    id: number;
    content: string;        
} // Assuming you have types defined or you can just use `interface` locally

export default function Middle({ posts }: { posts: Post[] }) {
    const [activeTab, setActiveTab] = useState('Projects');  // Set the default active tab

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);  // Update the active tab when clicked
    };
    return (
        <div className="w-[50%] h-[100%] flex flex-col justify-center items-center border-l-[1px] border-r-[1px] border-gray-700">
            <div className={`flex sticky top-0 w-full h-fit justify-between items-center border-l-[1px] border-r-[1px] border-gray-700 bg-transparent ${styles.navBar}`}>
                <button 
                    className={`flex-1 hover:bg-orange-500 transition-all duration-300 ease-in-out text-center py-2 ${activeTab === 'All' ? 'border-b-2 border-orange-500' : 'border-b-2 border-transparent'}`} 
                    onClick={() => handleTabClick('All')}
                >
                    All
                </button>
                <button 
                    className={`flex-1 hover:bg-orange-500 transition-all duration-300 ease-in-out text-center py-2 ${activeTab === 'Following' ? 'border-b-2 border-orange-500' : 'border-b-2 border-transparent'}`} 
                    onClick={() => handleTabClick('Following')}
                >
                    Following
                </button>
                <button 
                    className={`flex-1 hover:bg-orange-500 transition-all duration-300 ease-in-out text-center py-2 ${activeTab === 'Jobs' ? 'border-b-2 border-orange-500' : 'border-b-2 border-transparent'}`} 
                    onClick={() => handleTabClick('Jobs')}
                >
                    Jobs
                </button>
                <button 
                    className={`flex-1 hover:bg-orange-500 transition-all duration-300 ease-in-out text-center py-2 ${activeTab === 'Projects' ? 'border-b-2 border-orange-500' : 'border-b-2 border-transparent'}`} 
                    onClick={() => handleTabClick('Projects')}
                >
                    Projects
                </button>
            </div>
            <div className="w-[100%] pt-12 h-[100vh] overflow-y-scroll flex flex-col gap-2 p-2 bg-transparent no-scrollbar scroll-smooth">
           {posts.map((post) => (
            <div key={post.id} className="w-[100%] h-fit p-2 bg-transparent border-[0.5px] border-gray-700">
                <div className='w-[100%] gap-1 h-fit flex flex-row'>
                    <div className='w-[40px] h-[40px] rounded-full'>
                        <img src="moon.png" alt="Avatar" />
                    </div>
                    <div className='flex justify-center gap-1 items-start'>
                    <span><strong>Wuis</strong></span>
                    <span className='text-[12px] mt-1 text-gray-500'>@Wuis</span>
                    </div> 
                </div>
                <div className='flex border-[1px] border-gray-700 p-1 rounded-md'>
                {post.content}
                </div>
            </div>
           ))}
        </div>
        </div>
        
    );
}
