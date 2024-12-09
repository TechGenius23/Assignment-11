import { useEffect, useState } from "react";
import SetReview from "./SetReview";

const MyRoom = () => {
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="">
           
            <div className="grid grid-cols-3">
            {users?.map((user, index) => {
                const { name, description, rating } = user; 

                return (
                    <div key={index}> 
                        <div className="card bg-primary text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>{description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">{rating}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>

            <div>
               
                <p className="text-red-500 font-bold text-2xl">Total Reviews: {users.length}</p>

              
                <SetReview />
            </div>
        </div>
    );
};

export default MyRoom;
