import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import EditIcon from '@mui/icons-material/Edit';
import ModalPic from './ModalPic/ModalPic';
import {  urlImg } from '../../function/UrlImg';

function Profile() {
  const userAuth = useAuth()
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [imgProfile, setImgProfile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [ready, setReady] = useState(false)
  const [userData, setUserData] = useState(null)
  const url = process.env.REACT_APP_API_IMAGE

  async function fetchData() {
    if (ready === false) {
      fetch(process.env.REACT_APP_API_URL + 'users/finduser/' + userAuth.authUser.id, {
        method: 'GET',
        headers: {
          "Accept": "application/json",
        }
      }).then((res) => { return res.json() }).then((data) => {
        setUserData(data)
        setImgProfile(data.image)
        setCoverImage(data.cover_photo)
        setReady(true)
      })
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(userData);
  return (
    <>
      {ready === false ? <div role="status" className="max-w-sm p-4  animate-pulse md:p-6 dark:border-gray-700">

        <div className="flex items-center mt-4">
          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
        :
        <div className='  bg-zinc-800 pt-14 w-fit min-[1092px]:w-full'>

          <div className='flex justify-center '>
            <div className=' relative'>
              <div className='h-[65dvh]'>
                <img className='w-[1092px] h-full object-cover rounded-b-md ' alt='banner'   src={urlImg(userData.cover_photo)} ></img>
                <div className='w-[95%] m-auto text-white flex justify-between' >
                  <div className='flex flex-row'>
                    <img className='rounded-full w-44 h-44 -mt-10 border-4 border-zinc-900 object-cover' src={urlImg(userData.image)} />
                    <div className='flex flex-col pt-4 pl-4'>
                      <div className=' text-3xl font-bold py-1'>{userAuth.authUser.Name}</div>
                      <div> 2 Friend </div>
                    </div>
                  </div>
                  <div className=' relative mt-auto'>
                    <button type="button" onClick={() => setOpenEditProfile(true)} className="py-2 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-zinc-700 rounded-lg hover:bg-zinc-600   ">
                      <EditIcon fontSize='small' className='mr-1' />  Edit profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-[35dvh]'>
          </div>
          <ModalPic setOpenEditProfile={setOpenEditProfile} openEditProfile={openEditProfile} img={imgProfile} coverImage={coverImage}/>
        </div>
      }
    </>

  )
}

export default Profile