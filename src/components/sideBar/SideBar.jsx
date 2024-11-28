import PropTypes from 'prop-types';
// import Cooking from '../cooking/Cooking';

const SideBar = ({wantToCookItem, handlePreparing}) => {
    return (
        <div className='border-2 w-[550px] rounded-2xl p-6'>
            <h2 className='text-2xl font-semibold text-center mb-5'>Want to cook: {wantToCookItem.length} </h2>
            <table className='flex flex-col gap-5'>
                <thead>
                    <tr className='flex flex-row gap-20 ml-10'>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <div>
                        {wantToCookItem?.map((items, idx) =>{
                            return (
                                <tr key={items.recipe_id} className='flex flex-row gap-10 bg-gray-100 p-2 rounded-xl mb-3'>
                                    <td>{idx+1} </td>
                                    <td>{items.recipe_name} </td>
                                    <td>{items.preparing_time} minutes</td>
                                    <td>{items.calories} calories</td>
                                    <td>
                                        <button 
                                            onClick={() => handlePreparing(items,items.recipe_id)} 
                                            className='bg-green-400 pl-4 pr-4 pt-1 pb-1 rounded-full'>Preparing</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </div>
                </tbody>
            </table>
        </div>
    );
};
// , () => handleRemovePreparingItem(items.recipe_id)}
SideBar.propTypes = {
    wantToCookItem: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func,
    // cookingItems: PropTypes.object
    // handleRemovePreparingItem: PropTypes.func
}

export default SideBar;