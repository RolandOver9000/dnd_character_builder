import React, {createContext, Children} from 'react'
import useFetcher from '../hooks/Fetcher'

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
    const [skills, setSkills] = useFetcher()

    return (
        <CharacterContext.Provider>
            {props.Children}
        </CharacterContext.Provider>
    )
}


