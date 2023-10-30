import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Shard/AuthProviders/AuthProviders";


const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBooking = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            bookingName: name,
            date,
            email,
            price,
            Service_id: _id,
            img,
            Service_title: title
        }
        console.log(booking)

        fetch('http://localhost:4000/bookings',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <h1 className="text-center text-3xl font-bold">Booking Service: {title}</h1>
            <form onSubmit={handleBooking} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <input type="name" name="name" defaultValue={user?.displayName ? user.displayName : "Full Name"} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <input type="email" name="email" defaultValue={user? user.email : "Email"} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="price" defaultValue={price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default ServiceDetails;