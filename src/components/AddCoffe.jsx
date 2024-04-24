import React from 'react';
import Swal from 'sweetalert2'

const AddCoffe = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photoURL.value;

        const info = {name, chef, supplier, taste, category, details, photo}
        console.log(info);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: 'success!',
                text: 'Successfully Added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="card shrink-0 shadow-2xl bg-base-100">
            <h1 className='text-3xl font-bold text-center'>Add New Coffee</h1>
      <form onSubmit={handleAddCoffee} className="card-body">
        {/* form-row */}
        <div className='flex gap-4'>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input type="text" name="chef" placeholder="Enter coffee chef             " className="input input-bordered" required />
        </div>
        </div>
                {/* form-row */}
        <div className='flex gap-4'>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name="taste" placeholder="Enter coffee taste             " className="input input-bordered" required />
        </div>
        </div>
                {/* form-row */}
                <div className='flex gap-4'>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name="details" placeholder="Enter coffee category" className="input input-bordered" required />
        </div>
        </div>
                {/* form-row */}
                <div className='flex gap-4'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photoURL" placeholder="Enter photo URL" className="input input-bordered" required />
        </div>
        </div>
        <div className="mt-6 text-center">
         <input type="submit" value="Add Coffee" className='btn btn-secondary' />
        </div>
      </form>
    </div>
        </div>
    );
};

export default AddCoffe;