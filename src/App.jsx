
import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Recipes from './components/recipes/Recipes'
import SideBar from './components/sideBar/SideBar'
import Cooking from './components/cooking/Cooking'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CalculateTimeCalorie from './components/calculateTimeCalorie/CalculateTimeCalorie'

function App() {
  const [wantToCookItem, setWantToCookItem] = useState([]);
  const handleWantToCook = recipe => {
    const isExist = wantToCookItem.find(item => item.recipe_id === recipe.recipe_id)
    if(isExist){
      notify();
    }
    else{
      // alert('Already Cooking!!');
      const newWantToCookItem = [...wantToCookItem, recipe];
      setWantToCookItem(newWantToCookItem);
    }
  }

  const notify = () =>{
    toast('You Already Choose This Menu..!!');
  }

  const [cookingItems, setCookingItems] = useState([]);
  const handlePreparing = (sideBar, id) => {
    handleRemovePreparingItem(id);
    const newCookingItems = [...cookingItems, sideBar];
    setCookingItems(newCookingItems);
  }

  const handleRemovePreparingItem = (id) =>{
    // console.log(id); 
    const newCookingList =wantToCookItem.filter(item => item.recipe_id != id);
    setWantToCookItem(newCookingList);
    // console.log(newCookingList);
  }
  // handleRemovePreparingItem={handleRemovePreparingItem}
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='mt-20 mb-6'>
        <h1 className='text-5xl font-semibold text-center'>Our Recipes</h1>
        <p className='text-base font-normal text-center mt-4'>Explore savory delights crafted with passion, <br /> each bite a culinary journey of exquisite flavors awaits</p>
      </div>
      <div className='flex gap-5 justify-between m-5'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <div className='flex flex-col gap-3'>
          <div>
            <SideBar handlePreparing={handlePreparing} wantToCookItem={wantToCookItem}></SideBar>
            <Cooking cookingItems={cookingItems}></Cooking>
          </div>
          <CalculateTimeCalorie></CalculateTimeCalorie>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Flip
      />
    </>
  )
}

export default App
