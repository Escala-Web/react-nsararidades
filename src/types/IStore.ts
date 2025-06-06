export interface IStoreStatus {
    success: boolean,
    is_locked: boolean,
    reasons: []
}

export interface IStoreLoginResponse {
  success: boolean,
  message: string,
  redirect_url: string
}


export type IAssetType = "LOGO" | "LOGO_FOOTER" | "FAVICON";

export interface IStoreAsset {
  type: IAssetType;
  path: string;
}

export interface IStorePhone {
  type: "WHATSAPP" | string;
  number: string;
  is_default: 0 | 1;
  is_show: 0 | 1;
}

export interface IStoreEmail {
  email: string;
  is_default: 0 | 1;
  is_show: 0 | 1;
}

export interface IStoreContent {
  LOGO: IStoreAsset;
  LOGO_FOOTER: IStoreAsset;
  FAVICON: IStoreAsset;
  NAME_STORE: string;
  THEME: string;
  LAYOUT: string;
  ID_ANALITYCS: string;
  ID_SEARCH_CONSOLE: string;
  ID_TAG_MANAGER: string;
  ADDRESSES: any[]; // Pode ser tipado se souber a estrutura
  PHONES: IStorePhone[];
  EMAILS: IStoreEmail[];
  SOCIAIS: string;
}

export interface IStoreResponse {
  success: boolean;
  message: string;
  content: IStoreContent;
}



export interface IGoogle {
  id_analitycs?: string,
  id_search_console?: string,
  id_tag_manager?: string
}

export interface IStoreLayout {
  layout: string,
  theme: string
}