import React, { useState, Component } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import InventoryItem from '../components/InventoryItem';
import { useParams } from 'react-router';

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
    const emptyState:IInventoryItem = {
        itemId:0,
        itemName:'',
        brand:'',
        itemPrice:0,
        size:0,
        releaseDate:'',
        itemColor:'',
        descriptions:''
    }
    const [data,setData] = useState<IInventoryItem[]>([])
    const [newData,setNewData] = useState<IInventoryItem>(emptyState)
    const params = useParams()

    /**Get data from database */
    const getDatabase = ()=>{
        axios.get(`http://localhost:3000/admin/${params.id}/${params.username}/api/inventory`,{withCredentials:true})
        .then(res=>setData(res.data))
    }

    useEffect(()=>{
        getDatabase()
    },[])

    /**Set up form data */

    const formArray:{title:string,name:string}[] = [{title:"Item Id",name:"itemId"},{title:"Item Name",name:"itemName"},{title:"Brand",name:"brand"}
                        ,{title:"Item Price",name:"itemPrice"},{title:"Size",name:"size"},{title:"Release Date",name:"releaseDate"},{title:"Item Color",name:"itemColor"},
                        {title:"Descriptions",name:"descriptions"}]
    
    /**Event handler to update item form for the POST request */
    
    const updateItemForm = (e:React.ChangeEvent<HTMLInputElement>)=>{

        setNewData((prev)=>{
            return(
                {...prev,[e.target.name]: e.target.value}
            )
        })
    }

    const handleAddNewItem = ()=>{
        axios.post(`http://localhost:3000/admin/${params.id}/${params.username}/api/inventory`,newData,{withCredentials:true})
        .then(res=>{
            console.log(res)
            getDatabase()
        }).
        catch(err=>console.log(err))
    }
    
    console.log(newData)
    /**Set up the row for the table */

    const itemList = data.map((item)=>{
        return (
            <InventoryItem getDatabase={getDatabase} itemId={item.itemId} itemName={item.itemName} brand={item.brand} itemPrice={item.itemPrice} size={item.size}
                releaseDate={item.releaseDate} itemColor={item.itemColor} descriptions={item.descriptions} />
        )
    })
    
    /**Render form List */

    const updateFormList = formArray.map(item=>{
        return(
            <div>
                <label>{item.title}</label>
                <input type={ item.name == "itemId" || item.name == "itemPrice" ||  item.name =="size" ? 'number' : 'text'} onChange={updateItemForm} name={item.name}></input>
            </div>
            
        )
    })


    
    return (
        <div>
            <div>
                <button onClick={handleAddNewItem}>Add new item</button>
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