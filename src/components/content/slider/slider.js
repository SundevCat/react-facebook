import './slider.css'
import React, { useContext } from "react";
import Slider from "react-slick";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../App';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={` right-0 z-10 before:text-4xl before:content-['→'] ${className}`}
            style={style}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={` left-0 z-10 before:text-4xl before:content-['←']  ${className}`}
            style={style}
            onClick={onClick}
        />
    );
}

function SliderStory() {

    const user = useContext(DataContext)
    var settings = {
        draggable: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <Slider {...settings}>
            <div className=" h-64">
                <div className="block rounded-lg  shadow-lg bg-neutral-700 text-center h-full w-11/12">
                    <div className=" h-5/6">
                        <div className=' h-full overflow-hidden rounded-t-lg'>
                            <img className="object-cover h-full object-center aspect-square hover:scale-105 transition-all " src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="story one" />
                        </div>
                        <AddCircleSharpIcon className="plus text-blue-600 bg-neutral-700 rounded-full -translate-y-5 " />
                    </div>
                    <div className="p-4 text-white">
                        สร้างสตอรี่
                    </div>
                </div>
            </div>
            {/* {user.slice(0, 4).map((data, key) =>

                <Link className=" h-64" key={key}>
                    <div className="block rounded-lg  shadow-lg bg-neutral-700 text-center h-full w-11/12">
                        <div className=' h-full overflow-hidden rounded-lg relative'>
                            <img className=" absolute object-cover h-full z-0 object-center aspect-square hover:scale-105 transition-all " src={`/assets/${data.story}`} />
                            <div className="p-4 text-white z-10 relative flex">
                                <img className="w-8 h-8 rounded-full mr-auto" src={`/assets/${data.main_image}`} />
                            </div>
                            <div className=" px-4 text-white z-10 bottom-1 left-0 absolute text-left w-full"> {data.name}</div>
                        </div>
                    </div>
                </Link>
            )} */}
        </Slider>
    );
}

export default SliderStory