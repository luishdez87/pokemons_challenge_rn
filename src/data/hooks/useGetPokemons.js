import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetPokemons(page) {
  const limit = 50;
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`
    }).then((res) => {
      setPokemons(prev => [...prev, ...res.data.results]);
      setLoading(false);
    })
  }, [page]);

  return { pokemons, loading };
}