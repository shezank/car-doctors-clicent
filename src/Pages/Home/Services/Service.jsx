import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const {_id, title, img, price} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price : ${price}</p>
                <div>
                    <Link to={`/services/${_id}`}><button className="btn">Book Now</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Service;