import { Link } from "react-router-dom";


const Rooms = ({data={}}) => {
    console.log(data);
    const { name,image,roomSize,id } = data;
    return (
        <Link to={`/rooms/${id}`}>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                       
                        <div className="badge badge-outline">{name }</div>
                        <div className="badge badge-outline">{roomSize}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Rooms;