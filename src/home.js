import Chat from './components/chat/chat';
import Content from './components/content/content';
import Menu from './components/menu/menu';
import React,{ useState } from "react";

function Home() {
    return (
        <div className=" relative flex">
            <div className="hidden xl:block w-1/4 fixed left-0 top-14 -z-0">
                <Menu />
            </div>
            <Content />
            <div className='lg:w-1/4 fixed right-0 top-14 -z-0' >
                <Chat />
            </div>
        </div>
    )
}

export default Home