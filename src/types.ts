export interface IAction {
    type: string,
    payload?: any,
    meta?: any // info accessorie
}

export interface IPost{
    id:number;
    title:string;
    subtitle:string;
    submitterImg:string;
    leftImg: string;
    counter:number;
    submitterName:string
    //subtitle:string | null;    !==  subtitle?:string;
}


//declare module "*.png"  ??????