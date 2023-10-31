/// <reference types="vite/client" />
interface ImportMeta {
  env: {
    REACT_APP_FRONTEND_BASE_URL?: string;
    REACT_APP_KAKAO_JS_SDK_KEY?: string;
    VITE_KAKAO_JS_SDK_KEY?: string;
    VITE_KAKAO_CLIENT_ID?: string;
  };
}
