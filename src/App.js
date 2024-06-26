import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './home';
import Chat from './components/chat/chat';
import Content from './components/content/content';
import Menu from './components/menu/menu';
import { useState, createContext, useContext } from 'react';
import Data from "./data/dummy.json"
import { AuthContext, AuthProvider, useAuth } from './Contexts/AuthContext';
import Login from './components/loginSignup/login/login';
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
      ) : (<Login />)}
      {/* {isLoggedIn ? (<span> User name: {authUser.Name}</span>) : ''} */}
    </div>
  );
}

export default App;
