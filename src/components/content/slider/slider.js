import './slider.css'
import React from "react";
import Slider from "react-slick";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

function NextArrow(props) {
    const { className, style, onClick } = props;
    const nextClass = ['bg-black',
        'text-white']


    return (
        <div
            className={` ${className}`}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={` ${className}`}
            onClick={onClick}
        />
    );
}

function SliderStory() {
    var settings = {
        draggable: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevarrow: <PrevArrow />
    };
    return (
        <Slider {...settings}>
            <div className=" h-64">
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center h-full w-11/12">
                    <div className=" h-5/6">
                        <div className=' h-full overflow-hidden rounded-t-lg'>
                            <img className="object-cover h-full object-center aspect-square hover:scale-105 transition-all " src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="story one" />
                        </div>
                        <AddCircleSharpIcon className="plus text-blue-600 dark:bg-neutral-700 rounded-full -translate-y-5 " />
                    </div>
                    <div className="p-4 text-white">
                        สร้างสตอรี่
                    </div>
                </div>
            </div>
            <div className=" h-64">
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center h-full w-11/12">
                    <div className=' h-full overflow-hidden rounded-lg relative'>
                        <img className=" absolute object-cover h-full z-0 object-center aspect-square hover:scale-105 transition-all " src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="story one" />
                        <div className="p-4 text-white z-10 relative">
                            สร้างสตอรี่
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
}

export default SliderStory