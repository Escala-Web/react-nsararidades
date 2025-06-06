export interface IAddressCreate {
    public_area: string,
	number: string,
	complement: string | null,
	district: string,
	city: string,
	state: string,
	zip_code: number
}


export interface IAddressContent {
    id_address: number,
    public_area: string,
	number: string,
	complement: string | null,
	district: string,
	city: string,
	state: string,
	zip_code: number,
	is_default?: number
}

export interface IAddress {
    success: boolean,
    message: string,
    content: IAddressContent[]
}