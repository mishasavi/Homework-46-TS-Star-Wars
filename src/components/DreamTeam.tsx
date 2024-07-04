import {useContext} from 'react';
import Friend from "./Friend.tsx";
import {characters} from "../utils/characters.ts";
import {CharContext} from "../utils/useContext.ts";

const DreamTeam = () => {
    const {hero} = useContext(CharContext);
    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {Object.keys(characters).filter(f => f!==hero)
                .map((f, i) => <Friend key={i} friend={f} pos={i + 1}/>)}
        </section>
    );
}

export default DreamTeam;