import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const UserReview = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then((res) => res.json())
            .then((data) => setRooms(data));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this room?");
        if (confirm) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        alert("Room deleted successfully");
                        setRooms(rooms.filter((room) => room._id !== id));
                    } else {
                        alert("Failed to delete room");
                    }
                })
                .catch((error) => console.error("Delete Error:", error));
        }
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {rooms?.map((room) => {
                    const { _id, roomSize, availability, price, image } = room;

                    return (
                        <div key={_id}>
                            <div className="card bg-primary text-primary-content w-96">
                                <div className="card-body">
                                    <figure>
                                        <img src={image} className="w-full h-48 object-cover" alt="Room" />
                                    </figure>
                                    <h2 className="card-title">{roomSize}</h2>
                                    <p>Availability: {availability}</p>
                                    <p>Price: {price}</p>
                                    <div className="flex justify-between">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(_id)}
                                        >
                                            Cancel
                                        </button>
                                        <NavLink to={'/rooms'}>
                                            <button className="btn">Choose Another One</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div>
                <p className="text-red-500 font-bold text-2xl">Total Rooms: {rooms.length}</p>
            </div>
        </>
    );
};

export default UserReview;
