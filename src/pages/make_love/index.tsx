import { useEffect } from "react";
import toast from "react-hot-toast";


export default function MakeLovePage() {

    const isMember = false;

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
        alert("等个锤子🔨")
        console.log("waitting");
    };

    const handleTips = () => {
        alert("注意：本页面仅供娱乐，请勿模仿！")
    }


    return (
        <>
            <div className="flex flex-col text-pink-500  ">
                <h1>整了吗</h1>   
            </div>
            <div className="flex flex-row">
                <button className="text-green-500 mr-4" onClick={handleDoIt}>整一下</button>
                <button className="text-red-500 ml-4" onClick={handleWait}>再等等</button>
            </div>
            <div>
                <p className="fixed bottom-4 right-4 text-gray-500 " onClick={handleTips}>注意：本页面仅供娱乐，请勿模仿！</p>
            </div>
        </>
    );
}