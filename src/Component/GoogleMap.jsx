
import { Map, Marker } from "pigeon-maps"

const GoogleMap = () => {
    return (
        <div>
            <Map height={300} defaultCenter={[23.6850, 90.3563]} defaultZoom={6}>
                <Marker width={50} anchor={[23.6850, 90.3563]} />
            </Map>

        </div>
    );
};

export default GoogleMap;