/** this would wrap all the api endpoints and base urls */
export const baseUrl = import.meta.env.VITE_BASE_URL;

export const url = {
  login: "/auth/login",
  register: "/auth/register",
  socialRegister: "/auth/social-register",
  socialLogin: "/auth/social-login",
  logout: "/auth/logout",
  verifyUserEmail: "/auth/verify-email",
};
