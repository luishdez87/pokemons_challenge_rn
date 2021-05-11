import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetPokemonDetails(url) {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: url
    }).then((res) => {
      setPokemon(res.data);
      setLoading(false);
    })
  }, [url]);

  return { pokemon, loading };
}