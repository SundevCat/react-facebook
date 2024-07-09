import Blank from "../assets/blank-profile.png"
import CoverBlank from "../assets/blank-cover.jpg"

export function urlImg(img) {
    if (img === 'blank.png' || img === '') {
        return Blank
    } else {
        return process.env.REACT_APP_API_IMAGE + img
    }
}

export function urlCoverImg(img) {
    if (img === 'blank.png' || img === '') {    
        return CoverBlank
    } else {
        return process.env.REACT_APP_API_IMAGE + img
    }
}