import { Modal } from 'flowbite-react'
import React from 'react'
import { urlImg } from '../../../function/UrlImg';
import { Public } from '@mui/icons-material';
import { Input, InputLabel, TextField } from '@mui/material';


function Posts(prop) {


    const planholder = "What's on you mind, " + prop.userData.userName +" ?"
    console.log(prop.userData);
    return (

        <Modal show={prop.toggleModal} onClose={() => prop.setToggleModel(false)} style={{ backgroundColor: '#00000050' }} >
            <div className="relative bg-zinc-800 rounded-lg  m-auto w-[500px] ">
                <div className=" relative  p-4 md:p-5   dark:border-gray-600">
                    <h3 className="text-xl text-center  m-auto font-semibold text-white">
                        Create post
                    </h3>
                    <button type="button" onClick={() => prop.setToggleModel(false)} className=" bg-transparent absolute right-5 top-5 text-gray-400  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className=' flex text-white'>
                        <img className=' w-10 h-10 rounded-full object-cover' src={urlImg(prop.userData.image)} />
                        <div className=' pl-2'>
                            <div className=' flex flex-col'>
                                <div>{prop.userData.userName}</div>
                                <div className=' text-xs text-gray-500 flex'>
                                    <div className='pr-1'>
                                        <Public className='flex mb-1' fontSize='16'></Public>
                                    </div>
                                    <div>Public</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TextField
                        sx={
                            {
                                '& .MuiInputBase-root': {
                                    color: 'white',
                                    paddingTop: '10px',
                                    paddingBottom: '50px',
                                    paddingLeft:'5px',
                                    paddingRight:'5px'
                                },
                                '& .css-uhyr2s-MuiInputBase-root-MuiInput-root::before': {
                                    border: '0px',
                                },
                                '& .css-uhyr2s-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
                                    border: '0px',
                                },
                                '& .css-uhyr2s-MuiInputBase-root-MuiInput-root::after': {
                                    border: '0px',
                                },
                                '& textarea:focus': {
                                    boxShadow: '0px 0px',
                                },

                            }
                        }
                        className=' text-white w-full '
                        placeholder={planholder}
                        variant="standard"
                        multiline
                        id="standard-multiline-flexible"
                    />
                </div>
            </div>
        </Modal>

    )
}

export default Posts