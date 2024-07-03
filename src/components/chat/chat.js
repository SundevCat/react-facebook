import "./chat.css"
import Gift from "../../assets/giftbox.png"
import Blank from "../../assets/blank-profile.png"
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { useAuth } from "../../Contexts/AuthContext";

function Chat() {

    const userAuth = useAuth()
    const [users, setUsers] = useState({})
    const [ready, setReady] = useState(false)

    useEffect(() => {
        try {
            fetch(process.env.REACT_APP_API_URL + 'users/', {
                method: 'GET',
                headers: { 'content-type': 'application/json' }
            })
                .then((res) => { return res.json() })
                .then((data) => {
                    setReady(true)
                    setUsers(data)
                }).catch((err) => {
                    console.log(err);
                })
        } catch (err) {
            console.log(err);
        }
    }, [])




    return (




        <div className="w-full hidden min-[900px]:block  bg-zinc-900 h-dvh pr-2 overflow-hidden hover:overflow-auto hover:pr-0 ">

            {ready === false ? <div role="status" className="max-w-sm p-4  animate-pulse md:p-6 dark:border-gray-700">

                <div className="flex items-center mt-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>

                :
                <div className="flex  flex-col pt-4">
                    <div className="px-4">
                        <div className=" text-lg text-gray-400 "> วันเกิด</div>
                    </div>
                    <Link className="flex px-4 py-2 justify-start items-center  hover:bg-zinc-700 hover:rounded-md">
                        <img className="w-8 h-8" src={Gift} />
                        {ready && <div className=" px-2 text-white"> วันนี้เป็นวันเกิดของ {users[Math.floor(Math.random() * 10)].userName}</div>}
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
                        {ready &&
                            <>{
                                users.map((data, i) =>
                                    <Link key={i} className="flex pl-4 py-2 justify-start items-center  hover:bg-zinc-700 hover:rounded-md">
                                        <img className="w-8 h-8 rounded-full" src={Blank} />
                                        <div className=" pl-4 text-white"> {data.userName}</div>
                                    </Link>
                                )
                            }</>
                        }
                    </div>

                </div>
            }
        </div>
    )

}

export default Chat