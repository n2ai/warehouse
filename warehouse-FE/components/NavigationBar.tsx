import React from "react"
import { Link } from "react-router-dom"

interface INavBarProps{
    id:string,
    username:string
}

const NavigationBar:React.FC<INavBarProps> = ({id,username})=>{
    return(
        <ul>
            <Link to={`/admin/${id}/${username}/api/inventory`}>Inventory</Link>
            <Link to={`/admin/${id}/${username}/api/users`}>Users</Link>
        </ul>
    )
}

export default NavigationBar