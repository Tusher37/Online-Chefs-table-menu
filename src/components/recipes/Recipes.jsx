import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../recipe/Recipe";
import PropsTypes from 'prop-types';

const Recipes = ({handleWantToCook}) => {

    const [recipes, setRecipes] = useState([]);
    
    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[])

    return (
        <div className="grid grid-cols-2 gap-4">
            {
                recipes.map(recipe => <Recipe
                key={recipe.recipe_id} 
                recipe={recipe}
                handleWantToCook={handleWantToCook}
                ></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleWantToCook: PropsTypes.func
}

export default Recipes;