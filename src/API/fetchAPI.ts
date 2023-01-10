import { withErrorHandler } from 'HOC';
import { authAPI } from './auth-api';
import { userAPI } from './user-api';

export const signinWithErrorHandler = withErrorHandler(authAPI.signin);
export const signupWithErrorHandler = withErrorHandler(authAPI.signup);
export const logoutWithErrorHandler = withErrorHandler(authAPI.logout);
export const getUserWithErrorHandler = withErrorHandler(authAPI.getUser);

export const updateProfileWithErrorHandler = withErrorHandler(userAPI.updateProfile);
export const updateAvatarWithErrorHandler = withErrorHandler(userAPI.updateAvatar);
export const updatePasswordWithErrorHandler = withErrorHandler(userAPI.updatePassword);
export const searchUsersWithErrorHandler = withErrorHandler(userAPI.searchUsers);
