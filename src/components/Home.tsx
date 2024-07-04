import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import Story from "./Story.tsx";
import {withHeroId} from "../hoc/withHeroId.tsx";
import {navItems} from "../utils/constants.ts";

const Home = () => {

    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <Story/>
        </main>
    );
}

export default withHeroId(navItems[0].route)(Home);