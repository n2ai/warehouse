import React from "react"
import "../styles/editItemModal.css"

interface IInventoryItem{
    itemId:number,
    itemName:string,
    brand:string,
    itemPrice:number,
    size:number,
    releaseDate:string,
    itemColor?:string,
    descriptions:string,
    isVisible?:()=>void
}

const EditItemModal:React.FC<IInventoryItem> = ({itemId,itemName,brand,itemPrice,size,releaseDate,itemColor,descriptions,isVisible})=>{
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



    return(
        <div className="modal_background">
            <div className="modal_container">
                <div className="modal_content">
                    <div className="modal_content_inputs">
                        <button>Close</button>
                        <input className="modal_input" type="number" placeholder={(itemId as number).toString()}></input>
                        <input className="modal_input" type="text" placeholder={itemName}></input>
                        <input className="modal_input" type="text" placeholder={brand}></input>
                        <input className="modal_input" type="number" placeholder={(itemPrice as number).toString()}></input>
                        <input className="modal_input" type="number" placeholder={(size as number).toString()}></input>
                        <input className="modal_input" type="text" placeholder={releaseDate}></input>
                        <input className="modal_input" type="text" placeholder={itemColor}></input>
                        <input className="modal_input" type="text" placeholder={descriptions}></input>
                        <button>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditItemModal