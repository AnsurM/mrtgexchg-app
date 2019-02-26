// use localStorage to store the authority info, which might be sent from server in actual project.
let authorityState = null;

export function getAuthorityOrig(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];

  // const authorityString =
  // typeof str === 'undefined' ? localStorage.getItem('antd-pro-authority') : str;

  const authorityString =
    str === 'admin' || str === 'user' ? localStorage.getItem('antd-pro-authority') : str;

  authority = authorityState;

  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority;
  //  return authority || ['admin'];
}

export function getAuthority(str) {
  let authority;
  try {
    authority = JSON.parse(authorityState);
  } catch (e) {
    authority = authorityState;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority;
  //  return authority || ['admin'];
}

export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  authorityState = typeof authority === 'string' ? [authority] : 'null';
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}
