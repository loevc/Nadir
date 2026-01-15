import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";


interface User {
  id: number;
  name: string;
  title: string;
  avatar: string;
  isMatched?: boolean;
}

export default function MakeLovePage() {

    const isMember = false;

    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: "Erin Lindford",
            title: "Product Engineer",
            avatar: "https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg"
        },
        {
            id: 2,
            name: "Arlene McCoy",
            title: "UI Designer",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786"
        },
        {
            id: 3,
            name: "Courtney Henry",
            title: "Backend Developer",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        }
    ]);
    const [isMatching, setIsMatching] = useState(false);
    const [matchedUser, setMatchedUser] = useState<User | null>(null);

    const handleDoIt = () => {
        console.log("do once 11");
        if (!isMember) {
            toast.error("请先成为会员💖", {
                duration: 4000,
                position: "top-center",
            });
            return;
        }
        console.log("do once ");
    };

    const handleWait = () => {
        toast.error("🔨请耐心等待💤", {
            duration: 4000,
            position: "top-center",
        });
        console.log("waitting");
    };

    const charge = () => {
        toast.success("充值成功！💖", {
            duration: 4000,
            position: "bottom-left",
        });
        console.log("charge");
    }

    const handleTips = () => {
        alert("注意：本页面仅供娱乐，请勿模仿！")
    }


    return (
        <>
            <div className="fixed top-4 right-4 gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg" alt="" />
                <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg font-semibold text-black">Erin Lindford</p>
                        <p className="font-medium text-gray-500">Product Engineer</p>
                    </div>
                    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                        DM
                    </button>
                </div>
            </div>


            <div className="flex flex-col text-green-500  ">
                <h1>整了么</h1>
            </div>
            <div className="flex flex-row">
                <button className="text-pink-500 mr-4" onClick={handleDoIt}>整一下</button>
                <button className="text-red-500 ml-4" onClick={handleWait}>再等等</button>
            </div>


            <div>
                <button className="fixed bottom-4 left-4 text-red-500 ml-4" onClick={charge}>充值入口</button>
            </div>

            <div>
                <p className="fixed bottom-4 right-4 text-gray-500 " onClick={handleTips}>注意：本页面仅供娱乐，请勿模仿！</p>
            </div>
        </>
    );
}