// login from user login of dummyjson.com

export const login = async (username: string, password: string, expireIn? : number) => {
    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: username,
            password : password,
            expiresInMins : expireIn
        })
    });
    const data = await res.json();
    return data;
};

// logout : destroy the session in the local storage

export const logout = async () => {
    localStorage.removeItem('user');
    return;
};