
import { useLoaderData } from "react-router-dom";
import UserReview from "./UserReview";


const BeforeRoom = () => {
    const rooms=useLoaderData();
console.log(rooms);

    
    return (
        <div>
            {
                rooms?.map(room=><UserReview key={room._id} room={room}></UserReview>)
            }
        </div>
    );
};

export default BeforeRoom;