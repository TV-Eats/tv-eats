import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { Database } from '../types/supabase';
import { createClient } from '@supabase/supabase-js';
import TileLayout from "../components/TileLayout";
import { useSearchParams } from "react-router-dom";
import Shows from "./Shows";
import { resourceUsage } from "process";
import { debounce } from "../utils";

const supabase = createClient<Database>("https://lbcmncanrrxxpnxgqjuy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiY21uY2FucnJ4eHBueGdxanV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxOTE3MjEsImV4cCI6MjAzMDc2NzcyMX0.ixqd5dq2vKgF_JNWQe-iLbwYoNd9rzvK7C2-fAd_b78");


function Restaurants() {
    const [restaurants, setRestaurants] = useState([] as any[]);
    const [shows, setShows] = useState([] as any[])
    const [shows_restaurants, setShows_restaurants] = useState([] as any[]);
    const [searchParams] = useSearchParams();
    const [searchBarText, setSearchBarText] = useState('' as string);
    const [searchBarQuery, setSearchBarQuery] = useState('' as string);
    let val = searchParams.get('show_id') as unknown as number;
    let homeSearch = searchParams.get("filter") as unknown as string;
    let query = searchParams.get("query") as unknown as string; 


    async function getRestaurants() {
        let { data: restaurants, error } = await supabase
            .from('restaurants')
            .select()
        if (error) {
            console.log('error', error)
        } else if (restaurants) {
            setRestaurants(restaurants)
        }
    }

    const setSearchBarQueryDebounced = useCallback(
        debounce((query: string) => {setSearchBarQuery(query)}, 300),
        []
    )

    async function searchRestaurantsByName(query: string) {
        console.log('Searching!')
        let { data: restaurants, error } = await supabase.from('restaurants').select().textSearch('name', query)
        if (error) {
            console.log('error', error)
        } else if (restaurants) {
            setRestaurants(restaurants)
        }
    }

    async function searchRestaurantsByCity(query: string) {
      console.log('Searching!')
      let { data: restaurants, error } = await supabase.from('restaurants').select().textSearch('city', query)
      if (error) {
          console.log('error', error)
      } else if (restaurants) {
          setRestaurants(restaurants)
      }  }


    const handleSearchBarChange = (e: any) => {
        setSearchBarText(e.target.value);
        setSearchBarQueryDebounced(e.target.value);
    }


    useEffect(() => {
        if (searchBarQuery) {
            searchRestaurantsByName(searchBarQuery)
        } else if (homeSearch == "Restaurants") {
            setSearchBarText(query) ;
            searchRestaurantsByName(query);
        } else if (homeSearch == "Cities") {
          searchRestaurantsByCity(query);  
          setSearchBarText(query);
        }
        
    }, [searchBarQuery])

    async function getIds() {
        let { data: shows_restaurants, error } = await supabase
            .from('shows_restaurants')
            .select('restaurant_id').eq('show_id', val)

        if (error) {
            console.log('error', error)
        } else if (shows_restaurants) {
            setShows_restaurants(shows_restaurants)
        }
    }

    async function getShows() {
        let { data: shows, error } = await supabase
            .from('shows')
            .select("name").eq("id", val)
        if (error) {
            console.log('error', error)
        } else if (shows) {
            setShows(shows)
        }
    }

    useEffect(() => {
        setSearchBarQuery(query);
        getRestaurants();
        getIds();
        getShows();
    }, [])

    //console.log(shows_restaurants); // prints out ids of matching restaurants
    let ids = [] as any;
    shows_restaurants.forEach((element) => ids.push(element.restaurant_id));

    function isMatch(resId: any) {
        return ids.includes(resId);
    }

    let filteredRestaurants = restaurants.filter((restaurant) => isMatch(restaurant.id));
    console.log(filteredRestaurants);

    return (
        <div>
            <center>
                <span className="text-2xl pt-2.5 inline-flex space-x-2">{val ? filteredRestaurants.length : restaurants.length} restaurants found {query ? <h1> matching "{query}"</h1> : null}</span>
            </center>
            <div className="grid grid-cols-1 lg:grid-cols-10 md:grids-cols-2">
                <div className="lg:col-start-3 lg:col-span-8 md:col-span-1">
                    <label className="input input-bordered flex items-center gap-2">
                        <input 
                            type="text"
                            className="grow"
                            placeholder="Search"
                            value={searchBarText}
                            onChange={handleSearchBarChange}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <TileLayout tileList={val ? filteredRestaurants : restaurants} arrayType="restaurants" />
                </div>
            </div>
        </div>


    );
}

export default Restaurants;