export interface ICreateLogo {
    id_media: number,
    type: string
}

export interface Ilogo {
    type: string,
    path: string
}

export interface ILogoResponse {
    sucess: boolean,
    message: string,
    content: Ilogo[]
} 


export interface ILogoResponseJson {
    FAVICON: Ilogo,
    LOGO: Ilogo,
    LOGO_FOOTER: Ilogo,
    NAME_STORE: string,
    THEME: string,
    LAYOUT: string
}