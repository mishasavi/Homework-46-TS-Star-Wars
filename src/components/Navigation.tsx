import {navItems} from "../utils/constants.ts";
import NavItem from "./NavItem.tsx";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-1 ms-5">
            <ul className="nav">
                {navItems.map((item,index)=> <NavItem
                     key={index} item={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;