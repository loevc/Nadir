import { useEffect } from "react";


export default function MakeLovePage() {

    const isMember = false;

    const handleDoIt = () => {
        if (!isMember) {
            alert("请先开通会员");
            return;
        }
        console.log("do once ");
    };

    const handleWait = () => {
        alert("等个锤子🔨")
        console.log("waitting");
    };


    return (
        <>
            <div className="flex flex-col text-red-500  ">
                <h1>整了吗</h1>   
            </div>
            <div className="flex flex-row">
                <button onClick={handleDoIt}>整一下</button>
                <button onClick={handleWait}>再等等</button>
            </div>
        </>
    );
}