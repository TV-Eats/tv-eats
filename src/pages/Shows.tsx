import { useState, useEffect } from "react";
import { Database } from '../types/supabase';
import { createClient } from '@supabase/supabase-js';
import TileLayout from "../components/TileLayout";

const supabase = createClient<Database>("https://lbcmncanrrxxpnxgqjuy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiY21uY2FucnJ4eHBueGdxanV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxOTE3MjEsImV4cCI6MjAzMDc2NzcyMX0.ixqd5dq2vKgF_JNWQe-iLbwYoNd9rzvK7C2-fAd_b78");

function Shows() {
  const [shows, setShows] = useState([] as any[])

  // Leaving this example here for future reference
  async function getShows() {
    let { data: shows, error } = await supabase
      .from('shows')
      .select()
    if (error) {
      console.log('error', error)
    } else if (shows) {
      setShows(shows)
    }
  }

  useEffect(() => {
    getShows()
  }, [])

  console.log(shows)

  return (
    <div>
      <center>
        <h1 className="font-bold text-2xl pt-2.5">{shows.length} Shows Found.</h1>
        <TileLayout tileList={shows} arrayType="shows" />
      </center>
    </div>
  )

}

export default Shows;
