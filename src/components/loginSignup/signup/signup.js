import { useState } from "react";
import { Link } from "react-router-dom"


function Signup() {
    const date = new Date();
    const monthName = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
    const day = []
    const years = []
    const [currentDay, setCurrentDay] = useState(date.getDate());
    const [currentMonth, setCurrentMonth] = useState(monthName[date.getMonth()]);
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const [customgenders, setCustomGenders] = useState(0);
    const [checkdGender, setcheckdGender] = useState(false);
    for (let i = 1; i <= 31; i++) {
        day.push(i)
    }
    for (let i = date.getFullYear(); i >= 1905; i--) {
        years.push(i)
    }
    function updateSubmit(e) {
        console.log(e.target);
        e.preventDefault();
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
    function checkBox(e) {
        
        setcheckdGender(e.target.checked);
    }
    function updateCustomGender(e) {
        setCustomGenders(e.target.value)
    }
    return (
        <>
            <div className=" w-full  flex justify-center items-center flex-col">
                <img width={250} src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
                <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#" onSubmit={updateSubmit}>
                        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">สร้างบัญชีใหม่
                            ง่ายและเร็ว</h5>
                        <div className="flex">
                            <input type="text" name="email" id="name" className="bg-gray-50 border mr-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ชื่อ" required />
                            <input type="text" name="email" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="นามสกุล" required />
                        </div>
                        <div>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ" required />
                        </div>
                        <div>
                            <input type="password" name="password" id="password" placeholder="รหัสผ่าน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div >
                            <label htmlFor="small" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">วันเกิด</label>
                            <div className="flex">
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
                            </div>
                        </div>
                        <div >
                            <label htmlFor="small" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">เพศ</label>
                            <div className="flex justify-between">
                                <div className="flex items-center px-4 py-2  border rounded-lg">
                                    <label htmlFor="default-checkbox-1" className="text-sm pr-5 font-medium text-gray-900 dark:text-gray-300">หญิง</label>
                                    <input  onClick={checkBox} id="1" type="checkbox" value="1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className="flex items-center px-4 py-2 border rounded-lg">
                                    <label htmlFor="checked-checkbox-2" className="text-sm pr-5  font-medium text-gray-900 dark:text-gray-300">ชาย</label>
                                    <input  onChange={checkBox} id="2" type="checkbox" value="2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className="flex items-center px-2 py-2 border rounded-lg">
                                    <label htmlFor="checked-checkbox-3" className="text-sm pr-5  font-medium text-gray-900 dark:text-gray-300">กำหนดเอง</label>
                                    <input onChange={checkBox} id="3" type="checkbox" value="3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                            </div>

                            <select id="custom-genders" value={customgenders} onChange={updateCustomGender} className="bg-gray-50 mt-2 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled value={0} >เลือกสรรพนามของคุณ</option>
                                <option value={1} >เธอ: "อวยพรวันเกิดให้เธอเลย"</option>
                                <option value={2} >เข้า: "อวยพรวันเกิดให้เข้าเลย"</option>
                            </select>
                            <label htmlFor="custom-genders" className="text-sm pr-5  font-medium text-gray-500 dark:text-gray-300">ทุกคนสามารถเห็นสรรพนามของคุณได้</label>
                            <input type="text" name="more_genders" id="more_genders" placeholder="เพศ (ระบุหรือไม่ก็ได้)" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <button type="submit" className="flex m-auto w-2/4 text-white  bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-2xl rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <div className="text-center w-full">
                                สมัคร
                            </div>
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex">
                            <Link to={'/login'} className="ms-auto  m-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
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