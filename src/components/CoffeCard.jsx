import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, supplier, taste, category, details, photo} = coffee;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
            })
            .then(res=>res.json()
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your coffee has been deleted.",
                    icon: "success"
                  });
                  const remaining = coffees.filter(cof=>cof._id !== _id)
                  setCoffees(remaining)
            }
        }))
            }
          });
    }
    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-xl">
         <img className='w-[250px] h-[250px] mr-4' src={photo} alt="Movie"/>
        <div className="flex gap-20 items-center">
         <div>
         <h2 className="card-title">{name}</h2>
            <p>{category}</p>
            <p>{supplier}</p>
            <p>{chef}</p>
         </div>
        <div className="card-actions ">
         <button className="btn btn-primary">View</button>
        <Link to={`update-coffee/${_id}`}>
        <button className="btn">Edit</button>
        </Link>
         <button onClick={()=>handleDelete(_id)} className="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeCard;