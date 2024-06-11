import "./content.css"
import Slide from './slider/slider'

function Content() {

    return (
        <div className=" w-full pt-14 lg:w-3/4 xl:w-[55.56%] bg-zinc-900 mt-2 h-dvh xl:m-auto px-10">
           <div className=" relative mt-10">
             <Slide/>
            </div> 
        </div>
    )
}

export default Content