import { Modal } from 'flowbite-react'
import React from 'react'

function Posts(prop) {
    console.log(prop);
    return (
        <>
            <Modal show={prop.toggleModal} onClose={() => prop.setToggleModel(false)} className=' bg-zinc-800 bg-opacity-70 pt-14'>
                <div className="relative bg-zinc-800  rounded-lg ">
                    <div className=" relative  p-4 md:p-5 border-b  dark:border-gray-600">
                        <h3 className="text-xl text-center  m-auto font-semibold text-white">
                            Exit Profile
                        </h3>
                        <button type="button" onClick={() => prop.setToggleModel(false)} className=" absolute right-5 top-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Posts