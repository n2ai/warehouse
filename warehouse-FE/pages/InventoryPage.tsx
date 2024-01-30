import React, { useState, Component } from 'react';
import InventoryItem from '../components/InventoryItem';

interface IInventoryItem {
    id: number,
    itemName: string,
    color: string,
    size: string,
    price: number
    status: string
}

const InventoryPage: React.FC = () => {

    const fakeDB: IInventoryItem[] = [{
        id: 1,
        itemName: "af1",
        color: 'white',
        size: '9',
        price: 110,
        status: 'a'
    }]
    const arrayList = fakeDB.map((item) => {
        return (
            <InventoryItem id={item.id} name={item.itemName} color={item.color} size={item.size} price={item.price} status={item.status} />
        )
    })
    return (
        <div>
            {arrayList}
        </div>
    )
}

export default InventoryPage