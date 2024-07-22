import React from "react";
import ShowTile from "./ShowTile";
import RestaurantTile from "./RestaurantTile";

type Params = {
    tileList: any[];
    arrayType: string;
}



function TileLayout({tileList, arrayType}: Params) {
    if (arrayType === "shows") {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pb-8">
                {tileList.map((show) => <ShowTile showName={show.name} id={show.id} />)} 
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pb-8">
                {tileList.map((restaurant) => (<RestaurantTile webStatus={restaurant.website_status} name={restaurant.name} address={restaurant.address} city={restaurant.city} state={restaurant.state} website={restaurant.website} id={restaurant.id} description={restaurant.description} />))} 
            </div>
        )
    }

}

export default TileLayout;