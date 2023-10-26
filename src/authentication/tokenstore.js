const store_token = (value) => {
    const { access, refresh } = value;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
}

const gettoken = () => {
    let access = localStorage.getItem('access_token');
    let refresh = localStorage.getItem('refresh_token');
    return { access, refresh }
}

const removetoken = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
}

export { store_token, gettoken, removetoken }