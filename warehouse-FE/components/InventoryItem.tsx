import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import EditItemModal from './EditItemModal';

interface IModalItem{
    itemId:number,
    itemName:string,
    brand:string,
    itemPrice:number,
    size:number,
    releaseDate:string,
    itemColor:string,
    descriptions:string
}

interface IInventoryItem {
    itemId:number,
    itemName:string,
    brand:string,
    itemPrice:number,
    size:number,
    releaseDate:string,
    itemColor:string,
    descriptions:string,
    getDatabase:()=>void,
    setModalVisible:React.Dispatch<React.SetStateAction<boolean>>
    setModalData:React.Dispatch<React.SetStateAction<IModalItem>>
}


const InventoryItem: React.FC<IInventoryItem> = ({itemId, itemName, brand, itemPrice, releaseDate, size,itemColor,descriptions,getDatabase,setModalVisible,setModalData}) => {
    
    const targetItem = {itemId:itemId}
    const params = useParams()
    const handleDelete = ()=>{
        axios.delete(`http://localhost:3000/admin/${params.id}/${params.username}/api/inventory`,{data:targetItem,withCredentials:true})
        .then(res=>getDatabase())
        .catch(err=>console.log(err))
    }

    const handleEditAction = ()=>{
        setModalVisible(prev=>!prev)
        setModalData({itemId,itemName,brand,itemPrice,releaseDate,itemColor,descriptions,size})
    }
    
    return (
        <tr>
            <td>{itemId}</td>
            <td>{itemName}</td>
            <td>{brand}</td>
            <td>{itemPrice}</td>
            <td>{size}</td>
            <td>{releaseDate}</td>
            <td>{itemColor}</td>
            <td>{descriptions}</td>
            <td><button className='edit_button' onClick={handleEditAction}>Edit</button></td>
            <td><button className='delete_button' onClick={handleDelete}>Delete</button></td>
        </tr>
    )

}

export default InventoryItem