import { DEFAULT, URGENT } from './notificationActionTypes';

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_NOTIFICATION_FILTER,
    filter,
  };
};