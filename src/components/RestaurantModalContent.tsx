import { FaLink } from "react-icons/fa6";

export interface RestaurantModalContentProps {
  name: string;
  city: string;
  state: string;
  website: string;
  webStatus: string;
  description: string;
  address: string;
}

const escape = (address: string) => {
  return encodeURIComponent(address);
}

function RestaurantModalContent(props: RestaurantModalContentProps) {
  return (
    <div className="">
      <div className="px-8 py-8 text-left">
        <h1 className="text-7xl font-bold">{props.name}</h1>
        <h3 className="text-2xl pt-4">{props.city}, {props.state}</h3>
        {props.website !== null && props.webStatus === "Up" ? <a href={props.website} target="_blank"><span className="inline-flex items-center pt-2 text-xl text-gray-500 space-x-2">
          <span><FaLink /> </span>
          <span>{props.name}'s website</span>
        </span></a> : null}
        <p className="pt-2">{props.description}</p>

        <iframe
          width="400"
          height="300"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDHRL7If953RLfKsfBOZ64Ws7RgU07-Jgc&q=${escape(props.address)}`}
          className="pt-4">
        </iframe>
      </div>
    </div>
  );
}

export default RestaurantModalContent;