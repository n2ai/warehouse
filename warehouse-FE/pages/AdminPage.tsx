import React from "react"
import { useParams } from "react-router"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

const AdminPage:React.FC = ()=>{

    const navigate = useNavigate()
    const params = useParams()
    
    useEffect(()=>{
        axios.get("http://localhost:3000/admin/1/longhai",{withCredentials: true})
        .then((res):void=>{
            console.log(res)
        }).catch(()=>{
            navigate("/")
        })
    
    })
    
    return(
        <div>
            This is AdminPage
            {params.id}
            {params.username}
            {}
        </div>
    )
}

export default AdminPage