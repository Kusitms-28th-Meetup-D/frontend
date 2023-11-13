export interface LoginInfo {
  isLogin: boolean;
  data?: {
    userId: number;
    refreshToken: string;
    accessToken: string;
    profileImage: string;
    name: string;
  };
}
export interface ResponseLogin {
  status: number;
  message: string;
  data: {
    userId: number;
    redirectUrl: string;
    refreshToken: string;
    accessToken: string;
    profileImage: string;
    name: string;
  };
}

export interface LoginResult {
  isSuccess: boolean;
  statusCode: number;
  responseData?: ResponseLogin;
  error?: any;
}
