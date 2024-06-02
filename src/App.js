import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './home';
import Chat from './components/chat/chat';
import Content from './components/content/content';
import Menu from './components/menu/menu';
import { useState } from 'react';

function App() {
  let [components, setComponents] = useState()
  if (window.location.pathname == '/') {
    setComponents = <Home />
  } else if (window.location.pathname == '/menu') {
    setComponents = <Menu />
  }
  return (
    <div>
      <Navbar />
      {components}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/content' element={<Content />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
