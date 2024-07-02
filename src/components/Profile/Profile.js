import React, { useState } from 'react'
import Blank from "../../assets/blank-profile.png"
import { useAuth } from '../../Contexts/AuthContext'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Modal } from 'flowbite-react';

function Profile() {
  const userAuth = useAuth()
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openEditProfilePic, setOpenEditProfilePic] = useState(false);
  return (
    <div className='  bg-zinc-800 pt-14'>

      <div className='flex justify-center '>
        <div className=' relative'>
          <div className='w-[1092px] h-[65dvh]'>
            <img className=' w-full h-full object-cover rounded-b-md ' alt='banner' src='https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/283005242_107973471921503_7585648697145910579_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=6m-3eEI5RiwQ7kNvgGGN2ch&_nc_ht=scontent.fbkk5-7.fna&oh=00_AYDi1KwQTeWK--KWpN82WgziA-zzyUvdUZrWNLirnBTWqQ&oe=6687F6C3' ></img>
            <div className='w-[95%] m-auto text-white flex justify-between' >
              <div className='flex flex-row'>
                <img className='rounded-full w-44 h-44 -mt-10 border-4 border-zinc-900' src={Blank} />
                <div className='flex flex-col pt-4 pl-4'>
                  <div className=' text-3xl font-bold py-1'>{userAuth.authUser.Name}</div>
                  <div> 2 Friend </div>
                </div>
              </div>
              <div className=' relative mt-auto'>
                {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <AddIcon fontSize='small' className='mr-1' />
                  Add to story
                </button> */}
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

      {/* modal edit profile */}
      <Modal show={openEditProfile} onClose={() => setOpenEditProfile(false)} className=' bg-zinc-800 bg-opacity-70 pt-14'>
        <div className="relative bg-zinc-800  rounded-lg ">
          <div className=" relative  p-4 md:p-5 border-b  dark:border-gray-600">
            <h3 className="text-xl text-center  m-auto font-semibold text-white">
              Exit Profile
            </h3>
            <button type="button" onClick={() => setOpenEditProfile(false)} className=" absolute right-5 top-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5  flex">
            <div className='text-white font-bold text-xl w-1/4'> Profile picture</div>
            <div className='w-2/4'>
              <img className='w-40 m-auto h-40 rounded-full ' src={Blank} />
            </div>
            <div className=' w-1/4 flex'>
              <div onClick={() => setOpenEditProfilePic(true)} className=' text-xl text-blue-700 ml-auto cursor-pointer'> Edit</div>
            </div>
          </div>
        </div>
      </Modal>
      {/* modal edit profilepicture */}
      <Modal show={openEditProfilePic} onClose={() => setOpenEditProfilePic(false)} className=' bg-zinc-800 bg-opacity-70 pt-20'>
        <div className="relative bg-zinc-700  rounded-lg ">
          <div className=" relative  p-4 md:p-5 border-b  dark:border-gray-600">
            <h3 className="text-xl text-center  m-auto font-semibold text-white">
              Upload your profile picture
            </h3>
            <button type="button" onClick={() => setOpenEditProfilePic(false)} className=" absolute right-5 top-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5  flex">
            <div className='w-3/4'>
              <img className='w-40 m-auto h-40 rounded-full ' src={Blank} />
            </div>
            <div className=' w-1/4 flex flex-col'>
              <div className=' text-xl me-2 mb-2  text-blue-700 ml-auto cursor-pointer'> upload</div>
              <div className='mt-auto ml-auto  '>
                <div className='  text-xl py-2 px-4 me-2 mb-2  font-medium text-white focus:outline-none bg-blue-800 rounded-lg   cursor-pointer hover:bg-blue-700 '> บันทึกรูป</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

    </div>



  )
}

export default Profile