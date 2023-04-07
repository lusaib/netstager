import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type tenantInfoType = {
  isLogin: boolean;
  tenantId: number;
  regMobileNo: string;
  countryPhoneCode: string;
  countryCode: string;
};

interface LoginStoreProps {
  tenantInfo: tenantInfoType;
  changeTenantInfo: (data: tenantInfoType) => void;
}

export const useLoginStore = create<LoginStoreProps>()(
  devtools(
    persist(
      (set) => ({
        tenantInfo: {
          isLogin: false,
          tenantId: -1,
          regMobileNo: "",
          countryPhoneCode: "",
          countryCode: "",
        },
        changeTenantInfo: (data) => set((state) => ({ tenantInfo: data })),
      }),
      {
        name: "tenant_info_storage",
      }
    )
  )
);

type TokensTypes = {
  accessToken: string;
  refreshToken: string;
};

interface TokenStoreProps {
  token: TokensTypes;
  changeToken: (data: TokensTypes) => void;
  clearToken: () => void;
}

export const useTokenStore = create<TokenStoreProps>()(
  devtools(
    persist(
      (set) => ({
        token: {
          accessToken: "",
          refreshToken: "",
        },
        changeToken: (data) => set((state) => ({ token: data })),
        clearToken: () => set({ token: { accessToken: "", refreshToken: "" } }),
      }),
      {
        name: "token_store",
      }
    )
  )
);
