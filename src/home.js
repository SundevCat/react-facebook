import Chat from './components/chat/chat';
import Content from './components/content/content';
import Menu from './components/menu/menu';

function Home() {
    return (
        <div className="flex h-dvh">
            <div className="hidden xl:block w-1/4">
                <Menu />
            </div>
            <Content />
            <Chat />
        </div>
    )
}

export default Home