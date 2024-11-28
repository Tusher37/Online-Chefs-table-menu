import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';


const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between m-5">
                <h2 className="text-3xl font-bold">Culinary Kitchen</h2>
                <div className="ul-items text-base font-normal">
                    <ul className="flex gap-4">
                        <li className="list-1">Home</li>
                        <li className="list-2">Recipes</li>
                        <li className="list-3">About</li>
                        <li className="list-4">Search</li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <div className='flex justify-center bg-gray-100 p-2 rounded-full'>
                        <img src={search} alt="" />
                        <input type="text" placeholder="Search" className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;