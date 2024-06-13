import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Database } from "../types/supabase";

type Params = {
    showName: string;
    id: number;
}

function ShowTile({showName, id}: Params) {
    return (
        <div>
            <center>
                <Link to={`/restaurants?show_id=${id}`}>
                    <div className="max-w-sm mt-4 mx-2 bg-white border border-gray-200 rounded-lg shadow-md">
                        <img className="hidden md:block show border rounded-t-lg" src="https://media.gq.com/photos/59dfc6d9d61cb80476584e18/master/pass/guy-fieiri-flame.jpg" alt="guy fieri placeholder" />
                        <h1 className="py-6">
                            {showName} - {id}
                        </h1>
                    </div>
                </Link>
            </center>
        </div>
    )
}

export default ShowTile;