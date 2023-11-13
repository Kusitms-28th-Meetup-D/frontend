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

export interface LoginResult {
  isSuccess: boolean;
  statusCode: number;
  error?: any;
}
