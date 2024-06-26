import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './home';
import Chat from './components/chat/chat';
import Content from './components/content/content';
import Menu from './components/menu/menu';
import { useState, createContext } from 'react';
import Data from "./data/dummy.json"

export const DataContext = createContext();

function App() {
  let [components, setComponents] = useState()
  if (window.location.pathname == '/') {
    setComponents = <Home />
  } else if (window.location.pathname == '/menu') {
    setComponents = <Menu />
  }
  return (
    <div>
      <DataContext.Provider value={Data}>
        <Navbar />
        {components}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/content' element={<Content />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
