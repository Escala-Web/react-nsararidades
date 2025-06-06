import { api } from "../../lib";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import {
	IOnboardingAddress,
	IOnboardingData,
	IOnboardingEmail,
	IOnboardingPhone,
	IOnboardingUpdate,
} from "../../types/IOnboarding";
import { IGoogle, IStoreLayout } from "../../types/IStore";

export const storeFindAllApi = async () => {
	const { data } = await api.get("/store/status");
	return data;
};

export const storeFindOneApi = async () => {
	const { data } = await api.get("/store");
	return data;
};

export const storeUpdateApi = async (data: IOnboardingUpdate) => {
	const { data: store } = await api.put("/store", data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return store;
};

export const storeCreatedApi = async (data: IOnboardingData) => {
	const { data: store } = await api.post("/store/create", data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return store;
};

export const storeOnboardingApi = async () => {
	const { data } = await api.post("/store/onboarding", "", {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return data;
};

export const storeGoogleApi = async (data: IGoogle) => {
	const { data: storeGoogle } = await api.put("/store", data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return storeGoogle;
};

export const storeLayoutApi = async (data: IStoreLayout) => {
	const { data: layout } = await api.put(`/store/theme/`, data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return layout;
};

export const storeLoginStripeApi = async () => {
	const { data: loginStripe } = await api.get(`/store/login`, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return loginStripe;
};


// Crud de telefone para admin

export const storePhoneCreatedApi = async (data: IOnboardingPhone) => {
	const { data: phone } = await api.post("/store/phone", data, { requiresAuth: true } as CustomAxiosRequestConfig);
	return phone;
}

export const storePhoneDeletedApi = async (id: string | number) => {
	const { data: phone } = await api.delete("/store/phone/"+id, { requiresAuth: true } as CustomAxiosRequestConfig);
	return phone;
}


export const storePhoneUpdatedApi = async (id: string | number, data: IOnboardingPhone) => {
	const { data: phone } = await api.put("/store/phone/"+id, data, { requiresAuth: true } as CustomAxiosRequestConfig);
	return phone;
}

// Fim do Phone Crud admin


// Crud de Email para admin

export const storeEmailUpdateApi = async (data: IOnboardingEmail, id) => {
	const { data: email } = await api.put(`/store/email/${id}`, data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return email;
};

export const storeEmailCreatedApi = async (data: IOnboardingEmail) => {
	const { data: email } = await api.post(`/store/email`, data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return email;
};

export const storeEmailDeletedApi = async (id: string | number) => {
	const { data: email } = await api.delete(`/store/email/${id}`, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return email;
};

// Fim do Email Crud admin


// Crud de Address para admin

export const storeAddressUpdateApi = async (data: IOnboardingAddress, id) => {
	const { data: address } = await api.put(`/store/address/${id}`, data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return address;
};

export const storeAddressCreatedApi = async (data: IOnboardingAddress) => {
	const { data: address } = await api.post(`/store/address/`, data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return address;
};

export const storeAddressDeletedApi = async (id: string | number) => {
	const { data: address } = await api.delete(`/store/address/${id}`, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return address;
};

// Fim do Address Crud admin


// Crud de Sociais para admin

export const storeSociaisUpdateApi = async (id, data) => {
	const { data: address } = await api.put(`/store/social/${id}`, data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return address;
};

export const storeSociaisCreatedApi = async (data: IOnboardingAddress) => {
	const { data: address } = await api.post(`/store/social/`, data, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return address;
};

export const storeSocialDeletedApi = async (id: string | number) => {
	const { data: address } = await api.delete(`/store/social/${id}`, {
		requiresAuth: true,
	} as CustomAxiosRequestConfig);
	return address;
};

// Fim do Sociais Crud admin