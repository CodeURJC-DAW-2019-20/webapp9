# Documentación API REST

Nuestra API REST funciona con autorización "Basic Auth". Para poder realizar operaciones de usuario y administrador se deberá indicar en postman las correspondientes credenciales.
- Credenciales de administrador: admin@gmail.com Contraseña: 123
- Credenciales de usuario: willy@gmail.com Contraseña: 123

En la cabecera se deberá especificar un "content-type" "application/json".

## LogIn (Administrador) (Usuario)
* #### URL:
    https://localhost:8443/api/logIn
* #### Operaciones soportadas:
    GET.
* #### Body petición:
    Vacío.
* #### Body respuesta:
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

* #### Código de error:
    Código: 401 UNAUTHORIZED

## LogOut (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/logOut
* #### Operaciones soportadas
    GET
* #### Body petición
    Vacío
* #### Body respuesta
    True
* #### Código de error
    401 UNAUTHORIZED

## Devolver un usuario (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/user/{id}
* #### Operaciones soportadas
    GET
* #### Body petición
    Vacío
* #### Body respuesta
    ```
    {
    "iduser": 1,
    "name": "Admin",
    "username": "Admin",
    "email": "admin@gmail.com",
    "password": "123",
    "img": null,
    "rol": {
        "idRol": 1,
        "rolDes": "ADMIN"
    }
}
* #### Código de error:
    400 BAD_REQUEST

## Crear nuevo usuario (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/user
* #### Operaciones soportadas
    POST
* #### Body petición
    ```
    {
    "name": "Noveau",
    "username": "Noveau",
    "email": "noveaun@gmail.com",
    "password": "123",
    "rol": {
        "idRol": 2,
        "rolDes": "USER"
    }
}

* #### Body respuesta
    201 CREATED (User successfully created)
* #### Código de error
    409 CONFLICT (Failed to create user)

## Actualizar usuario (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/user/{id}
* #### Operaciones soportadas
    PUT
