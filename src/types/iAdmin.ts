export interface Login {
    email: string,
    password: string
}

export interface LoginResponseAdmin {
    message: string,
    rule: string,
    status: boolean,
    success: boolean,
    token: string,
    user: string,
    firstAccess?: boolean
}

export interface ForgetPasswordType {
    email: string
}

export interface ResetPasswordType {
    token: string,
    password: string
}

export interface ActiveAccountType {
    token: string
}






export interface AdminResponseType {
    success: string,
    message: string
}