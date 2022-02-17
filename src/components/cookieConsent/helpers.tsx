export const COOKIE_EXPIRES_DAYS = 180;
export const COOKIE_NAME = 'cookie_consent';

export function getCookie(name: string) {
  const cookies = document.cookie?.split('; ');
  if (cookies) {
    const cookie = cookies.find((cookie) => cookie.startsWith(`${name}=`));
    if (cookie) {
      return cookie.split('=')[1];
    }
  }
  return null;
}

export function setCookie(name: string, value: string, expires: number = COOKIE_EXPIRES_DAYS) {
  const expiresDate = new Date(Date.now() + expires * 864e5);
  document.cookie = `${name}=${value}; expires=${expiresDate.toUTCString()}; path=/; SameSite=lax${
    location.protocol === 'https:' ? '; Secure' : ''
  }`;
}

export function removeCookie(name: string) {
  setCookie(name, '', -1);
}

export function createDialogWrapper(wrapperId: string) {
  const wrapperElement = document.createElement('div');

  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
}
