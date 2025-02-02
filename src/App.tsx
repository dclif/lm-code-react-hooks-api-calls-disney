
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import CharacterContainer from './components/character_container';
import Navigation from './components/navigation';
import { DisneyCharacter } from './disney_character';
import axios from 'axios';
import CharacterContext from './characterContext';

const App: React.FC = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  const [origCharacters, setOrigCharacters] = useState<Array<DisneyCharacter>>(characters);

  useEffect(() => {
    getCharacters(currentPage)
  }, [currentPage]);

  const getCharacters = async (pageNumber: number) => {
    const apiResponse = await axios.get(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
    setCharacters(apiResponse.data.data);
    setOrigCharacters(apiResponse.data.data)
  };



  return (
    <CharacterContext>
      <div className="page">
        <Header currentPage={currentPage} />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} characters={characters} setCharacters={setCharacters} origCharacters={origCharacters} />
        <CharacterContainer characters={characters} />
      </div>
    </CharacterContext>
  );
}

export default App;
