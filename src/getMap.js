const apiKey = 'IUm7KcHkmyarlN7aamgD';
const url = 'https://api.mozambiquehe.re/maprotation?version=2'

export const getMap = async () => {
  const response = await fetch(`${url}&auth=${apiKey}`);
  const json = await response.json();
  return json;
};