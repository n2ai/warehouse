import React, { useState, Component } from 'react';

interface InventoryItemProps {
    imageUrl: string;
    name: string;
    category: string;
    price: number;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ imageUrl, name, category, price }) => { 
    return (
        <div>
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
        </div>
    );
}

export default InventoryItem


