import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  axios.defaults.baseURL = 'https://clipfashion-gr7fp45wya-ue.a.run.app/api/v1/';
  // axios.defaults.baseURL = 'http://127.0.0.1:5000/api/v1/';


  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data);
    } catch(err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(param);
  }, [param])

  return {
    response,
    isLoading,
    error,
    fetchData: url => fetchData(url)
  }
}

export default useAxios