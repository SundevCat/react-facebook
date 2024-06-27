import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './home';
import Chat from './components/chat/chat';
import Content from './components/content/content';
import Menu from './components/menu/menu';
import { useState, createContext, useContext } from 'react';
import Data from "./data/dummy.json"
import { useAuth } from './Contexts/AuthContext';
import Login from './components/loginSignup/login/login';
import Signup from './components/loginSignup/signup/signup';
export const DataContext = createContext();


function App() {
  let [components, setComponents] = useState()
  const userAuth = useAuth()
  if (window.location.pathname === '/') {
    setComponents = <Home />
  } else if (window.location.pathname === '/menu') {
    setComponents = <Menu />
  } else {
    setComponents = <Home />
  }
  return (
    <div>
      {userAuth.isLoggedIn ? (
        <DataContext.Provider value={Data}>
          <Navbar />
          {/* {components} */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/content' element={<Content />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </DataContext.Provider>
      ) : (
        <DataContext.Provider value={Data}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </DataContext.Provider>
      )}
    </div >
  );
}

export default App;
