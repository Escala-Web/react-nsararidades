export interface IBannerCreate {
    id_media: number,
    is_mobile: boolean,
    is_default: boolean,
    name: string
}

export interface IBanner {
    id_banner: number,
    name: string,
    is_mobile: boolean,
    is_default: boolean,
    image_path: string
}

export interface IBannerData {
    message: string,
    success: boolean,
    content: IBanner[]
}