const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (err) {
    return {};
  }
}

export default fetchPlanets;
