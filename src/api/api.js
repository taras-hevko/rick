const BAZE_URL = 'https://rickandmortyapi.com/api/';

async function getRickAndMorty(parameter) {
  const response = await fetch(`${BAZE_URL}${parameter}`);
  const data = await response.json();
  const result = await data.results;

  return result;
}


export const getCharacter = getRickAndMorty('character/')