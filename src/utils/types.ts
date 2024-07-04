export interface MainHero {
    hero:string;
    setHero:(hero:string)=>void;
}

export interface Characters {
    [key:string] : {
        name: string;
        img: string;
        url: string;
    }
}

export interface FriendCall {
    friend: number;
    pos: number;
}