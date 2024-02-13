import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

interface IInventoryItem {
    itemId:number,
    itemName:string,
    brand:string,
    itemPrice:number,
    size:number,
    releaseDate:string,
    itemColor:string,
    descriptions:string,
    getDatabase:()=>void
}


const InventoryItem: React.FC<IInventoryItem> = ({itemId, itemName, brand, itemPrice, releaseDate, itemColor,descriptions,getDatabase}) => {
    
    const targetItem = {itemId:itemId}
    const params = useParams()
    const handleDelete = ()=>{
        axios.delete(`http://localhost:3000/admin/${params.id}/${params.username}/api/inventory`,{data:targetItem,withCredentials:true})
        .then(res=>getDatabase())
        .catch(err=>console.log(err))
    }
    
    return (
        <tr>
            <td>{itemId}</td>
            <td>{itemName}</td>
            <td>{brand}</td>
            <td>{itemPrice}</td>
            <td>{releaseDate}</td>
            <td>{itemColor}</td>
            <td>{descriptions}</td>
            <td><button>Edit</button></td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )

}

export default InventoryItem