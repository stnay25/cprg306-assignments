"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name'); 
    
    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else {
            return 0;
        }
    });

    const GroupSortItems = (items) => {
        const groupedItems = items.reduce((acc, item) => {
            (acc[item.category] = acc[item.category] || []).push(item);
            return acc;
        }, {});
         
        Object.keys(groupedItems).forEach(category => {
            groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
        });
    
        return groupedItems;
    };    

    return (
        <div >
            <div className="mb-4 px-4 py-4 bg-black w-1/3 m-4 border-4 border-white ">
            <span className="font-bold text-white ">Sort By: </span>
            <button 
                onClick={() => setSortBy('name')} 
                className={`px-2 py-2 mr-5 font-bold text-white rounded hover:bg-purple-400 ${sortBy === 'name' ? 'bg-purple-400' : 'bg-black'}`}
            > Name
            </button>
            <button 
                onClick={() => setSortBy('category')} 
                className={`px-2 py-2 mr-5 font-bold text-white rounded hover:bg-purple-400  ${sortBy === 'category' ? 'bg-purple-400' : 'bg-black' }`}
            > Category
            </button>
            <button 
                onClick={() => setSortBy('groupCategory')} 
                className={`px-2 py-2 mr-5 font-bold text-white rounded hover:bg-purple-400 ${sortBy === 'groupCategory' ? 'bg-purple-400' : 'bg-black'}`}
            > Group by Category
            </button>
            </div>
            
            {
                sortBy === 'groupCategory' ? (
                    Object.entries(GroupSortItems(sortedItems))
                        .sort(([a], [b]) => a.localeCompare(b))
                        .map(([category, items]) => (
                        <div key={category} className="mb-4">
                            <h2 className="font-bold text-lg capitalize mb-2">{category}</h2>
                            <ul>
                                {items.map((item) => (
                                    <li key={item.id} className="mb-2">
                                        <Item
                                            name={item.name}
                                            quantity={item.quantity}
                                            category={item.category}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <ul>
                        {sortedItems.map((item) => (
                            <li key={item.id} className="mb-2">
                                <Item
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                />
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}