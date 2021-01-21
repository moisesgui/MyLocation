const _username = 'abc';
const _password = '12345678';

login(username, password){
    if(username === _username && password === _password){
        return 'ok';
    }

    return 'dados inválidos'
}

register(name, email, password, confirmPassword){
    return 'usuário criado'
}