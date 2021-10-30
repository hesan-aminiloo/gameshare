import Map from '../../components/GoogleMaps';
import GameDescription from '../../components/GameDescription';
import NewGame from '../../components/NewGame';
import { Marker } from "react-google-maps";
import Link from 'next/link';

const markers = [
  { lat: 35.746815, lng: 51.299996 },
  { lat: 35.743296, lng: 51.329293 },
  { lat: 35.755375, lng: 51.299762 }
];

const Home = () => {
  return (
    <div className="w-screen h-screen relative">
      <Map
        defaultZoom={11}
        defaultCenter={{ lat: 35.72348, lng: 51.37486 }}
      >

        {
          markers.map(({ lat, lng }) => (
            <Marker
              key={lat}
              position={{ lat, lng }}
            />
          ))
        }


        <Link href="/new">
          <button
            className="absolute top-4 left-4 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 rounded text-white py-2 px-7 text-sm transform shadow-md"
          >
            آگهی جدید
          </button>
        </Link>


        <NewGame
        
        />

        {/* <GameDescription

        /> */}


      </Map>
    </div>
  );
};

export default Home;
