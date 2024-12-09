import { Link } from "react-router-dom";



const Rooms = ({data={}}) => {
    console.log(data);
    const { name,image,roomSize,id,description } = data;
    return (
        <Link to={`/rooms/${id}`}>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                       
                        <div className="badge badge-outline">{name }</div>
                        <div className="badge badge-outline">{roomSize}</div>
                    </div>
                </div>
                <button className="btn btn-info">See More</button>
            </div>
           
        </Link>
        
    );
};

export default Rooms;