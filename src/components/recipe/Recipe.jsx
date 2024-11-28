import PropTypes from 'prop-types';
import time from '../../assets/images/time.png';
import calorie from '../../assets/images/Calories.png';
const Recipe = ({recipe, handleWantToCook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div>
            <div className='w-[350px] h-[685px] border-2 rounded-3xl p-6'>
                <img className='w-[331px] h-[200px] rounded-3xl mt-4' src={recipe_image} alt="" />
                <h2 className='text-xl font-semibold mt-6'>{recipe_name}</h2>
                <p className='fira-sans text-base font-normal mt-6'>{short_description}</p>
                <h2 className='text-lg font-semibold mt-6'>Ingredients:</h2>
                <div className='pl-5'>
                    <ul className='list-disc mt-3'>
                        {
                            ingredients.map((ingredient, idx) => (<li key={idx}>{ingredient}</li>))
                        }
                    </ul>
                </div>
                <div className="flex gap-5 justify-between mt-6">
                    <div className='flex gap-1'>
                        <img src={time} alt="" /> 
                        <p className='ml-2'>{preparing_time}</p>
                        <p>minutes</p>
                    </div>
                    <div className="flex gap-1 fira-sans">
                        <img src={calorie} alt="" /> 
                        <p className='ml-2'>{calories}</p>
                        <p>calories</p>
                    </div>
                </div>
                <div className='mt-8 mb-5'>
                    <button onClick={() => handleWantToCook(recipe)} className='text-lg font-medium rounded-full pl-4 pr-4 pt-2 pb-2 bg-green-400'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
}

export default Recipe;