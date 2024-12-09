
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeatureRoom from "./FeatureRoom";
import GoogleMap from "./GoogleMap";
import NewsLetter from "./NewsLetter";
import Rooms from "./Rooms";



const Home = () => {
const {datas}=useLoaderData(null)

    return (
        <div>
            <Banner></Banner>,
            <GoogleMap></GoogleMap>,
            <FeatureRoom></FeatureRoom>,
           
            <NewsLetter></NewsLetter>,
            <div className="grid grid-cols-3">
        {
            datas?.map((info)=><Rooms key={info.id} data={info}></Rooms>)
        },
       </div>
        </div>
    );
};

export default Home;