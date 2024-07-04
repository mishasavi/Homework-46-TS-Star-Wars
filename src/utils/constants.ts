import {characters} from "./characters.ts";

export const BASE_URL = "https://sw-info-api.herokuapp.com";
export const period_month = 30 * 24 * 60 * 60 * 1000;

export const defaultHero = Object.keys(characters)[0];

export interface NavItem {
    name: string;
    route: string;
}

export const navItems : NavItem[] = [
    {
        name:"Home",
        route:"home"
    },
    {
        name:"About Me",
        route:"aboutMe"
    },
    {
        name:"Star Wars",
        route:"starWars"
    },
    {
        name:"Contact",
        route:"contact"
    }
];