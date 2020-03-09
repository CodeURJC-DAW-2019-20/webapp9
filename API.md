# Documentación API REST

Nuestra API REST funciona con autorización "Basic Auth". Para poder realizar operaciones de usuario y administrador se deberá indicar en postman las correspondientes credenciales.
- Credenciales de administrador: admin@gmail.com Contraseña: 123
- Credenciales de usuario: willy@gmail.com Contraseña: 123

En la cabecera se deberá especificar un "content-type" "application/json".

## LogIn
* ### URL:
https://localhost:8443/api/logIn
* ### Operaciones soportadas:
GET.
* ### Body petición:
Vacío.
* ### Body reespuesta:
```
  {
    "iduser": 2,
    "name": "Willy",
    "username": "Willy",
    "email": "willy@gmail.com",
    "password": "123",
    "img": null,
    "rol": {
        "idRol": 2,
        "rolDes": "Player"
    }
}
```

