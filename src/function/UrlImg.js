import Blank from "../assets/blank-profile.png"

export function urlImg(img) {
    if(img === 'blank.png' || img ===''){
        return Blank
    }else{
        return process.env.REACT_APP_API_IMAGE + img
    }
}