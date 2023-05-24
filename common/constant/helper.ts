import _isString from 'lodash/isString';
import { TFunction } from 'next-i18next';

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export function passwordStrength(pw: string): number {
  return (
    (/.{8,}/.test(pw) ? 1 : 0) /* at least 8 characters */ *
    ((/[a-z]/.test(pw) ? 1 : 0) /* a lower letter */ +
      (/[A-Z]/.test(pw) ? 1 : 0) /* a upper letter */ +
      (/\d/.test(pw) ? 1 : 0) /* a digit */ +
      (/[^A-Za-z0-9]/.test(pw) ? 1 : 0)) /* a special character */
  );
}

export const EXTERNAL_LINK_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)+[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

export function timeSince(seconds: number, t: TFunction) {
  let interval = seconds / 31536000;

  if (interval > 1) {
    return t('time.year', { value: Math.floor(interval), many: Math.floor(interval) > 1 ? 's' : '' });
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return t('time.month', { value: Math.floor(interval), many: Math.floor(interval) > 1 ? 's' : '' });
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return t('time.day', { value: Math.floor(interval), many: Math.floor(interval) > 1 ? 's' : '' });
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return t('time.hour', { value: Math.floor(interval), many: Math.floor(interval) > 1 ? 's' : '' });
  }
  interval = seconds / 60;
  if (interval > 1) {
    return t('time.minute', { value: Math.floor(interval), many: Math.floor(interval) > 1 ? 's' : '' });
  }
  return t('time.second', { value: Math.floor(seconds) });
}

export const modifyAmountByType = (qty: number, total: number, action: string) => {
  const isMin = qty === 0 || qty <= 0;
  const isMax = qty > total;
  let result = 0;
  if (action === 'prev') {
    result = !isMin ? qty - 1 : 0;
  }
  if (action === 'next') {
    result = !isMax ? qty + 1 : total;
  }

  return result;
};
