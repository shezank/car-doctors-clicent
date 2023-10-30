import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shard/AuthProviders/AuthProviders";
import axios from "axios";


const BookingServices = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    
    const url = `http://localhost:4000/bookings?email=${user?.email}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res =>{
            setBookings(res.data)
        })
    }, [url])

   const handleDelete = id =>{
    fetch(`http://localhost:4000/bookings/${id}`,{
    method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
            alert('Successfully Delete Your Data')
            const reming = bookings.filter( booking => booking._id !== id);
            setBookings(reming);
        }
    })
   }

   const handleUpdate = id =>{
    fetch(`http://localhost:4000/bookings/${id}`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({status: 'Confirm'})
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            const remaing = bookings.filter(booking => booking._id !== id);
            const updateBooking = bookings.find(booking => booking._id === id);
            updateBooking.status = 'Confirm';
            const newBookings = [...remaing, updateBooking];
            setBookings(newBookings);

        }
    })
   }


    return (
        <div>
            <h1>Booking Services: {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <p>Selected</p>
                                </label>
                            </th>
                            <th>Images</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        <label>
                                            <button onClick={()=> handleDelete(booking._id)}>X</button>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {booking.Service_title}
                                    
                                    </td>
                                    <td>{booking.price}</td>
                                    <th>
                                        {booking?.status ? 
                                    <button  className="btn btn-ghost btn-xs text-green-700">Confirm</button>:
                                    <button onClick={()=> handleUpdate(booking._id)} className="btn btn-ghost btn-xs">Change Status</button>

                                    }
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Selected</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default BookingServices;