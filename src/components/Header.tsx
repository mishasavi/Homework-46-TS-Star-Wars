import {useContext} from 'react';
import Navigation from "./Navigation.tsx";
import {CharContext} from "../utils/useContext.ts";
import {characters} from "../utils/characters.ts";

const Header = () => {
    const {hero} = useContext(CharContext);
    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-4">{characters[hero].name}</h1>
        </header>
    );
}

export default Header;