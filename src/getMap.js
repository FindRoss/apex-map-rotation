const url = 'https://api.mozambiquehe.re/maprotation?version=2'

export const getMap = async () => {
  const response = await fetch(`${url}&auth=${process.env.REACT_APP_API_KEY}`);
  const json = await response.json();
  return json;
};