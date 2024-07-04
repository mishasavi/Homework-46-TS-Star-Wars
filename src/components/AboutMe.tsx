import {useEffect, useState} from 'react';
import styles from "../css/aboutMe.module.css";
import {BASE_URL, navItems, period_month} from "../utils/constants.ts";
import {characters} from "../utils/characters.ts";
import {withHeroId} from "../hoc/withHeroId.tsx";
import {useParams} from "react-router-dom";

const AboutMe = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hero, setHero] = useState({
        name:"",
        eye_color:"",
        gender:"",
        image: "",
        birth_year:""
    });
    const {heroId} = useParams();

    useEffect(() => {

        const character : {payload : {name: string, eye_color: string, gender: string, birth_year: string, image: string}, time: number}
            = JSON.parse(localStorage.getItem(heroId!)!);
        if (character && (Date.now() - character.time) < period_month) {
            setIsLoading(false);
            setHero(character.payload);
        } else {

            fetch(characters[heroId!].url)
                .then(response => response.json())
                .then(data => {
                    const heroResponse = {
                        name: data.name,
                        eye_color: data.eye_color,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        image: `${BASE_URL}/${data.image}`
                    };
                    setIsLoading(false);
                    setHero(heroResponse);
                    const info = {
                        payload: heroResponse,
                        time: Date.now()
                    }
                    // @ts-ignore
                    localStorage.setItem(heroId, JSON.stringify(info));
                })
        }
        return () => console.log('AboutMe unmounted');
    }, [heroId]);

    if (isLoading) {
        return (
            <div className="spinner-border text-success"></div>
        )
    } else {
        return (
            <div className={styles.hero_box}>
                <h1>Name:{hero.name}</h1>
                <h2>eye_color: {hero.eye_color}</h2>
                <h3>gender: {hero.gender}</h3>
                <h4>birth_year: {hero.birth_year}</h4>
                <img className={styles.img_hero} src={hero.image} alt={'hero'}/>
            </div>
        );
    }
}

export default withHeroId(navItems[1].route)(AboutMe);