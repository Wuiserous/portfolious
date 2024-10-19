'use client';
import { useEffect, useState } from "react";

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
            <div>
            The night was quiet, almost too quiet. Emily sat alone in her dimly lit living room, scrolling through her phone to distract herself from the eerie silence. The wind howled outside, making the branches tap rhythmically against the windows like skeletal fingers. She had always hated being alone at night, especially in this old house that creaked and groaned as if it were alive. But tonight, something felt off.

Suddenly, her phone buzzed. A text from an unknown number: "I see you."

Her heart skipped a beat, and she froze, staring at the message. She glanced around the room, her eyes darting to the locked windows and bolted door. It was a prank, she told herself, just a prank. She tried to brush it off, but the unsettling feeling gnawed at her.

Another buzz: "You're not alone."

Her breath hitched. The hair on the back of her neck stood up as her eyes flicked to the reflection of the window. In the faint glow of the streetlight, she saw a shadow—a figure standing behind her, motionless. Her blood turned to ice. Slowly, she turned her head, muscles stiff with terror.

Nothing. No one was there.

Heart pounding, she grabbed her phone and dialed 911 with shaking hands. But before she could press call, another text came through: "Don’t bother. I’ve already dealt with her."

Her throat tightened. Her mind raced. Dealt with her? She bolted toward the stairs to check on her daughter, who had been asleep upstairs for hours. Bursting into the bedroom, she saw the bed was empty. Panic surged. She frantically searched the room, her voice cracking as she called her daughter’s name. Nothing. Only the silence of a house too old and too quiet.

And then her phone buzzed again.

She didn't want to look, but her trembling hands lifted the screen to her face. The message was simple, and it turned her stomach to stone:

"Check the mirror."

Slowly, she turned toward the floor-length mirror in the corner of the room. Her reflection stared back at her, wide-eyed, face pale with fear. But then... the reflection smiled.

And Emily didn’t.
            </div>
        </div>
    )
}