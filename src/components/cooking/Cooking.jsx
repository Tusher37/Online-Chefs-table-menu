import PropTypes from 'prop-types';
import CalculateTimeCalorie from '../calculateTimeCalorie/CalculateTimeCalorie';
let t =0;
let c =0;
const Cooking = ({cookingItems}) => {
    return (
        <div className='border-2 w-[550px] rounded-2xl p-6'>
            <h2 className='text-2xl font-semibold text-center mb-5'>Currently cooking: {cookingItems.length}</h2>
            <table className='flex flex-col gap-5'>
                <thead>
                    <tr className='flex flex-row gap-24 ml-20'>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <div className=''>
                            {cookingItems?.map((items, idx) =>{
                                t = t + items.preparing_time;
                                console.log(t);
                                <CalculateTimeCalorie items={t}></CalculateTimeCalorie>
                                return (
                                    <tr key={items.recipe_id} className='flex flex-row gap-16 bg-gray-100 p-2 rounded-2xl mb-3'>
                                        <td>{idx+1}</td>
                                        <td className='w-10'>{items.recipe_name} </td>
                                        <td>{items.preparing_time} minutes</td>
                                        <td>{items.calories} calories</td>
                                    </tr>
                                );
                            })
                            }
                        </div>
                    }
                </tbody>
            </table>
        </div>
    );
};

Cooking.propTypes = {
    cookingItems: PropTypes.array.isRequired
}

export default Cooking;