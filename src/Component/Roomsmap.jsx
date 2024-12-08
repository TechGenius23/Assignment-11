import { useLoaderData } from "react-router-dom";
import Rooms from "./Rooms";


const Roomsmap = () => {
    const {datas}=useLoaderData();
    console.log(datas);
    return (
        <div className="grid grid-cols-3">
        {
            datas?.map((info)=><Rooms key={info.id} data={info}></Rooms>)
        },
       </div>
    );
};

export default Roomsmap;