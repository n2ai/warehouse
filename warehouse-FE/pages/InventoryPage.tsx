import React, { useState, Component } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import InventoryItem from '../components/InventoryItem';
import { useParams } from 'react-router';

interface IInventoryItem{
    itemId:number,
    itemName:string,
    brand:string,
    itemPrice:string,
    size:number,
    releaseDate:string,
    itemColor:string,
    descriptions:string
}

const InventoryPage: React.FC = () => {
    const [data,setData] = useState<IInventoryItem[]>([])
    // const fakeDB: IInventoryItem[] = [{
    //     id: 1,
    //     itemName: "af1",
    //     color: 'white',
    //     size: '9',
    //     price: 110,
    //     status: 'a'
    // }]
    // const arrayList = fakeDB.map((item) => {
    //     return (
    //         <InventoryItem id={item.id} name={item.itemName} color={item.color} size={item.size} price={item.price} status={item.status} />
    //     )
    // })
    const params = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/admin/${params.id}/${params.username}/api/inventory`,{withCredentials:true})
        .then(res=>setData(res.data))
    },[])

   
    

    return (
        <div>
            Hi This is inventory page
        </div>
    )
}

export default InventoryPage