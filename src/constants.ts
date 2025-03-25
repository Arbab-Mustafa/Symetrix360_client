export enum Mode {
  DEV = "development",
  PROD = "production",
}

interface WithEnvMode {
  readonly env: {
    readonly MODE: Mode;
  };
}

export const mode = (import.meta as unknown as WithEnvMode).env.MODE;

declare const __APP_ID__: string;
export const APP_ID = __APP_ID__;

declare const __API_PATH__: string;
export const API_PATH = __API_PATH__;

declare const __API_URL__: string;
export const API_URL = __API_URL__;

declare const __WS_API_URL__: string;
export const WS_API_URL = __WS_API_URL__;

declare const __APP_BASE_PATH__: string;
export const APP_BASE_PATH = __APP_BASE_PATH__;

declare const __APP_TITLE__: string;
export const APP_TITLE = __APP_TITLE__;

declare const __APP_FAVICON_LIGHT__: string;
export const APP_FAVICON_LIGHT = __APP_FAVICON_LIGHT__;

declare const __APP_FAVICON_DARK__: string;
export const APP_FAVICON_DARK = __APP_FAVICON_DARK__;

declare const __APP_DEPLOY_USERNAME__: string;
export const APP_DEPLOY_USERNAME = __APP_DEPLOY_USERNAME__;

declare const __APP_DEPLOY_APPNAME__: string;
export const APP_DEPLOY_APPNAME = __APP_DEPLOY_APPNAME__;

declare const __APP_DEPLOY_CUSTOM_DOMAIN__: string;
export const APP_DEPLOY_CUSTOM_DOMAIN = __APP_DEPLOY_CUSTOM_DOMAIN__;
