import { NavLink, useLoaderData, useParams } from "react-router-dom";


const View = () => {
    const singleview = useLoaderData();
    console.log(singleview);
    const { id } = useParams();
    const parsint = parseInt(id)
    const sin = singleview?.find(sin => sin.id === parsint)
    return (
        <div>
            <div className="card glass w-96">
                <figure>
                    <img
                        src={sin.image}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{sin.roomSize}</h2>
                    <p>{sin.description}</p>


                    <p>Price per night:{sin.price}</p>
                    <p>{sin.availability}</p>
                    <p>{sin.specialOffers}</p>
                    
                </div>
                <NavLink to={'/booked'}><button className="btn btn-secondary">Book this room</button></NavLink>
            </div>
        </div>
    );
};

export default View;