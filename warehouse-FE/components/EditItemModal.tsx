import React from "react"
import "../styles/editItemModal.css"
import axios from "axios"
import { useState } from "react"
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

interface IEditItemModal{
    itemId:number,
    itemName:string,
    brand:string,
    itemPrice:number,
    size:number,
    releaseDate:string,
    itemColor:string,
    descriptions:string,
    setVisible:React.Dispatch<React.SetStateAction<boolean>>,
    isVisible:boolean,
    getData:()=>void
}

const EditItemModal:React.FC<IEditItemModal> = ({itemId,itemName,brand,itemPrice,size,releaseDate,itemColor,descriptions,isVisible,setVisible,getData})=>{
    // {
    //     itemId: '5',
    //     itemName: 'ss',
    //     brand: 'sadas',
    //     itemPrice: '9.5',
    //     size: '9.5',
    //     releaseDate: '2023-01-05',
    //     itemColor: 'asdasd',
    //     descriptions: 'asdas'
    //   }


    const upDateFormData:IInventoryItem = {
        itemId:itemId,
        itemName:itemName,
        brand:brand,
        itemPrice:itemPrice,
        size:size,
        releaseDate:releaseDate,
        itemColor:itemColor,
        descriptions:descriptions
    }  

    const [updateForm,setUpdateForm] = useState<IInventoryItem>(upDateFormData)

    const handleUpdateForm = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUpdateForm(prev=>{
            return(
                {...prev,[e.target.name]:e.target.value}
            )
        })
    }

    const handleUpdateData = ()=>{
        console.log(updateForm)
        axios.put('http://localhost:3000/admin/${params.id}/${params.username}/api/inventory',updateForm,{withCredentials:true})
        .then(res=>getData())
        setVisible(prev=>!prev)
    }

    

    return(
        <>
        {isVisible && (<div className="modal_background">
            <div className="modal_container">
                <div className="modal_content">
                    <div className="modal_content_inputs">
                        <button onClick={()=>setVisible(prev=>!prev)}>Close</button>
                        <input className="modal_input" onChange={handleUpdateForm} name="itemId" type="number" placeholder={(itemId as number).toString()}></input>
                        <input className="modal_input" onChange={handleUpdateForm} name="itemName" type="text" placeholder={itemName}></input>
                        <input className="modal_input" onChange={handleUpdateForm} name="brand" type="text" placeholder={brand}></input>
                        <input className="modal_input" onChange={handleUpdateForm} name="itemPrice" type="number" placeholder={(itemPrice as number).toString()}></input>
                        <input className="modal_input" onChange={handleUpdateForm} name="size" type="number" placeholder={(size as number).toString()}></input>
                        <input className="modal_input" onChange={handleUpdateForm} name="releaseDate" type="text" placeholder={releaseDate}></input>
                        <input className="modal_input" onChange={handleUpdateForm} name="itemColor" type="text" placeholder={itemColor}></input>
                        <input className="modal_input" onChange={handleUpdateForm} name="descriptions" type="text" placeholder={descriptions}></input>
                        <button onClick={handleUpdateData}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>)}
        </>
    )
}

export default EditItemModal