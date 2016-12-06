import axios from 'axios';

const API_KEY = '92c4c601e332916e572f6c80ff721403';
cosnt ROOT_URL = `http://api.openwather.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WATHER,
    payload: request
  }
}