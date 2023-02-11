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
export const getUserByIdWithErrorHandler = withErrorHandler(userAPI.getUserById);

export const getChatsWithErrorHandler = withErrorHandler(chatsAPI.getChats);
export const getChatsByTitleWithErrorHandler = withErrorHandler(chatsAPI.getChatsByTitle);
export const getTokenWithErrorHandler = withErrorHandler(chatsAPI.getToken);
export const createChatWithErrorHandler = withErrorHandler(chatsAPI.createChat);
export const deleteChatWithErrorHandler = withErrorHandler(chatsAPI.deleteChat);
export const addUserToChatWithErrorHandler = withErrorHandler(chatsAPI.addUserToChat);
export const deleteUsersWithErrorHandler = withErrorHandler(chatsAPI.deleteUsers);
export const getChatUsersWithErrorHandler = withErrorHandler(chatsAPI.getChatUsers);
