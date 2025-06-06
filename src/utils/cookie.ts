export function hasCookie(name: string): boolean {
  return document.cookie.split('; ').some((cookie) => cookie.startsWith(`${name}=`));
}

export function getCookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split('=')[1];
}

export function deleteCookie(name: string, path: string = '/') {
  document.cookie = `${name}=; Max-Age=0; path=${path}`;
}
