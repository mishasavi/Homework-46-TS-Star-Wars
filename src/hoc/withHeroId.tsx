import {useNavigate, useParams} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import {CharContext} from "../utils/useContext.ts";
import {characters} from "../utils/characters.ts";
import {defaultHero} from "../utils/constants.ts";

export const withHeroId = (route:string) => (WrappedComponent:React.FC) => (props:any) => {
    const {heroId} = useParams();
    const {setHero} = useContext(CharContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!Object.keys(characters).includes(heroId!)) {
            navigate(`/${route}/${defaultHero}`);
        } else {
            setHero(heroId!);
        }
    }, [heroId]);

    return (
        Object.keys(characters).includes(heroId!) ?
            <WrappedComponent {...props}/> :
            <></>
    )
}