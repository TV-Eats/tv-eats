import { useModalStore } from "../stores/modalStore";
import RestaurantModalContent from "./RestaurantModalContent";

type Params = {
  name: string;
  city: string;
  state: string;
  website: string;
  id: string;
  description: string;
  address: string;
  webStatus: any;
}

const RestaurantTile = ({ id, name, city, state, website, description, address, webStatus }: Params) => {
  const { openModalWithContent } = useModalStore();

  return (
    <div>
      <button type="button" onClick={
        () => openModalWithContent(
          <RestaurantModalContent
            name={name}
            city={city}
            state={state}
            website={website}
            webStatus={webStatus}
            description={description}
            address={address}
          />
        )
      } className="sm:max-w-sm mt-4 mx-2 bg-white border border-gray-200 rounded-lg shadow-md" >
        <img className="hidden md:block show border rounded-t-lg" src="https://cdn.vox-cdn.com/thumbor/_rkY834oqWMSnPe_W9MQcp6wYIk=/68x0:2933x1500/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10370303/1_t09vJE85R489sI-QC2BaeQ.0.0.0.0.jpeg" alt="guy fieri placeholder" />
        <div className="py-4">
          <h1 className="font-bold">{name}</h1>
          <p>{city}, {state}</p>
        </div>
      </button>
    </div>
  );
};

export default RestaurantTile;
