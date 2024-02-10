import React, { useState, Component } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import InventoryItem from '../components/InventoryItem';
import { useParams } from 'react-router';
import { ReadConcern } from 'mongodb';

interface IInventoryItem{
    itemId:number,
    itemName:string,
    brand:string,
    itemPrice:number,
    size:number,
    releaseDate:string,
    itemColor:string,
    descriptions:string
    
}

const InventoryPage: React.FC = () => {
    
    /**Set States */
    
    const [data,setData] = useState<IInventoryItem[]>([])
    const [newData,setNewData] = useState<IInventoryItem>({} as IInventoryItem)
    const params = useParams()

    /**Get data from database */

    useEffect(()=>{
        axios.get(`http://localhost:3000/admin/${params.id}/${params.username}/api/inventory`,{withCredentials:true})
        .then(res=>setData(res.data))
    },[])

    /**Set up form data */

    const formArray:{title:string,name:string}[] = [{title:"Item Id",name:"itemId"},{title:"Item Name",name:"itemName"},{title:"Brand",name:"brand"}
                        ,{title:"Item Price",name:"itemPrice"},{title:"Size",name:"size"},{title:"Release Date",name:"releaseDate"},{title:"Item Color",name:"itemColor"},
                        {title:"Descriptions",name:"descriptions"}]
    
    /**Event handler to update item form for the POST request */
    
    const updateItemForm = (e:React.ChangeEvent<HTMLInputElement>)=>{

        e.preventDefault()
        setNewData((prev)=>{
            return(
                {...prev,[e.target.name]: e.target.value}
            )
        })
    }

    /**Set up the row for the table */

    const itemList = data.map((item)=>{
        return (
            <InventoryItem itemId={item.itemId} itemName={item.itemName} brand={item.brand} itemPrice={item.itemPrice} size={item.size}
                releaseDate={item.releaseDate} itemColor={item.itemColor} descriptions={item.descriptions} />
        )
    })
    
    /**Render form List */

    const updateFormList = formArray.map(item=>{
        return(
            <div>
                <label>{item.title}</label>
                <input onChange={updateItemForm} name={item.name}></input>
            </div>
            
        )
    })


    const handleUpdateItem = ()=>{
        axios.post(`http://localhost:3000/admin/${params.id}/${params.username}/api/inventory`,newData,{withCredentials:true})
    }

    return (
        <div>
            <div>
                <button onClick={handleUpdateItem}>Add new item</button>
                {/**Test input  */}
                <div>
                    {updateFormList}
                </div>
            </div>
           <table>
            <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Brand Name</th>
                <th>Price {`($)`}</th>
                <th>Size</th>
                <th>Release Date</th>
                <th>Item Color</th>
                <th>Descriptions</th>
            </tr>
            {itemList}
           </table>
        </div>
    )
}

export default InventoryPage