import React from "react";
import { Link } from "react-router-dom";
import { Database } from "../types/supabase";
import { FaLink } from "react-icons/fa6";

type Params = {
    name: string;
    city: string;
    state: string;
    website: string;
    id: string;
    description: string;
    address: string;
}

const escape = (address: any) => {
    return encodeURIComponent(address);
}



function RestaurantTile({name, city, state, website, id, description, address}: Params) {
    console.log(escape(address));
    return (
        <div>
            <button onClick={()=>(document.getElementById(id) as HTMLFormElement).showModal()}>
                <div className="sm:max-w-sm mt-4 mx-2 bg-white border border-gray-200 rounded-lg shadow-md">
                    <img className="hidden md:block show border rounded-t-lg" src="https://cdn.vox-cdn.com/thumbor/_rkY834oqWMSnPe_W9MQcp6wYIk=/68x0:2933x1500/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10370303/1_t09vJE85R489sI-QC2BaeQ.0.0.0.0.jpeg" alt="guy fieri placeholder" />
                    <div className="py-4">
                        <h1 className="font-bold">
                            {name}
                        </h1>
                        <p className="">
                            {city}, {state}
                        </p>    
                    </div>
                </div>
            </button>

            <dialog id={id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl h-3/5 max-h-5xl">
                    <div className="px-8 py-8 text-left">
                        <h1 className="text-7xl font-bold">{name}</h1>
                        <h3 className="text-2xl pt-4">{city}, {state}</h3>
                        {website !== null ? <a href={website} target="_blank"><span className="inline-flex items-center pt-2 text-xl text-gray-500 space-x-2">
                                                        <span><FaLink /> </span>
                                                        <span>{name}'s website</span>
                                                    </span></a> : null}
                        <p className="pt-2">{description}</p>

                        <iframe
                            width="400"
                            height="300"
                            loading="lazy"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDHRL7If953RLfKsfBOZ64Ws7RgU07-Jgc&q=${escape(address)}`}
                            className="pt-4">
                        </iframe>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>

        
    )
}

export default RestaurantTile;