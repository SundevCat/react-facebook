import "./chat.css"

import { Link } from "react-router-dom";
import React,{ useState } from "react";

function Chat() {
    const [toggleMore, setToggleMore] = useState(false)
    const [checkURL, setCheckURL] = useState(window.location.pathname);
    return (
        <div className="w-full hidden lg:block  bg-zinc-900 ">
            <div className="flex w-full flex-col">
                <div>
                    <div className=" text-lg text-gray-500 mt-4"> ผู้ติดต่อ</div>
                </div>
              
            </div>
        </div>
    )
}

export default Chat