import React from 'react';

interface IInventoryItem {
    id: number,
    name: string,
    color: string,
    size: string,
    price: number
    status: string
}


const InventoryItem: React.FC<IInventoryItem> = ({ id, name, color, size, price, status }) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{color}</div>
            <div>{size}</div>
            <div>{price}</div>
            <div>{status}</div>
        </div>
    )

}

export default InventoryItem