import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
export default function Left() {
  return (
    <div className="w-[30%] flex justify-center h-full bg-transparent border-r-[1px] border-gray-700">
        <div className="w-[100%] h-[30%] gap-2 p-2 border-b-[1px] border-gray-700 flex justify-center flex-col">
            <div className="w-[100%] h-[80%] border-b-[1px] border-gray-700">
                <textarea name="post" id="post" placeholder="what's in your mind.." className="w-full h-full bg-transparent border-none p-2 text-white custom-textarea"></textarea>
            </div>
            <div className="w-[100%] h-[20%] bg-red-500 border-gray-700 flex-c
            ">
                <div className="flex gap-2 w-fit h-fit">
                    <button><IoImageOutline /></button>
                    <button><MdOutlineGifBox /></button>
                    <button><FaPollH /></button>
                    <button><MdEmojiEmotions /></button>
                </div>
                <div className="flex w-fit h-fit">
                    <button><IoIosSend /></button>
                </div>
            </div>
        </div>
    </div>
  )
}