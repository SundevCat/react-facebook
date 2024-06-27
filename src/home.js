import Chat from './components/chat/chat';
import Content from './components/content/content';
import Menu from './components/menu/menu';


function Home() {

    return (
        <div className=" relative flex">
            <div className="hidden xl:block w-[22.22%] fixed left-0 top-14 -z-0">
                <Menu />
            </div>
            <Content />
            <div className=' w-1/4 xl:w-[22.22%] fixed right-0 top-14 -z-0' >
                <Chat />
            </div>
        </div>
    )
}

export default Home