import React, { useContext, useState } from 'react'

const FavouritesContext = React.createContext<any | null>(null);
const FavouritesUpdateContext = React.createContext<any | null>(null);

export function useFavourites() {
    return useContext(FavouritesContext)
}

export function useFavouritesUpdate() {
    return useContext(FavouritesUpdateContext)
}


const CharacterContext: React.FC = ({ children }) => {

    const [characterFavourites, setCharacterFavourites] = useState<any[]>([]);

    return (
        <FavouritesContext.Provider value={characterFavourites}>
            <FavouritesUpdateContext.Provider value={setCharacterFavourites}>
                {children}
            </FavouritesUpdateContext.Provider>
        </FavouritesContext.Provider >
    )
}

export default CharacterContext;
