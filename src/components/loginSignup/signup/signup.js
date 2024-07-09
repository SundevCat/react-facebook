import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import bcrypt from "bcryptjs"
import Cookies from "universal-cookie";
import { useAuth } from "../../../Contexts/AuthContext";

function Signup() {
    const navigate = useNavigate();
    const cookies = new Cookies()
    const date = new Date();
    const monthName = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
    const day = []
    const years = []
    const [errors, setErrors] = useState({})
    const [statusRegis, setStatusRegis] = useState(false)
    const [currentDay, setCurrentDay] = useState(date.getDate());
    const [currentMonth, setCurrentMonth] = useState(monthName[date.getMonth()]);
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const [customGenders, setCustomGenders] = useState(null);
    const {
        setAuthUser,
        setIsLoggedIn
    } = useAuth()

    useEffect(()=>{
        document.title = "signup"
      },[])

    async function onSubmit(e) {
        e.preventDefault();
        const validationErrors = {}
        const inputValue = {
            userName: e.target.name.value,
            userLastName: e.target.lastname.value,
            userEmail: e.target.email.value,
            password: e.target.password.value,
            image: 'blank.png',
            story: '',
            userGender: customGenders,
            userDate: e.target.day.value + e.target.month.value + e.target.year.value,
        }
        // console.log(inputValue);
        if (customGenders === "custom") {
            inputValue.userGender = e.target.more_genders.value
        }
        if (!inputValue.userName.trim()) {
            validationErrors.userName = "กรุณากรอกชื่อ"
        }
        if (!inputValue.userLastName.trim()) {
            validationErrors.userLastName = "กรุณากรอกนามสกุล"
        }
        if (!inputValue.userEmail.trim()) {
            validationErrors.userEmail = "กรุณากรอกอีเมล"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue.userEmail)) {
            validationErrors.userEmail = "อีเมลไม่ถูกต้อง"
        }
        if (!inputValue.password.trim()) {
            validationErrors.password = "กรุณากรอกรหัสผ่าน"
        } else if (inputValue.password.length < 6) {
            validationErrors.password = "กรุณากรอกรหัสผ่าน 6 ตัวขึ้นไป"
        }
        if (inputValue.userDate === date.getDate() + monthName[date.getMonth()] + date.getFullYear()) {
            validationErrors.userDate = "วันที่ไม่ถูกต้อง"
        }
        if (inputValue.userGender === null) {
            validationErrors.userGender = "กรุณาเลือกเพศ"
        }
        if (Object.keys(validationErrors).length === 0) {
            try {
                inputValue.password = bcrypt.hashSync(e.target.password.value, 10)
                let res = await fetch(process.env.REACT_APP_API_URL + 'users/register', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(inputValue)
                }).then((res) => { return res.json() }).then((data) => { return data })
                console.log(res);
                if (res.length !== 1) {
                    setIsLoggedIn(true)
                    setStatusRegis(true)
                    setAuthUser({
                        id: res._id,
                        Name: res.userName
                    })
                    cookies.set('isloggedin', true, { path: '/' })
                    cookies.set('_id', { id: res._id, Name: res.userName }, { path: '/' })
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                } else {
                    validationErrors.userEmail = "อีเมลนี้ถูกใช้แล้ว"
                }
            } catch (err) {
                console.log(err);
            }
        }
        setErrors(validationErrors)
    }

    for (let i = 1; i <= 31; i++) {
        day.push(i)
    }
    for (let i = date.getFullYear(); i >= 1905; i--) {
        years.push(i)
    }
    function updateDay(e) {
        setCurrentDay(e.target.value);
    }
    function updateMonth(e) {
        setCurrentMonth(e.target.value);
    }
    function updateYear(e) {
        setCurrentYear(e.target.value);
    }
    function updateCustomGender(e) {
        setCustomGenders(e.target.value)
    }


    return (
        <>
            <div className=" w-full  flex justify-center items-center flex-col">
                <img width={250} src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
                <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#" onSubmit={onSubmit}>
                        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">สร้างบัญชีใหม่
                            ง่ายและเร็ว</h5>
                        <div className="flex">
                            <div className="relative  mr-5">
                                <input type="text" name="name" id="name" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ชื่อ" />
                                {errors.userName && <label htmlFor="outlined_error" className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{errors.userName}</label>}
                            </div>
                            <div className="relative">
                                <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="นามสกุล" />
                                {errors.userLastName && <label htmlFor="outlined_error" className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{errors.userLastName}</label>}
                            </div>
                        </div>
                        <div className="relative">
                            <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ" />
                            {errors.userEmail && <label htmlFor="outlined_error" className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{errors.userEmail}</label>}

                        </div>
                        <div className="relative">
                            <input type="password" name="password" id="password" placeholder="รหัสผ่าน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            {errors.password && <label htmlFor="outlined_error" className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{errors.password}</label>}
                        </div>
                        <div >
                            <label htmlFor="small" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">วันเกิด</label>
                            <div className={errors.userDate == null ? "flex " : " outline-red-500 outline outline-1 outline-offset-4  rounded-sm flex relative"} >
                                <select id="day" value={currentDay} onChange={updateDay} className="block w-full mr-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {day.map((day, i) =>
                                        <option value={i + 1} key={i}>{day}</option>
                                    )}
                                </select>
                                <select id="month" value={currentMonth} onChange={updateMonth} className="bg-gray-50  mr-2 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {monthName.map((month, i) =>
                                        <option value={month} key={i}>{month}</option>
                                    )}
                                </select>
                                <select id="year" value={currentYear} onChange={updateYear} className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {years.map((year, i) =>
                                        <option value={year} key={i}>{year}</option>
                                    )}
                                </select>
                                {errors.userDate && <label htmlFor="outlined_error" className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{errors.userDate}</label>}
                            </div>
                        </div>
                        <div >
                            <label htmlFor="small" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">เพศ</label>
                            <div className={errors.userGender == null ? "flex justify-between" : " outline-red-500 outline outline-1 outline-offset-4  rounded-sm flex relative  justify-between"} >
                                <div className="flex items-center px-4 py-2  border rounded-lg">
                                    <label htmlFor="default-checkbox-1" className="text-sm pr-5 font-medium text-gray-900 dark:text-gray-300">หญิง</label>
                                    <input checked={customGenders === 'female' ? true : false} onChange={() => setCustomGenders('female')} id="female" type="checkbox" value="female" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className="flex items-center px-4 py-2 border rounded-lg">
                                    <label htmlFor="checked-checkbox-2" className="text-sm pr-5  font-medium text-gray-900 dark:text-gray-300">ชาย</label>
                                    <input checked={customGenders === 'male' ? true : false} onChange={() => setCustomGenders('male')} id="male" type="checkbox" value="male" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className="flex items-center px-2 py-2 border rounded-lg">
                                    <label htmlFor="checked-checkbox-3" className="text-sm pr-5  font-medium text-gray-900 dark:text-gray-300">กำหนดเอง</label>
                                    <input checked={customGenders === 'custom' ? true : false} onChange={() => setCustomGenders('custom')} id="custom" type="checkbox" value="custom" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                {errors.userGender && <label htmlFor="outlined_error" className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{errors.userGender}</label>}
                            </div>
                            {customGenders === 'custom' ?
                                <div>
                                    <select id="custom_genders" value={customGenders} onChange={updateCustomGender} className="bg-gray-50 mt-2 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option disabled value={0} >เลือกสรรพนามของคุณ</option>
                                        <option defaultValue={1} value={1} >เธอ: "อวยพรวันเกิดให้เธอเลย"</option>
                                        <option value={2} >เข้า: "อวยพรวันเกิดให้เข้าเลย"</option>
                                    </select>
                                    <label htmlFor="custom-genders" className="text-sm pr-5  font-medium text-gray-500 dark:text-gray-300">ทุกคนสามารถเห็นสรรพนามของคุณได้</label>
                                    <input type="text" name="more_genders" id="more_genders" placeholder="เพศ (ระบุหรือไม่ก็ได้)" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                : ''}
                        </div>
                        <button type="submit" className="flex m-auto w-2/4 text-white  bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-2xl rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {statusRegis === false ?
                                <div className="text-center w-full">
                                    สมัคร
                                </div> :
                                <div className="    font-medium rounded-lg text-xl text-center  inline-flex items-center">
                                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>

                                    Loading...

                                </div>
                            }
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex">
                            <Link to={'/'} className="ms-auto  m-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                                มีบัญชีแล้วใช่ไหม
                            </Link>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Signup