import { USER_CONTANTS } from "./user-constants";

export const USER_ERRORS = {
    id: {
        notProvided: 'No se ha adjuntado un id para el usuario',
    },
    email: {
        invalid: 'Email inválido',
        notProvided: 'No se ha adjuntado un email para el usuario',
        exists: 'Email ya existente'
    },
    name: {
        notProvided: 'No se ha adjuntado un nombre para el usuario',
        minLength: `Debe contener al menos ${USER_CONTANTS.name.minLength} carácteres`,
        maxLength: `Debe contener como máximo ${USER_CONTANTS.name.maxLength} carácteres`,
    },
    lastname: {
        notProvided: 'No se ha adjuntado un apellido para el usuario',
        minLength: `Debe contener al menos ${USER_CONTANTS.lastname.minLength} carácteres`,
        maxLength: `Debe contener como máximo ${USER_CONTANTS.lastname.maxLength} carácteres`,
    },
    dni: {
      notProvided: 'No se ha adjuntado un dni para el usuario',
      invalid: 'DNI inválido',
    },
    phone: {
      notProvided: 'No se ha adjuntado un número de teléfono para el usuario',
      invalid: 'Número de teléfono inválido',
    },
    country: {
      notProvided: 'No se ha adjuntado un país para el usuario',
    },
    cp: {
      notProvided: 'No se ha adjuntado un código postal para el usuario',
      invalid: 'Código postal para España inválido',
    },
    location: {
      notProvided: 'No se ha adjuntado una localidad para el usuario',
    },
    nickname: {
      notProvided: 'No se ha adjuntado un nickname para el usuario',
    },
    password: {
        notProvided: 'No se ha adjuntado una contraseña para el usuario',
        minLength: `Debe contener al menos ${USER_CONTANTS.password.minLength} carácteres`,
        notSame: 'Las contraseñas no son iguales',
    }
}
