import {useState} from 'react';
import "./App.css";
import Header from "./components/Header.tsx";
import Switcher from "./components/Switcher.tsx";
import Footer from "./components/Footer.tsx";
import {defaultHero} from "./utils/constants.ts";
import {CharContext} from "./utils/useContext.ts";

const App = () => {
    const [hero, setHero] = useState(defaultHero);

    return (
        <div>
            <CharContext.Provider value={
                {hero, setHero}
            }>
                <Header/>
                <Switcher/>
            </CharContext.Provider>
            <Footer/>
        </div>
    );

}

export default App;