import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../Contexts/AuthContext'

function Navbar_Setting() {
    const [ready, setReady] = useState(false)
    const [userData, setUserData] = useState(null)
    const userAuth = useAuth();

    async function fetchData() {
        try {
            await fetch(process.env.REACT_APP_API_URL + 'users/finduser/' + userAuth.authUser.id, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    'Authorization': `Bearer ${useAuth.token}` 
                }
            }).then((res) => { return res.json() })
                .then((data) => {
                    setUserData(data)
                    setReady(true)
                })
        } catch (err) {

        }
    }

    useEffect(() => {
        fetchData();
        console.log(userData);
        console.log(ready);
    }, [])
    return (
        <>


        </>
    )
}

export default Navbar_Setting