import React from 'react';

interface IInventoryItem {
    itemId:number,
    itemName:string,
    brand:string,
    itemPrice:number,
    size:number,
    releaseDate:string,
    itemColor:string,
    descriptions:string
}


const InventoryItem: React.FC<IInventoryItem> = ({itemId, itemName, brand, itemPrice, releaseDate, itemColor,descriptions}) => {
    return (
        <tr>
            <td>{itemId}</td>
            <td>{itemName}</td>
            <td>{brand}</td>
            <td>{itemPrice}</td>
            <td>{releaseDate}</td>
            <td>{itemColor}</td>
        </tr>
    )

}

export default InventoryItem