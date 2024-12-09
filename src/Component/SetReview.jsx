const SetReview = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.namee.value;
        const rating = form.ratingg.value;
        const description = form.review.value;

        const alldata = { name, rating, description };
        console.log(alldata);

     
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(alldata),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Response from server:', data);
                alert('Data saved successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to save data!');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-black text-red-600">
                <div className="flex gap-2 rounded-xl">
                    <input
                        className="rounded-sm"
                        type="text"
                        name="namee"
                        placeholder="Your name"
                        required
                    />
                    <input
                        className="rounded-sm"
                        type="number"
                        name="ratingg"
                        placeholder="Rate us"
                        required
                        min="1"
                        max="5"
                    />
                </div>

                <div className="p-4 space-y-2 text-sm">
                    <textarea
                        className="w-full h-48 rounded-xl text-center"
                        name="review"
                        placeholder="Describe here"
                        required
                    ></textarea>
                </div>
                <button className="btn btn-success" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SetReview;
