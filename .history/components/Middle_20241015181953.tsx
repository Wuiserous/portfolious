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
            It was late, and the hospital halls were empty. Ava sat by her husband's bedside, listening to the beeping of the heart monitor—steady, rhythmic, and monotonous. Michael had slipped into a coma two weeks ago after a car crash, and the doctors weren’t hopeful. They said he wouldn’t wake up.

But Ava refused to leave. Every night, she sat in that cold, sterile room, hoping, praying for a miracle.

Tonight, something felt different, though. The air was heavy, almost oppressive. She shivered as she leaned closer to Michael’s face, gently stroking his hand. His skin was cool, lifeless. She whispered, "I’m still here, Michael. Come back to me, please."

And then, the impossible happened.

His hand twitched.

Ava's breath caught. She stood up, leaning over him, heart racing. His eyes, closed for weeks, fluttered open. He looked straight at her.

"Michael?" she whispered, tears welling in her eyes.

His lips barely moved as he uttered one word: "Run."

Ava froze, confusion and fear tightening her chest. "What? Why? Michael, you're awake! I need to get the doctor!"

She turned to leave, but his grip tightened around her wrist—far tighter than a coma patient should have been able to. She gasped, turning back to him. His eyes, now wide open, were filled with terror. "It’s not me," he rasped, voice shaking. "Ava, run!"

Before she could react, the lights flickered. A deep, guttural growl echoed through the room, a sound that no human could make. Ava’s eyes darted around, panic rising, but the room was empty—just her, Michael, and the low hum of the machines.

The beeping of the heart monitor sped up suddenly, erratic. Ava's gaze snapped to the machine. The heart rate was climbing… faster and faster, far beyond what was possible, until the numbers on the screen blurred into unreadable chaos.

And then, with a sickening jolt, the machine flatlined.

Ava screamed, pulling her hand free from Michael’s grip. His body jerked violently, his back arching unnaturally off the bed as his mouth opened in a silent scream. His skin started to ripple, as if something was crawling underneath, pushing against the surface, trying to get out.

She stumbled back, her mind racing, not understanding what was happening. But then the growl came again—this time, it wasn’t coming from Michael.

It was behind her.

Slowly, she turned, heart thundering in her chest. There, standing in the doorway, was… her husband. Michael. But that couldn’t be. He was on the bed.

The Michael in the doorway smiled, his lips curling into something sinister, eyes gleaming with malice. "Didn’t I tell you to run?" he whispered, voice dripping with mockery.

Ava’s blood turned to ice. She spun back to the bed, only to find it empty. Michael’s body was gone. The sheets were crumpled, and the machines were still beeping as though nothing had happened. Her head whipped back to the door, but the figure was gone too.

Her mind raced, fear clawing at her from every direction. Was she losing her mind?

Then, a voice whispered behind her ear, so close she could feel the breath on her neck: "I’m right here."

Her world went black.
            </div>
        </div>
    )
}