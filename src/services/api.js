import Default from '../assets/defaultCharacter.png';

const getCharacters = () => {
  return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
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
