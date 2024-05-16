exports.signin = async function (body) {
    return new Promise((resolve, reject) => {
        if (body.username === 'admin' && body.password === 'admin') {
            resolve({ message: 'Signin success' });
        } else {
            reject({ message: 'Signin failed' });
        }
    });
}