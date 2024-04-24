import { useLoaderData } from "react-router-dom"
import CoffeCard from "./components/CoffeCard"
import { useState } from "react";

function App() {
  const loadedcoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffee)
  return (
    <>
      
      <h1 className='text-6xl text-purple-600'>Hot Coffees: {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-4 my-4">
      {
        coffees.map(coffee=><CoffeCard key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}></CoffeCard>)
      }
      </div>
      
    </>
  )
}

export default App
