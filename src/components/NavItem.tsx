import {useContext} from 'react';
import {Link} from "react-router-dom";
import {CharContext} from "../utils/useContext.ts";
import { NavItem as NavItemType } from "../utils/constants.ts";

interface Props {
    item: NavItemType;
}

const NavItem = ({item} : Props) => {
    const {hero} = useContext(CharContext);
    return (
        <li>
            <Link className={'nav-item btn btn-danger mx-1'}
                to={`${item.route}/${hero}`}>{item.name}</Link>
        </li>
    );
};

export default NavItem;