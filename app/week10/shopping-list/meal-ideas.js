"use client";

import React, { useState, useEffect} from "react";

const MealIdeas = ({ ingredient }) =>
{
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hoverMeal, setHoverMeal] = useState(null);
    const [selectMeal, setSelectMeal] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getMealIdeas(ingredient).then((fetchedMeals) => {
            setMeals(fetchedMeals);
            setLoading(false);
        })
        .catch(() => {
            setError('Fetching meal failed!!');
            setLoading(false);
        });
        }, [ingredient]);

        const handleSelectMeal = (meal) => {
            setSelectMeal(meal);
        };

        const handleNotSelectMeal = () => {
            setSelectMeal(null);
        };

        const handleHoverMeal = (meal) => {
            setHoverMeal(meal);
        };

    
        return (
            <div className="container mx-auto mt-8">
              <div className="mb-4 flex items-center">
                <h2 className="text-2xl font-semibold text-white">Meal Ideas for {ingredient}</h2>
              </div>
              {loading && <p>Loading...</p>}
              {!loading && error && <p className="text-red-500">{error}</p>}
              {!loading && !error && meals.length === 0 && (
                <p>No meal ideas found for {ingredient}.</p>
              )}
              {!loading && !error && meals.length > 0 && (
                <div className="flex">
                  <ul className="list-none p-0 mr-4">
                    {meals.map((meal) => (
                      <li
                        key={meal.idMeal}
                        className={`bg-dark-slate p-4 rounded-md shadow-md mb-4 border-white border hover:scale-105 transition-transform duration-300 cursor-pointer ${
                          meal === selectMeal ? 'selected bg-blue-500' : ''
                        }`}
                        onClick={() => {
                          if (meal === selectMeal) {
                            handleNotSelectMeal();
                          } else {
                            handleSelectMeal(meal);
                          }
                        }}
                        onMouseEnter={() => handleHoverMeal(meal)}
                        onMouseLeave={() => handleHoverMeal(null)}
                      >
                        <div className="text-lg font-semibold text-white">{meal.strMeal}</div>
                        <img
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          width="75"
                          className="mt-2 mb-2 w-24 h-24 object-cover transition-transform transform scale-100 group-hover:scale-110 group-hover:opacity-100 opacity-80"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="flex-grow flex flex-col">
                    {selectMeal && (
                      <div className={`bg-dark-slate p-4 rounded-md shadow-md mb-4 border-white border hover:scale-105 transition-transform duration-300 ${selectMeal ? 'selected bg-purple-500' : ''}`}>
                        <div className="text-xs text-gray-400 ml-2">
                          <h4 className="font-semibold text-lg mb-2 text-white">
                            Ingredients for {selectMeal.strMeal}:
                          </h4>
                          <ul className="list-disc pl-5">
                            {[
                              selectMeal.strIngredient1,
                              selectMeal.strIngredient2,
                              selectMeal.strIngredient3,
                              selectMeal.strIngredient4,
                              selectMeal.strIngredient5,
                            ]
                              .filter((ingredient) => ingredient) // Filter empty ingredients
                              .map((ingredient, index) => (
                                <li key={index} className="text-white">{ingredient}</li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {hoverMeal && (
                      <div className={`bg-dark-slate p-4 rounded-md shadow-md mb-4 border-white border hover:scale-105 transition-transform duration-300 ${hoverMeal ? 'flex-row' : ''}`}>
                        <div className="text-xs text-gray-400 ml-2">
                          <h4 className="font-semibold text-lg mb-2 text-white">
                            Ingredients for {hoverMeal.strMeal}:
                          </h4>
                          <ul className="list-disc pl-5">
                            {[
                              hoverMeal.strIngredient1,
                              hoverMeal.strIngredient2,
                              hoverMeal.strIngredient3,
                              hoverMeal.strIngredient4,
                              hoverMeal.strIngredient5,
                            ]
                              .filter((ingredient) => ingredient)
                              .map((ingredient, index) => (
                                <li key={index} className="text-white">{ingredient}</li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        };
    
        export default MealIdeas;
        

async function getMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`); // fetch meals containing ingredient 
        const data = await response.json(); // parse API response as JSON

        if (data.meals && data.meals.length > 0) { // check if meal have ingredient and map meal ID list of promise fetch meal
            const MealDetailPromise = data.meals.map((meal) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`) // fetch detail for each meal 
            .then((res) => res.json()));
          
        const MealDetails = await Promise.all(MealDetailPromise); // wait for all meal detail to resolve
        return MealDetails.map((detail) => detail.meals[0]); // get first meal deatil for each response
        }
        return []; // return meal empty array if no meal found
    }

    catch (error) {
        console.error('error!!!! there is an issue with the fetch operation: ', error.message);
        throw error; // diplay error 
    }
}

