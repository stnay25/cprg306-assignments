"use client";

import React, { useState } from 'react';
import Item from './item';
import Link from 'next/link';

export default function ItemList({ items, onItemSelect, onDeleteItem }) {

    const handleItemClick = (item) => {
        if (onItemSelect) {
            onItemSelect(item);
        }
    };


    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return (a.name || '').localeCompare(b.name || '');
        } else if (sortBy === 'category') {
            return (a.category || '').localeCompare(b.category || '');
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


    const groupedItems = GroupSortItems(items);

    const handleDeleteClick = (event, itemId) => {
        event.stopPropagation(); 
        onDeleteItem(itemId);
      };

    return (
        <div >
            <div className="flex justify-between items-center mb-5 px-20 py-5 bg-black border-2 border-white ">
                <span className="text-lg font-bold text-white ">Sort By: </span>
                <button
                    onClick={() => setSortBy('name')}
                    className={`text-lg w-1/4 px-5 py-3 mr-5 font-bold text-white rounded hover:bg-purple-400 ${sortBy === 'name' ? 'bg-purple-400 border-2 border-white' : 'bg-black'}`}
                > Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className={`text-lg w-1/4 px-5 py-3 mr-5 font-bold text-white rounded hover:bg-purple-400  ${sortBy === 'category' ? 'bg-purple-400 border-2 border-white' : 'bg-black'}`}
                > Category
                </button>
                <button
                    onClick={() => setSortBy('groupCategory')}
                    className={`text-lg w-1/4 px-5 py-3 mr-5 font-bold text-white rounded hover:bg-purple-400 ${sortBy === 'groupCategory' ? 'bg-purple-400 border-2 border-white' : 'bg-black'}`}
                > Group by Category
                </button>
            </div>

            {
                sortBy === 'groupCategory' ? (
                    Object.entries(GroupSortItems(sortedItems))
                        .sort(([a], [b]) => a.localeCompare(b))
                        .map(([category, items]) => (
                            <div key={category} className="mb-4">
                                <h2 className="text-white font-bold text-lg capitalize mb-2">{category}</h2>
                                <ul>
                                    {items.map((item) => (
                                        <li key={item.id} 
                                        onClick={() => handleItemClick(item)}
                                        className="mb-2">
                                            <Item
                                                name={item.name}
                                                quantity={item.quantity}
                                                category={item.category}
                                            />
                                        </li>
                                    ))}
                                </ul>
                                <button
                      onClick={(e) => handleDeleteClick(e, items.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                            </div>
                            
                        ))
                ) : (
                    
                    <ul>
                        {sortedItems.map((item) => (
                            <li key={item.id}
                            onClick={() => handleItemClick(item)} 
                            className="mb-4">
                                <Item
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}                
                                />
                                <button onClick={(e) => handleDeleteClick(e, item.id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )
            }
        <button className="mt-4 py-2 px-4 bg-purple-700 hover:bg-purple-500 text-white rounded-lg">
            <Link href="/">&lt;-</Link>
        </button>
        </div>
    );
}
