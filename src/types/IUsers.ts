export interface IRegisterUser {
    username: string;
    email: string;
    password: string;
    type: "NATURAL" | "LEGAL";
    person:
        | {
                cpf: string;
                dt_birth: string;
                gender: "H" | "M" | string;
          }
        | {
                cnpj: string;
                corporate_name: string;
                trade_name: string;
                state_registration: string;
          };
    address: {
        public_area: string;
        number: string;
        district: string;
        city: string;
        state: string;
        zip_code: string;
    };
    phone: {
        type: "WHATSAPP" | "CELULAR" | string;
        number: string;
    };
}


export interface ILogin {
    login: string,
    password: string
}

export interface ILoginResponse {
    success: boolean,
    message: string,
    status?: string,
    token?: string,
    name?: string,
    rule?: string,
    firstAccess?: boolean
}


export interface IActiveAccount {
    token: string
} 

export interface IForgetPasswordType {
    login: string
}

export interface IResetPassword {
    token: string,
    password: string
}


export interface IUserResponse {
	success: boolean;
	message: string;
	content: IUser[];
	pages: {
		limit: number;
		total: number;
	};
}

export interface IUser {
	username: string;
	email: string;
	created_at: string;
	status: 'ACTIVE' | 'INACTIVE';
	phones: string;
	addresses: string;
	person_type: 'Física' | 'Jurídica';
	dt_birth: string;
	gender: string;
}



export interface IUserUpdate {
    username: string,
    type: string,
    person: {
        cpf?: string,
        dt_birth?: string,
        gender?: string,
        cnpj?: string,
        corporate_name?: string,
        trade_name?: string,
        state_registration?: string
    },
    contact?: {
        id_phone?: number,
        type?: string,
        number?: string
    }

}
