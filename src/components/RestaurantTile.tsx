import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Database } from "../types/supabase";
import { FaLink } from "react-icons/fa6";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Modal from "./Modal";

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

const supabase = createClient<Database>("https://lbcmncanrrxxpnxgqjuy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiY21uY2FucnJ4eHBueGdxanV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxOTE3MjEsImV4cCI6MjAzMDc2NzcyMX0.ixqd5dq2vKgF_JNWQe-iLbwYoNd9rzvK7C2-fAd_b78");

const RestaurantTile = ({ id, name, city, state, website, description, address, webStatus } : Params ) => {
    const [visible, setVisibility] = useState(false);
    const escape = (address: any) => {
        return encodeURIComponent(address);
    }
    
    const [seenOn, setSeenOn] = useState([] as any[]);
    const [matches, setMatches] = useState([] as any[]);
    
    async function getSeenOn() {
        let { data: ids, error } = await supabase
          .from('shows_restaurants')
          .select('show_id')
          .eq('restaurant_id', id)
        if (error) {
          console.log('error', error)
        } else if (ids) {
          setSeenOn(ids)
        }
      }

    async function getMatches() {
        let { data: matches, error } = await supabase
          .from('shows')
          .select('name')
          .in('id', seenOn)
          
          if(error) {
            console.log('error', error)
          } else if (matches) {
            setMatches(matches)
          }
    }
    
    useEffect(() => {
        getSeenOn();
        console.log(seenOn);
        getMatches();
        console.log(matches);
    }, [])

    return (
        <div>
            

            <Modal name={name} city={city} state={state} website={website} description={description} webStatus={webStatus} address={address}/>
            
            
        </div>
    );
};

export default RestaurantTile;

/**
 * <button className="sm:max-w-sm mt-4 mx-2 bg-white border border-gray-200 rounded-lg shadow-md" onClick={()=>(document.getElementById(id) as HTMLFormElement).showModal()}>
                <img className="hidden md:block show border rounded-t-lg" src="https://cdn.vox-cdn.com/thumbor/_rkY834oqWMSnPe_W9MQcp6wYIk=/68x0:2933x1500/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10370303/1_t09vJE85R489sI-QC2BaeQ.0.0.0.0.jpeg" alt="guy fieri placeholder" />
                <div className="py-4">
                    <h1 className="font-bold">{name}</h1>
                    <p>{city}, {state}</p>
                </div>
            </button>
 */