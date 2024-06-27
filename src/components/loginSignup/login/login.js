import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../Contexts/AuthContext"

function Login() {
  const navigate = useNavigate()
  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
  } = useAuth()

  function login(e) {
    e.preventDefault()
    setIsLoggedIn(true)
    setAuthUser({
      Name: 'John Doe'
    })
    navigate('/')
  }

  return (
    <>
      <div className=" w-full h-dvh flex justify-center items-center flex-col">
        <img width={250} src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">เข้าสู่ระบบ Facebook</h5>
            <div>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ" required />
            </div>
            <div>
              <input type="password" name="password" id="password" placeholder="รหัสผ่าน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <button onClick={(e) => { login(e) }} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-2xl rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">เข้าสู่ระบบ</button>
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

