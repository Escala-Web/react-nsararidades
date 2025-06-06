export interface IVariationCreate {
    name: string
}

export interface IVariationContent {
    id_variant_attribute: number,
    name: string
}

export interface IVariation {
    success: boolean,
    message: string,
    content: IVariationContent[]
}

export interface IVariationValue {
    id_variant_attribute: number,
    value: string,
    viewer: string
}