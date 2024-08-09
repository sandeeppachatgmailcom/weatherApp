const baseURL = "https://api.weatherapi.com/v1/current.json?key=275f473d2df34f55bc641044240908";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
