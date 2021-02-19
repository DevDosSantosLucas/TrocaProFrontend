export  function signIn(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'dbsajkdnuiajbkcjkcjkacbkjuhdjkhfkdnakl',
                user:{
                    name: 'Lucas',
                    email: 'ls@email.com'
                },
            });
        },3000);
    });
}