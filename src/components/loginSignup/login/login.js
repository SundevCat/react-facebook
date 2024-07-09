import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../Contexts/AuthContext"
import { useEffect, useState } from "react"
import bcrypt from "bcryptjs"
import Cookies from "universal-cookie"

function Login() {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const [emailError, setEmailError] = useState(false)
  const {
    setAuthUser,
    setIsLoggedIn
  } = useAuth()
  useEffect(()=>{
    document.title = "Login"
  },[])
  async function login(e) {
    e.preventDefault()
    try {
      const body = {
        userEmail: e.target.email.value,
        password: e.target.password.value
      }
      await fetch(process.env.REACT_APP_API_URL + 'users/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body)
      }).then((res) => {
        if (res.status === 200) {
          setEmailError(false)
        } else if (res.status === 404) {
          setEmailError(true)
        }
        return res.json()
      }).then((data) => {
        bcrypt.compare(body.password, data.password, async (err, isMatch) => {
          if (err) {
            console.log(err);
          } else if (!isMatch) {
            setEmailError(true)
          } else {
            setEmailError(false)
            try {
              let res = await fetch(process.env.REACT_APP_API_URL + 'users/finduser/' + data._id, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
              }).then((res) => { return res.json() }).then((data) => { return data })
              // navigate('/')
              console.log(res);
              setIsLoggedIn(true)
              setAuthUser({
                id: res._id,
                Name: res.userName
            })
              cookies.set('isloggedin', true, { path: '/' })
              cookies.set('_id', { id: res._id, Name: res.userName }, { path: '/' })
            }
            catch (err) {
              console.log('status err: ' + err);
            }
          }
        })
      }).catch((err) => console.log(err))




    } catch (err) {
      console.log('login error: ' + err);
    }

  }

  return (
    <>
      <div className=" w-full h-dvh flex justify-center items-center flex-col">
        <img width={250} src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={login}>
            <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">เข้าสู่ระบบ Facebook</h5>
            <div>
              <input type="text" name="email" id="email" className={emailError == false ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  " : "bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white   border-1 border-red-600  focus:outline-none focus:ring-0 focus:border-red-600 peer"} placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ" />
              {emailError && <label htmlFor="outlined_error" className=" text-red-600 dark:text-red-500 bg-white dark:bg-gray-900 text-sm  peer-placeholder-shown:scale-100">อีเมลหรือหมายเลขโทรศัพท์มือถือที่คุณป้อนไม่ได้เชื่อมต่อกับบัญชี ค้นหาบัญชีของคุณและเข้าสู่ระบบ</label>}
            </div>
            <div>
              <input type="password" name="password" id="password" placeholder="รหัสผ่าน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-2xl rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">เข้าสู่ระบบ</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-center">
              <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">ลืมบัญชีใช่หรือไม่</a>
              <span>.</span>
              <Link to={'/signup'} className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">สมัครใช้งาน Facebook</Link>
            </div>
          </form>
        </div>
      </div>
    </>


  )

}

export default Login

