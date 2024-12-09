import { useRouteLoaderData } from "react-router-dom";
import MyRoom from "./MyRoom";


const BeforeRead = () => {
    const creatData=useRouteLoaderData();
    console.log(creatData);
    return (
        <div>
            {
                creatData?.map(data=><MyRoom key={data._id} roomdata={data}></MyRoom>)
            }
        </div>
    );
};

export default BeforeRead;