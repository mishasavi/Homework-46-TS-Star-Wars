import {useContext} from 'react';
import {CharContext} from "../utils/useContext.ts";
import {characters} from "../utils/characters.ts";

const Hero = () => {
    const {hero} = useContext(CharContext);
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={characters[hero].img} alt="hero"/>
        </section>
    );
}

export default Hero;