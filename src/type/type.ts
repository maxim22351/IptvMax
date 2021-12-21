

export interface IListTV{
    group: IGroup,
    name: string,
    url: string,
    catchup: Icatchup;
    tvg: Itvg;
}

export interface IGroup{
    title: string
}
export interface Icatchup{
    days: string;
    source: string;
    type: string;
}
export  interface Itvg {
    country: string;
    id: string;
    language: string;
    logo: string;
    name: string;
    rec: string;
    url: string;
}


export interface IItems{
    items: IListTV
}