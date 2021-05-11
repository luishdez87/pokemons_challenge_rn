import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetSpecies(url) {
  const [species, setSpecies] = useState();
  
  useEffect(() => {
    axios({
      method: 'GET',
      url: url
    }).then((res) => {
      setSpecies(res.data);
    })
  }, [url]);

  return species;
}