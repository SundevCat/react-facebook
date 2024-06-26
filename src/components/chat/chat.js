import "./chat.css"
import Gift from "../../assets/giftbox.png"

import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";

function Chat() {
    const [toggleMore, setToggleMore] = useState(false)
    const [checkURL, setCheckURL] = useState(window.location.pathname);
    const user = useContext(DataContext)

    return (
        <div className="w-full hidden min-[900px]:block  bg-zinc-900 h-dvh pr-2 overflow-hidden hover:overflow-auto hover:pr-0 ">
            <div className="flex  flex-col pt-4">
                <div className="px-4">
                    <div className=" text-lg text-gray-400 "> วันเกิด</div>
                </div>
                <Link className="flex px-4 py-2 justify-start items-center  hover:bg-zinc-700 hover:rounded-md">
                    <img className="w-8 h-8" src={Gift} />
                    <div className=" px-2 text-white"> วันนี้เป็นวันเกิดของ {user[1].name}</div>
                </Link>
                <div className="border-t w-11/12 mx-auto my-2  border-gray-600"></div>
                <div className="flex justify-between px-4  ">
                    <div className=" text-lg text-gray-400 "> ผู้ติดต่อ</div>
                    <div className="flex">
                        <SearchIcon className="mx-3 text-gray-500 hover:bg-zinc-700 hover:rounded-full hover:cursor-pointer" />
                        <MoreHorizIcon className="text-gray-500 hover:bg-zinc-700 hover:rounded-full hover:cursor-pointer" />
                    </div>
                </div>
                <div>
                    {
                        user.map((data, i) =>
                            <Link key={i} className="flex pl-4 py-2 justify-start items-center  hover:bg-zinc-700 hover:rounded-md">
                                <img className="w-8 h-8 rounded-full" src={`/assets/${data.main_image}`} />
                                <div className=" pl-4 text-white"> {data.name}</div>
                            </Link>
                        )
                    }
                </div>

            </div>
        </div>
    )

}

export default Chat