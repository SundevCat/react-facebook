import "./menu.css"
import Friend from "../../assets/friends.png"
import Stopwatch from "../../assets/stopwatch.png"
import Pin from "../../assets/pin.png"
import Group from "../../assets/group.png"
import Video from "../../assets/video-call.png"
import Market from "../../assets/food-stall.png"
import Gallery from "../../assets/gallery.png"
import Credit from "../../assets/credit-card.png"
import Organiz from "../../assets/non-profit-organization.png"
import Event from "../../assets/calendar.png"
import Diagram from "../../assets/diagram.png"
import Flag from "../../assets/red-flag.png"
import Game from "../../assets/game-control.png"
import Gift from "../../assets/giftbox.png"
import VideoGame from "../../assets/folder.png"
import Climate from "../../assets/climate.png"
import Msg from "../../assets/messenger.png"


import { Link } from "react-router-dom";
import React,{ useState } from "react";

function Menu() {
    const [toggleMore, setToggleMore] = useState(false)
    const [checkURL, setCheckURL] = useState(window.location.pathname);
    return (
        <div className={checkURL === '/menu' ? ' menu bg-zinc-900 mt-14' : 'menu h-dvh bg-zinc-900 pr-2 overflow-hidden hover:overflow-auto hover:pr-0'}>
            <div className="flex w-full flex-col mt-4">
                <Link to={'/'} id="border" className={'p-2  mx-2 my-1  ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <div className=" w-8 h-8">
                        <img className=" w-full  rounded-full" src={'https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-1/241234262_4426341154119759_2493545022860712627_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFpx8XYUcpV4lHP_pXH-dNNBF2xvxN3r94EXbG_E3ev3vRypoVpwmEcD3VtnmerfwoMBCW0yHsZpog2gNNVLaTX&_nc_ohc=nEcOXyw8oDIQ7kNvgG5UabZ&_nc_ht=scontent.fbkk8-2.fna&oh=00_AYBnJnqKJdXMmMJT0rvaokdxxHVM6cctqMJ-JRxtKCQLIw&oe=6660B97D'} />
                    </div>
                    <div className="px-4 text-white text-sm"> My Facebook React</div>
                </Link>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8" src={Friend} />
                    <div className="px-4 text-white  text-sm"> เพื่อน </div>
                </Link>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8" src={Stopwatch} />
                    <div className="px-4 text-white  text-sm"> ความทรงจำ </div>
                </Link>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8" src={Pin} />
                    <div className="px-4 text-white text-sm"> ที่บันทึกไว้ </div>
                </Link>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8" src={Group} />
                    <div className="px-4 text-white text-sm"> กลุ่ม </div>
                </Link>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8" src={Video} />
                    <div className="px-4 text-white text-sm"> วีดีโอ </div>
                </Link>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8" src={Market} />
                    <div className="px-4 text-white text-sm"> Marketplace </div>
                </Link>
                <div className={toggleMore ? 'block' : 'hidden'}>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Gallery} />
                        <div className="px-4 text-white text-sm"> กิจกรรมโฆษณาล่าสุด </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Credit} />
                        <div className="px-4 text-white text-sm"> คำสั่งซื้อและการชำระเงิน </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Organiz} />
                        <div className="px-4 text-white text-sm"> โครงการระดมทุน </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Event} />
                        <div className="px-4 text-white text-sm"> งานกิจกรรม </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Diagram} />
                        <div className="px-4 text-white text-sm"> ตัวจัดการโฆษณา </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Game} />
                        <div className="px-4 text-white text-sm"> เล่นเกม </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Gift} />
                        <div className="px-4 text-white text-sm"> วันเกิด </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={VideoGame} />
                        <div className="px-4 text-white text-sm"> วีดีโอเกี่ยวกับเกม </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Climate} />
                        <div className="px-4 text-white text-sm"> ศูนย์ภูมิอากาศวิทยา </div>
                    </Link>
                    <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                        <img className="w-8 h-8" src={Msg} />
                        <div className="px-4 text-white text-sm"> Messenger </div>
                    </Link>
                </div>
                <div onClick={() => setToggleMore(!toggleMore)} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <div className=" bg-zinc-800 rounded-full p-2 text-white">
                        <svg className={toggleMore ? 'hidden' : 'block'} viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true"><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                        <svg className={toggleMore ? 'block' : 'hidden'} viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path></svg>
                    </div>
                    <div className={toggleMore ? 'hidden' : 'block px-4 text-white text-sm'}  > ดูเพิ่มเติม </div>
                    <div className={toggleMore ? 'block px-4 text-white text-sm' : 'hidden'} > ดูน้อยลง </div>
                </div>
                <div className=" w-11/12 ml-4  mt-4 border-t border-gray-600">
                    <div className=" text-lg text-gray-400 mt-4"> ทางลัดของคุณ</div>
                </div>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8 rounded-lg object-cover" src={'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/151969486_1525004901035359_340501406778812033_n.jpg?stp=c13.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGYRwm2eU98S-qA_z2osLvHWiUhk3bkSJZaJSGTduRIllh7KeVw2P_wy_zANoR6YWIHTridpZBcP1_5dUcoU2mF&_nc_ohc=ACDfdXkV7JwQ7kNvgG5Wt9z&_nc_ht=scontent.fbkk12-2.fna&oh=00_AYCNbQ88D15vS1Q4_VJ8KSL8zDh9oJKXF7v_MotX72NNiw&oe=668E000C'} />
                    <div className="px-4 text-white text-sm"> กลุ่มสำหรับคุณพ่อคุณแม่มือใหม่ </div>
                </Link>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8 rounded-lg object-cover" src={'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087184%2Fcover_image%2Fretina_500x200%2FUntitled-4e06fb2b6d487f6550add2b1a007847b.png'} />
                    <div className="px-4 text-white text-sm"> crypto for beginners </div>
                </Link>
                <Link to={'/'} id="border" className={'p-2 mx-2 my-1 ms:mx-7 flex h-full items-center cursor-pointer hover:bg-zinc-700 hover:rounded-md'}>
                    <img className="w-8 h-8" src={Market} />
                    <div className="px-4 text-white text-sm"> กลุ่มของคุณ </div>
                </Link>
            </div>

        </div>
    )
}

export default Menu

