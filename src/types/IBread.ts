export interface IBreadCreate {
    name: string
}


export interface IBreadContent {
    id_bread: string,
    name: string
}

export interface IBread {
    success: boolean,
    message: string,
    content: IBreadContent[]
}

export interface IBreadParams {
    id: number
}