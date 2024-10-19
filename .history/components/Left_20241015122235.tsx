export default function Left() {
  return (
    <div className="w-[30%] p-4 flex justify-center h-full bg-black border-r-[1px] border-gray-700">
        <div className="w-[100%] h-[20%] p-2 border-b-[1px] border-gray-700 flex justify-center items-center">
        <div className="w-[100%] h-[20%] border-b-[1px] border-gray-700">
            <textarea name="post" id="post" placeholder="what's in your mind.." className="w-full h-full bg-transparent border-none p-2 text-white custom-textarea"></textarea>
        </div>
        </div>
    </div>
  )
}