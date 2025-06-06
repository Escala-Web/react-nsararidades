export interface IOnboardingData {
  name: string;
  theme: string;
  layout: string;
  id_analitycs: string;
  id_search_console: string;
  id_tag_manager: string;
  token_shipping: string | null;

  addresses: IOnboardingAddress[];
  phones: IOnboardingPhone[];
  emails: IOnboardingEmail[];
  sociais: IOnboardingSocial[] | string; // dependendo da resposta da API, pode ser string vazia ou array
  identity: IOnboardingIdentity[];
}

export interface IOnboardingAddress {
  id?: string,
  public_area: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  zip_code: string;
  is_default: boolean;
  is_show: boolean;
}

export interface IOnboardingSocial {
  type: 'INSTAGRAN' | 'FACEBOOK' | 'WHATSAPP' | 'LINKEDIN',
  link: string
}

export interface IOnboardingPhone {
  id_phone_store?: number,
  type: 'WHATSAPP' | 'CELLPHONE' | 'PHONE' | 'COMMERCIAL' | string;
  number: string;
  is_default: boolean;
  is_show: boolean;
}

export interface IOnboardingEmail {
  id?: string,
  email: string;
  is_default: boolean;
  is_show: boolean;
}

export interface IOnboardingSocial {
  name: string;
  link: string;
  is_show: boolean;
}

export interface IOnboardingIdentity {
  type: 'LOGO' | 'LOGO_FOOTER' | 'FAVICON' | string;
  id_media: number;
}



export interface IOnboardingUpdate {
  name?: string,
  token_shipping?: string
}



