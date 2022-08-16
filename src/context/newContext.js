import React, { useContext, useState, useEffect, createContext } from "react";
import axios from 'axios'

const MovieCon = createContext()

export const MovieProvider = ({children}) => {
   
    let url ="https://api.themoviedb.org/3/trending/all/day?api_key=9a021b25ef3a6f9445b413786a579195"
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=9a021b25ef3a6f9445b413786a579195'
      );
      setIsLoading(false);
      setItems(data);
    }
    fetchData();
  }, []);
    return (
        <MovieCon.Provider value={{items,isLoading }}>
         {children}   
        </MovieCon.Provider>
    )
}

export const useMovieContext = () => useContext(MovieCon)