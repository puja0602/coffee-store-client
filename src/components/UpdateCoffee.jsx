import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, chef, supplier, taste, category, details, photo} = coffee;
    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photoURL.value;

        const updateCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success!',
                    text: 'Successfully Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
<div className='max-w-7xl mx-auto'>
            <div className="card shrink-0 shadow-2xl bg-base-100">
            <h1 className='text-3xl font-bold text-center'>Update New Coffee</h1>
      <form onSubmit={handleUpdateCoffee} className="card-body">
        {/* form-row */}
        <div className='flex gap-4'>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={name} className="input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input type="text" name="chef" defaultValue={chef} className="input input-bordered" required />
        </div>
        </div>
                {/* form-row */}
        <div className='flex gap-4'>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" name="supplier" defaultValue={supplier} className="input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name="taste" defaultValue={taste} className="input input-bordered" required />
        </div>
        </div>
                {/* form-row */}
                <div className='flex gap-4'>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name="category" defaultValue={category} className="input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name="details" defaultValue={details} className="input input-bordered" required />
        </div>
        </div>
                {/* form-row */}
                <div className='flex gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photoURL" defaultValue={photo} className="input input-bordered" required />
        </div>
        </div>
        <div className="mt-6 text-center">
         <input type="submit" value="Update Coffee" className='btn btn-secondary' />
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateCoffee;