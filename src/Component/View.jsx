import { useLoaderData, useParams } from "react-router-dom";

const View = () => {
    const singleview = useLoaderData(); 
    const { id } = useParams();
    const parsedId = parseInt(id, 10);
    const sin = singleview?.find((item) => item.id === parsedId);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sin) {
            const bookingData = {
                id: sin.id,
                roomSize: sin.roomSize,
                price: sin.price,
                availability: sin.availability,
                image: sin.image, // Include the image
            };
    
            fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Booking Successful:", data);
                    alert("Go to My Room");
                })
                .catch((error) => console.error("Booking Error:", error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card glass w-96">
                <figure>
                    <img src={sin.image} alt={sin.roomSize} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{sin.roomSize}</h2>
                    <p>{sin.description}</p>
                    <p>Price per night: {sin.price}</p>
                    <p>Availability: {sin.availability}</p>
                    <p>Special Offers: {sin.specialOffers || "None"}</p>
                </div>
                <button type="submit" className="btn btn-secondary">
                    Book this room
                </button>
            </div>
        </form>
    );
};

export default View;
