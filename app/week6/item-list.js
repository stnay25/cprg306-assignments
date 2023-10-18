"use client";

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {

    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
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


    const groupedItems = GroupSortItems(items);

    return (
        <div >
            <div className="flex justify-between items-center mb-5 px-8 py-5 bg-black ">
                <span className="text-lg font-bold text-white ">Sort By: </span>
                <button
                    onClick={() => setSortBy('name')}
                    className={`text-lg w-1/4 px-5 py-3 mr-5 font-bold text-white rounded hover:bg-purple-400 ${sortBy === 'name' ? 'bg-purple-400' : 'bg-black'}`}
                > Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className={`text-lg w-1/4 px-5 py-3 mr-5 font-bold text-white rounded hover:bg-purple-400  ${sortBy === 'category' ? 'bg-purple-400' : 'bg-black'}`}
                > Category
                </button>
                <button
                    onClick={() => setSortBy('groupCategory')}
                    className={`text-lg w-1/4 px-5 py-3 mr-5 font-bold text-white rounded hover:bg-purple-400 ${sortBy === 'groupCategory' ? 'bg-purple-400' : 'bg-black'}`}
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