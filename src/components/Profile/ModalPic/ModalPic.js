import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react'
import Blank from "../../../assets/blank-profile.png"
import { useAuth } from '../../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { urlImg } from '../../../function/UrlImg';

const ModalPic = (prop) => {
    const [openEditProfilePic, setOpenEditProfilePic] = useState(false);
    const [openEditCoverImage, setOpenEditCoverImage] = useState(false);
    const [fileImg, setFileImg] = useState(null)
    const [fileCoverImg, setFileCoverImg] = useState(null)
    const url = process.env.REACT_APP_API_IMAGE
    const [image, setImage] = useState(url + prop.img)
    const [coverImage, setCoverImage] = useState(url + prop.coverImage)
    const userAuth = useAuth()

    function previewImg(e) {
        setImage(URL.createObjectURL(e.target.files[0]))
        setFileImg(e.target.files[0])
    }
    function previewCoverImg(e) {
        setCoverImage(URL.createObjectURL(e.target.files[0]))
        setFileCoverImg(e.target.files[0])
    }
    async function uploadImage(e) {
        e.preventDefault();
        let formData = new FormData()
        if (fileImg != null) {
            formData.append('image', fileImg)
            console.log(formData);
            try {
                await fetch(process.env.REACT_APP_API_URL + 'users/updatePic/' + userAuth.authUser.id, {
                    method: 'PUT',
                    headers: {
                        "Accept": "application/json",
                    },
                    body: formData
                })
                    .then((res) => { return res.json() })
                    .then((data) => {
                        window.location.reload();
                    })

            } catch (err) {
                console.log(err);
            }
        }

    }

    async function uploadCoverImage(e) {
        e.preventDefault();
        let formData = new FormData()
        if (fileCoverImg != null) {
            formData.append('CoverPhoto', fileCoverImg)
            console.log(formData);
            try {
                await fetch(process.env.REACT_APP_API_URL + 'users/updateCoverPhoto/' + userAuth.authUser.id, {
                    method: 'PUT',
                    headers: {
                        "Accept": "application/json",
                    },
                    body: formData
                })
                    .then((res) => { return res.json() })
                    .then((data) => {
                        window.location.reload();
                    })

            } catch (err) {
                console.log(err);
            }
        }

    }

    return (
        <div>
            {/* modal edit profile */}
            <Modal show={prop.openEditProfile} onClose={() => prop.setOpenEditProfile(false)} className=' bg-zinc-800 bg-opacity-70 pt-14'>
                <div className="relative bg-zinc-800  rounded-lg ">
                    <div className=" relative  p-4 md:p-5 border-b  dark:border-gray-600">
                        <h3 className="text-xl text-center  m-auto font-semibold text-white">
                            Exit Profile
                        </h3>
                        <button type="button" onClick={() => prop.setOpenEditProfile(false)} className=" absolute right-5 top-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5  flex">
                        <div className='text-white font-bold text-xl w-1/4'> Profile picture</div>
                        <div className='w-2/4'>
                            <img className='w-40 m-auto h-40 rounded-full object-cover' src={urlImg(prop.img)} />
                        </div>
                        <div className=' w-1/4 flex'>
                            <div onClick={() => setOpenEditProfilePic(true)} className=' text-xl text-blue-700 ml-auto cursor-pointer'> Edit</div>
                        </div>
                    </div>
                    <div className="p-4 md:p-5  flex">
                        <div className='text-white font-bold text-xl w-1/4'> Cover Image</div>
                        <div className='w-2/4'>
                            <img className='w-80 m-auto h-40  object-cover' src={urlImg(prop.coverImage)} />
                        </div>
                        <div className=' w-1/4 flex'>
                            <div onClick={() => setOpenEditCoverImage(true)} className=' text-xl text-blue-700 ml-auto cursor-pointer'> Edit</div>
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
                            {image === "" || image === null ? <img className='w-40 m-auto h-40 rounded-full object-cover' src={urlImg(prop.img)} /> : <img className='w-40 m-auto h-40 rounded-full object-cover' src={image} />}
                        </div>
                        <div className=' w-1/4 flex flex-col'>
                            <form className="space-y-6" action="#" onSubmit={uploadImage} encType='multiparo/form-data'>

                                <p className=' text-xl me-2 mb-2  text-blue-700 ml-auto cursor-pointer'> เลือกรูป</p>
                                <input type='file' name='file' accept='image/*' onChange={previewImg} />
                                <div className='mt-auto ml-auto  '>
                                    <button type='submit' className='  text-xl py-2 px-4 me-2 mb-2  font-medium text-white focus:outline-none bg-blue-800 rounded-lg   cursor-pointer hover:bg-blue-700 '> บันทึกรูป</button>
                                </div>
                            </form>
                        </div>
                    </div>    
                </div>
            </Modal>

            {/* modal edit coverpicture */}
            <Modal show={openEditCoverImage} onClose={() => setOpenEditCoverImage(false)} className=' bg-zinc-800 bg-opacity-70 pt-20'>
                <div className="relative bg-zinc-700  rounded-lg ">
                    <div className=" relative  p-4 md:p-5 border-b  dark:border-gray-600">
                        <h3 className="text-xl text-center  m-auto font-semibold text-white">
                            Upload your Cover Image
                        </h3>
                        <button type="button" onClick={() => setOpenEditCoverImage(false)} className=" absolute right-5 top-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                
                    <div className="p-4 md:p-5  flex">
                        <div className='w-3/4'>
                            {coverImage === "" || coverImage === null ? <img className=' w-80 m-auto h-40 object-cover' src={urlImg(prop.coverImage)} /> : <img className=' w-80 m-auto h-40 object-cover' src={coverImage} />}
                        </div>
                        <div className=' w-1/4 flex flex-col'>
                            <form className="space-y-6" action="#" onSubmit={uploadCoverImage} encType='multiparo/form-data'>

                                <p className=' text-xl me-2 mb-2  text-blue-700 ml-auto cursor-pointer'> เลือกรูป</p>
                                <input type='file' name='file' accept='image/*' onChange={previewCoverImg} />
                                <div className='mt-auto ml-auto  '>
                                    <button type='submit' className='  text-xl py-2 px-4 me-2 mb-2  font-medium text-white focus:outline-none bg-blue-800 rounded-lg   cursor-pointer hover:bg-blue-700 '> บันทึกรูป</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalPic