import { useAuth } from "../../../Contexts/AuthContext"


function Login() {

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
      }
      function logout(e) {
        e.preventDefault()
        setIsLoggedIn(false)
        setAuthUser(null)
      }
    return (
        <>
            <button onClick={(e) => { login(e) }}> login </button>
            <button onClick={(e) => { logout(e) }}> logout </button>

            
        </>


    )

}

export default Login

