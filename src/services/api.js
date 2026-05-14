import Default from '../assets/defaultCharacter.png';

const getCharacters = (house) => {
  return fetch(
    house === 'all'
      ? 'https://hp-api.onrender.com/api/characters'
      : `https://hp-api.onrender.com/api/characters/house/${house}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      return response.json();
    })
    .then((data) => {
      return data.map((character) => ({
        id: character.id,
        name: character.name,
        alternateNames: character.alternate_names,
        species: character.species,
        gender: character.gender,
        house: character.house,
        image: character.image || Default,
        alive: character.alive,
      }));
    });
};

export default getCharacters;
