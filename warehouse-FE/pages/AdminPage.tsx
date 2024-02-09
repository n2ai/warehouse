import React from "react"
import { useParams } from "react-router"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Outlet } from "react-router"
import NavigationBar from "../components/NavigationBar"
import axios from "axios"

const AdminPage:React.FC = ()=>{

    const navigate = useNavigate()
    const params = useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/admin/${params.id}/${params.username}`,{withCredentials: true})
        .then((res):void=>{
            console.log(res)
        }).catch(()=>{
            navigate("/")
        })
    
    })



    return(
        <>
            <header>
               <NavigationBar id={params.id as string} username={params.username as string} />
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>

            </footer>
        </>
    )
}

export default AdminPage