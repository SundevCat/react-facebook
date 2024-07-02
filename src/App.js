import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './home';
import Chat from './components/chat/chat';
import Content from './components/content/content';
import Menu from './components/menu/menu';
import { useState, createContext } from 'react';
import { useAuth } from './Contexts/AuthContext';
import Login from './components/loginSignup/login/login';
import Signup from './components/loginSignup/signup/signup';
import Cookies from 'universal-cookie';
import Profile from './components/Profile/Profile';
export const DataContext = createContext();


function App() {
  const userAuth = useAuth()
  console.log(userAuth.authUser);
  return (
    <>
      {userAuth.isLoggedIn === true ? (
        <DataContext.Provider value={userAuth.authUser}>
          <Navbar />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/content' element={<Content />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </DataContext.Provider>
      ) : (
        <DataContext.Provider value={userAuth.authUser}>
          <Routes>
            <Route path='*' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </DataContext.Provider>
      )}
    </ >
  );
}

export default App;
