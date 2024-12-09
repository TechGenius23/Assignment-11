

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-80 rounded-xl">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/Yc0YBvd/ba.jpg"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/tX0WxL5/Hotel-Bristol-top-1024x538.jpg"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/j6j4wdp/OIP-1.jpg"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/6nMpy4d/R-3.jpg"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;