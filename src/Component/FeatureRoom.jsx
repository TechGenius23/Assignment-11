

const FeatureRoom = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Feature of our Rooms</h2>
                        <p className="font-serif text-sm dark:text-gray-600">We provide best comfortable and secure room.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co.com/3fT5jqK/OIP-3.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Luxury Room</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">We provide international luxury room</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>June 1, 2020</span>
                                    <span>2.9K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co.com/MCLc2CS/OIP-4.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Comercial Room</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">We provide best type of comercial room all over the country</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>August 2, 2021</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co.com/169K3kT/OIP-5.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Single Room</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">For single people we provide single room that is relaxable</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>January 3, 2022</span>
                                    <span>5.0K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co.com/JvpMdZD/R-2.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Couple Room</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">We provide couple room that are most secure and reliable</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>January 4, 2020</span>
                                    <span>22K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureRoom;