export default function Left() {
  return (
    <div className="w-[30%] p-4 flex justify-center h-full bg-black border-r-[1px] border-gray-700">
        <div className="w-[100%] h-[20%] border-[1px]">
            <textarea name="post" id="post" placeholder="what's inyour mind.." className="w-full h-full bg-transparent border-none text-white"></textarea>
        </div>
    </div>
  )
}