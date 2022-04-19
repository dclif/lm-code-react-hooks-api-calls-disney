import React, { useState } from 'react';
import { DisneyCharacter } from '../disney_character';
import { useFavourites } from '../characterContext';


const Navigation: React.FC<{ setCharacters: any, currentPage: number, setCurrentPage: (page: number) => void, characters: Array<DisneyCharacter>, origCharacters: Array<DisneyCharacter> }>
    = ({ currentPage, setCurrentPage, characters, setCharacters, origCharacters }) => {

        const [bool, setBool] = useState<number>(1)

        const favourites = useFavourites();

        const nextPage = () => {
            const newPageNumber = currentPage + 1;
            setBool(1)
            setCurrentPage(newPageNumber);
        }

        const prevPage = () => {
            if (currentPage > 1) {
                const newPageNumber = currentPage - 1;
                setBool(1)
                setCurrentPage(newPageNumber);
            }
        }


        const toggle = () => {
            let dig;
            if (bool === 1) {
                setCharacters(favourites)
                dig = bool - 1;
            }
            else {
                setCharacters(origCharacters)
                dig = bool + 1;
            }
            setBool(dig)
        }


        return (
            <div className="navigation">
                <div className="navigation__item">
                    <button className="navigation__button" onClick={prevPage}>Prev Page</button>
                </div>
                <div className="navigation__item">
                    <button className="navigation__button" onClick={toggle}>{bool === 1 ? "Show Favourites" : "Show All"}</button>

                </div>
                <div className="navigation__item">
                    <button className="navigation__button" onClick={nextPage}>Next Page</button>
                </div>
            </div>

        )
    }

export default Navigation;

