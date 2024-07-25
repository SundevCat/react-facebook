import "./content.css"
import Slide from './slider/slider'
import { useEffect, useState } from "react"
import { useAuth } from "../../Contexts/AuthContext"
import { urlImg } from "../../function/UrlImg"
import Posts from "./Posts/Posts"
import BlockPost from "./BlockPost/BlockPost"

function Content() {
    const [userData, setUserData] = useState(null);
    const [postList, SetPostList] = useState(null);
    const [toggleModel, setToggleModel] = useState(false)
    const userAuth = useAuth()
    let postArr = []

    async function fetchData() {
        try {
            await fetch(process.env.REACT_APP_API_URL + 'users/finduser/' + userAuth.authUser.id, {
                method: 'GET',
                headers: { 'content-type': 'application/json' }
            })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setUserData(data)
                })

        } catch (err) {
            console.log(err);
        }
    }

    async function fetchPost() {
        try {
            SetPostList(await fetch(process.env.REACT_APP_API_URL + 'posts/', {
                method: 'GET',
                headers: { 'content-type': 'application/json' }
            })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    return (data)
                }))

        } catch (err) {
            console.log(err);
        }
    }




    useEffect(() => {
        fetchData();
        fetchPost();
    }, [])
    return (
        <div className=" w-full pt-14 min-[900px]:w-3/4 xl:w-[55.56%] bg-zinc-900 mt-2 min-h-dvh xl:m-auto px-20">
            <div className=" relative mt-10">
                <Slide />
                <div className="mt-5 h-24 bg-zinc-800 rounded-xl ">
                    <div className="mx-5 py-5 flex border-b border-gray-400">
                        {userData && <>
                            <img className="w-10 h-10 rounded-full object-cover" src={urlImg(userData.image)} />
                            <div onClick={() => setToggleModel(true)} className="flex rounded-3xl w-full ml-2 bg-zinc-700 relative  hover:bg-zinc-600 cursor-pointer"  >
                                <div className="my-auto flex ml-3  text-gray-500">
                                    What's on you mind   {userData.userName}
                                </div>
                            </div>
                            <Posts toggleModal={toggleModel} userData={userData} setToggleModel={setToggleModel} />
                        </>}
                    </div>
                </div>
                {
                    postList != null && <>
                        {
                            postList.map((post, i) => {
                                return <BlockPost post={post} key={i} />
                            })
                        }
                    </>}

            </div>
        </div>
    )
}

export default Content