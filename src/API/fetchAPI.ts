import { withErrorHandler } from 'HOC';
import { authAPI } from './auth-api';
import { userAPI } from './user-api';
import { chatsAPI } from './chats-api';

export const signinWithErrorHandler = withErrorHandler(authAPI.signin);
export const signupWithErrorHandler = withErrorHandler(authAPI.signup);
export const logoutWithErrorHandler = withErrorHandler(authAPI.logout);
export const getUserWithErrorHandler = withErrorHandler(authAPI.getUser);

export const updateProfileWithErrorHandler = withErrorHandler(userAPI.updateProfile);
export const updateAvatarWithErrorHandler = withErrorHandler(userAPI.updateAvatar);
export const updatePasswordWithErrorHandler = withErrorHandler(userAPI.updatePassword);
export const searchUsersWithErrorHandler = withErrorHandler(userAPI.searchUsers);

export const getChatsWithErrorHandler = withErrorHandler(chatsAPI.getChats);
export const createChatWithErrorHandler = withErrorHandler(chatsAPI.createChat);
export const deleteChatWithErrorHandler = withErrorHandler(chatsAPI.deleteChat);
export const addUsersToChatWithErrorHandler = withErrorHandler(chatsAPI.addUsersToChat);
export const deleteUsersToChatWithErrorHandler = withErrorHandler(chatsAPI.deleteUsersToChat);
