export const validaEmail = (stringEmail) => {
    const regexEmail = 
    new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return regexEmail.test((stringEmail));
}

export const validaEmpty = (stringEmpty) => {
    return (
        stringEmpty.length == 0
    )
}

export const validaPassword = (stringPassword) => {
    const regexPassword = 
    new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
    return regexPassword.test((stringPassword));
}