import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id =>{
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                  });
                  const remaining = users.filter(user => user._id !== id)
                  setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <h1>Users: {loadedUsers.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Created At</th>
        <th>Last LoggedAt</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            users.map(user =>   <tr key={user._id}className="bg-base-200">
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td><button onClick={()=>handleDelete(user._id)} className='btn btn-primary'>Delete</button></td>
          </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;