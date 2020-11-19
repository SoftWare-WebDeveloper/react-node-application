import { API_TOKEN } from "./config";

export const getForecast = async (city: string) => (
  fetch(`http://localhost:3001/api/weather?token=${API_TOKEN}&city=${city}&days=5`)
    .then(response => response.json())
);