* #### Body petición
    ```
    {
	"user": {
	 },
	 "player": {
		"description": "I like football and flying"
	 }
    }
    
    Este body se compone de dos objetos, el primero es el objeto "user", en el cual deberemos especificar que campos de este deseamos actualizar. Los posibles campos son: "name", "username","email" y "password".
    
    El segundo objeto es un "player", con el que podremos actualizar el campo "description".
    
* #### Body reespuesta
    200 OK (User was succesfully updated)
* #### Código de error
    404 NOT_FOUND (The user wasnt updated)

## Actualizar la imagen del usuario (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/user/{id}/image
* #### Operaciones soportadas
    POST
* #### Body petición
    El formato del body debe de ser "form-data", se debe crear una key llamada image, especificando que se trata de un "file" y en value sleccionar la imagen que se desea utilizar.
* #### Body respuesta
    201 CREATED
* #### Código de error
    409 CONFLICT (Image couldn't be uploaded)
    
## Devolver la imagen del usuario (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/user/{id}/image
* #### Operaciones soportadas
    GET
* #### Body petición
    Vacío
* #### Body respuesta
    La imagen del usuario.
* #### Código de error
    404 NOT_FOUND (Image not found)
    
## Devolver los torneos (Administrador) (Usuario)
* #### URL
     https://localhost:8443/api/tournaments
* #### Operaciones soportadas
    GET
* #### Body petición
    Vacío
* #### Body respuesta
    ```
    [
    {
        "idTournament": 1,
        "numTeams": 8,
        "name": "Best Tournament",
        "description": "Here play the best",
        "img": null,
        "latitude": 13.0,
        "longitude": 2.0
    },
    {
        "idTournament": 2,
        "numTeams": 4,
        "name": "Tournament 2",
        "description": "The Second",
        "img": null,
        "latitude": 0.0,
        "longitude": 0.0
    },
                ...

## Crear nuevo torneo (Administrador)
* #### URL
     https://localhost:8443/api/tournaments    
* #### Operaciones soportadas
    POST
* #### Body petición
    ```
    {
        "numTeams": 16,
        "name": "DEMO",
        "description": "Demostration tournament",
        "img": null,
        "latitude": 5,
        "longitude": 5
    }
* #### Body respuesta
    201 CREATED (Tournament was succesfully created)
* #### Código de error
    409 CONFLICT (Tournament wasnt created)
    
## Unirse a un torneo (Usuario)
* #### URL
    https://localhost:8443/api/tournaments/{id}/teams
* #### Operaciones soportadas
    POST
* #### Body petición
    Solo el id del equipo que quieras que se una al torneo, es decir, el id de tu equipo.
* #### Body respuesta
    200 OK (Your team joined the tournament)
* #### Código de error
    500 INTERNAL_SERVER_ERROR (Error)
    
## Devolver los partidos de un torneo (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/tournaments/{idTournament}/matches
* #### Operaciones soportadas
    GET
* #### Body petición
    Vacío
* #### Body respuesta
    ```
    [
    {
        "team_Id_Team": 14,
        "game_Id_Game": 9,
        "result": 0,
        "winner": false,
        "round": "1",
        "date": "Sun Mar 08 19:36:47 CET 2020",
        "teamIdTeam": 14,
        "gameIdGame": 9
    }  
            ...
* #### Código de error
    404 NOT_FOUND

## Añadir una imagen a un torneo (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/tournaments/{id}/image    
* #### Operaciones soportadas
    POST
* #### Body petición
        El formato del body debe de ser "form-data", se debe crear una key llamada image, especificando que se trata de un "file" y en value sleccionar la imagen que se desea utilizar.
* #### Body respuesta
    201 CREATED    
* #### Código de error
    409 CONFLICT (Image couldn't be uploaded)

## Devover la imagen de un torneo (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/tournaments/{id}/image
* #### Operaciones soportadas
    GET
* #### Body petición
    Vacío
* #### Body respuesta
    La imagen del torneo
* #### Código de error
    404 NOT_FOUND (Image not found)

## Actualizar el resultado de un partido (Administrador)
* #### URL
    https://localhost:8443/api/teamsOnGame/{id1}+{id2}+{idGame}
    Donde "id1" es el id del equipo 1, "id2" es el id del equipo 2 y "idGame" es el id del partido donde están esos equipos asociados.
* #### Operaciones soportadas
    PUT
* #### Body petición
    ```
    [
	{
        "result": 2,
        "winner": false
    },
    {
        "result": 5,
        "winner": true
    }
]
Este body se compone de un aray de dos posiciones. La primera posición hace referencia al primer equipo y la segunda posición al segundo equipo. "Result" indica la puntuación de cada equipo.
* #### Body respuesta
    200 OK (Teams results were succesfully updated)
* #### Código de error
    404 NOT_FOUND (The team results werent updated)
    
## Devolver "LeaderBoard" (Administrador) (Usuario)
Esta petición es utilizada para la funcionalidad "load more" de la página web.
* #### URL
    https://localhost:8443/api/leaderBoardLoaded
* #### Operaciones soportadas
    GET
* #### Body petición
    Vacío
* #### Body respuesta
    Listado de los equipos que deben de aparecer de manera dinámica en la página web
    
## Devolver listado de equipos (Administrador) (Usuario)
* #### URL
    https://localhost:8443/api/teams
* #### Operaciones soportadas
    GET
* #### Body petición
    Vacío
* #### Body respuesta
    Listado de todos los equipos
    
## Crear nuevo equipo (Administrador)
* #### URL
    https://localhost:8443/api/teams
* #### Operaciones soportadas
    POST
* #### Body petición
    ```
    {
	"name": "DEMO Team"
    }
* #### Body respuesta
    201 CREATED (Team was succesfully created)
* #### Código de error
    409 CONFLICT (Team wasnt created)

## Actualizar equipo (Administrador)
* #### URL
    https://localhost:8443/api/teams/{id}
* #### Operaciones soportadas
    PUT
* #### Body petición
    ```
    {
	"name": "The JS Scripters"
    }
* #### Body respuesta
    200 OK (Team was succesfully updated)
* #### Código de error
    404 NOT_FOUND (The team wasnt updated)

## Añadir un jugador a un equipo (Administrador)
* #### URL
    https://localhost:8443/api/player/{idPlayer}/team
* #### Operaciones soportadas
    PUT
* #### Body petición
    Únicamente el id del equipo donde deseemos añadir al juagador. Por ejemplo: 20
* #### Body respuesta
    200 OK (Team was succesfully updated)
* #### Código de error
    404 NOT_FOUND (Player or team not found)














