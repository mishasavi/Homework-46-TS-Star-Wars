import React from "react";
import {MainHero} from "./types.ts";

export const CharContext = React.createContext<MainHero>({} as MainHero);