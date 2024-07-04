import Home from "./Home.js";
import {navItems} from "../utils/constants.ts";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contacts from "./Contacts.tsx";
import {Route, Routes} from "react-router-dom";

const Switcher = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={`${navItems[0].route}/:heroId`} element={<Home/>}/>
            <Route path={`${navItems[1].route}/:heroId`} element={<AboutMe/>}/>
            <Route path={`${navItems[2].route}/:heroId`} element={<StarWars/>}/>
            <Route path={`${navItems[3].route}/:heroId`} element={<Contacts/>}/>
        </Routes>
    )

}

export default Switcher;