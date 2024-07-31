import React, { useEffect, useRef, useState } from 'react'
import { urlImg } from '../../../function/UrlImg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useAuth } from '../../../Contexts/AuthContext';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'flowbite-react';

function BlockPost(props) {
    const [user, setUser] = useState(null);
    const [toggleShowmore, setToggleShowmore] = useState(false);
    const [modelDelete, setModelDelete] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const showMoreRef = useRef();
    const userAuth = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        getUserPost(props.post.postOwnnerID)
        const handdleClickOutside = (e) => {
            if (showMoreRef.current && !showMoreRef.current.contains(e.target)) {
                setToggleShowmore(false)
            }
        }
        document.addEventListener("mousedown", handdleClickOutside)


        return () => {
            document.removeEventListener("mousedown", handdleClickOutside)
        }
    }, [])

    function deletePost() {
        try {
            fetch(process.env.REACT_APP_API_URL + "posts/delete/" + props.post._id, {
                method: "DELETE", headers: { 'Authorization':`Bearer ${userAuth.token}`  }
            }).then((res) => {
                if (res.status === 200) {
                    setDeleted(true)
                    setTimeout(() => {
                        window.location.reload();
                    }, 500)
                }
            })
        } catch (e) {
            console.log(e);
        }

    }

    async function getUserPost(id) {
        try {
            setUser(await fetch(process.env.REACT_APP_API_URL + 'users/finduserpost/' + id, {
                method: 'GET',
                headers: { 'content-type': 'application/json', 'authorization': `Bearer ${userAuth.token}`  }
            })
                .then(async (res) => {
                    return res.json()
                })
                .then((data) => {
                    return data
                }))

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <> {
            user &&
            <div className="mt-5  bg-zinc-800 rounded-xl ">
                <div className="mx-5 py-5 flex relative">
                    <img className="w-10 h-10 rounded-full object-cover" src={urlImg(user.image)} />
                    <div className="flex flex-col rounded-3xl w-full ml-2 text-white"  >
                        {user.userName} {user.userLastName}
                        <div className="my-auto text-xs flex font-semibold text-gray-500">
                            public
                        </div>
                    </div>
                    <div onClick={() => setToggleShowmore(!toggleShowmore)} className=' text-gray-400 '>
                        <MoreHorizIcon className=' cursor-pointer hover:bg-gray-500 rounded-full ' />
                    </div>
                    {toggleShowmore &&
                        <div id="dropdownDivider" className="z-10 absolute divide-y bottom-0 right-10 bg-zinc-700 divide-gray-100 rounded-lg shadow-lg w-40 " ref={showMoreRef}>
                            <ul className="py-2 text-sm text-gray-600 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                <li className=' px-2'>
                                    <div className=' text-white flex items-center hover:bg-gray-500  rounded-md'>
                                        <BookmarkIcon className='ml-2' />
                                        <a className="text-white  block px-4 py-2  ">Save Post</a>
                                    </div>
                                </li>
                            </ul>
                            {userAuth.authUser.id === props.post.postOwnnerID &&
                                <div className="p-2">
                                    <div onClick={() => setModelDelete(true)} className=' text-white flex items-center hover:bg-gray-500  rounded-md cursor-pointer'>
                                        <DeleteIcon className='ml-2' />
                                        <a className="text-white  block px-4 py-2  ">Delete Post</a>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
                <div className=" text-white px-5 pb-5 text-sm">
                    {props.post.postText}
                </div>
            </div>
        }
            <Modal show={modelDelete} onClose={() => setModelDelete(false)} style={{ backgroundColor: '#00000050' }}>
                <div className="relative bg-zinc-800 rounded-lg  mx-auto w-[500px] mt-52" >
                    <div className=" relative  p-4 md:p-5   dark:border-gray-600">
                        <h3 className="text-xl text-center  m-auto font-semibold text-white">
                            Delete your post ?
                        </h3>
                        <button type="button" onClick={() => setModelDelete(false)} className=" bg-transparent absolute right-5 top-5 text-gray-400  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className=' text-white px-4'>
                        If you remove you post You will not be able to restore the post.
                    </div>
                    <div className=' flex p-4 justify-end'>
                        <button className=' px-6 py-1 text-blue-600'>cancle</button>

                        <button onClick={deletePost} className=' bg-blue-600 rounded-md px-8 py-2 text-white'>
                            <div role="status">
                                {deleted ?

                                    <>
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </>
                                    : <div>
                                        Delete
                                    </div>
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default BlockPost