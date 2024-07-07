import "./content.css"
import Slide from './slider/slider'
import Blank from '../../assets/blank-profile.png'
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../App"
import { useAuth } from "../../Contexts/AuthContext"
import { urlImg } from "../../function/UrlImg"

function Content() {
    const [userData, setUserData] = useState(null);
    const userAuth = useAuth()

    async function fetchData() {

        try {
            fetch(process.env.REACT_APP_API_URL + 'users/finduser/' + userAuth.authUser.id, {
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
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className=" w-full pt-14 min-[900px]:w-3/4 xl:w-[55.56%] bg-zinc-900 mt-2 h-dvh xl:m-auto px-20">
            <div className=" relative mt-10">
                <Slide />
                <div className="mt-5 h-24 w-full  bg-zinc-800 rounded-xl">
                    <div className="mx-5 py-5 flex border-b border-gray-400">
                        {userData ? <img className="w-10 h-10 rounded-full object-cover" src={urlImg(userData.image)} /> : ''}

                        {/* <input className=" rounded-3xl w-full ml-2 bg-zinc-700" placeholder={`   What's on you mind ${user[0].name}`} type="text"></input> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content