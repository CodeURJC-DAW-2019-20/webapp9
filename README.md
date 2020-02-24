# eTorneos
Nuestra aplicación web será un sistema de torneos de videojuegos, donde los usuarios registrados podrán participar, ver partidas, unirse a un equipo, etc...

## Miembros
- Daniel Liszewski
- Jorge Carreras
- Lucía Romero
- Alejandro Gavilán

## Entidades
- Torneos
- Partidas
- Jugadores
- Equipos

### Juegos
Cada juego tendrá su propia página, donde aparece info del juego, links de interés y la lista de los torneos activos.

### Torneos
Cada torneo tiene una página asociada, donde aparece la bracket del torneo con los nombres de los jugadores o equipos que participan (se podrá acceder a sus páginas desde aquí), su elo y la info de cada partida.
Los datos del torneo como premios y numero de jugadores máximo serán editados por el admin.

### Partidas
Cada partida tiene información como por ejemplo los resultados (quizás más con el tiempo)

### Jugadores (usuarios registrados)
Cada jugador tiene una página de perfil (ahí aparece un gráfico del ratio de las partidas ganadas vs perdidas) con una foto de perfil, su elo en cada juego.

### Equipos
Cada equipo tiene una pagina asociada con los jugadores que la conforman (se puede acceder a ellos) y su elo (quizá más tarde se pueda añadir una imagen de equipo).

## Tipos de usuarios
Cada usuario tiene los permisos descritos y los mencionados en el anterior.

### Anónimo
- Acceder al índice
- Podrá registrarse

### Registrado
- Ver la información de los jugadores
- Ver la información de los torneos
- Participar en los torneos
- Cambiar la información y la foto de su perfil
- Unirse a un equipo

### Admin
- Crear torneos
- Eliminar torneos
- Cambiar la información de los torneos

## Tecnología usada
El usuario podrá usar Google para acceder a su cuenta (si tenemos tiempo también añadiremos la posibilidad de hacer publicaciones automáticas cuando entras en torneos o los resultados de una partida).

## Sistema de ELO (algoritmo)
Cada jugador tendrá una puntuación numérica asociada a cada juego que juegue (elo). Cada vez que juegue una partida contra algien, su puntuación variará en función de la diferencia de elo entre los dos jugadores y el resultado (mismo sistema que el ajedrez).

## Diagrama de navegación

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/navChart.png "NavChart")

Permisos de acceso:
- Negro: Anónimo.
- Rojo: Usuario registrado (jugador).
- Verde: Admin.

## Capturas de pantalla

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/create-bracket.jpg "Crear torneo")

En esta página el usuario podrá crear un nuevo torneo con su respectivo bracket, seleccionando el juego y el número de jugadores que participarán.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/mainpage.jpg "Página principal")

Página de inicio que contiene información sobre nuestra web junto a un botón que llevará al registro y los diferentes juegos sobre los que se realizarán torneos.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/player-profile.png "Perfil del jugador")

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/player-graph.png "Gráfico del jugador")

En la página del usuario podremos ver el nombre del usuario, un pequeño texto de presentación, fecha de nacimiento, juego favorito y equipo. Además, contendrá un gráfico que representara el porcentaje de partidas ganadas y partidas de ese usuario.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/register.png "Página de registro")

Página para registrar nuevos usuarios en la que se requerirá su nombre, email, nombre de usuario, y contraseña.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/rlmain.jpg "Página de juego")

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/rltournaments.jpg "Parte de selección de torneos")

Página que contiene información del juego al que se ha accedido y los torneos disponibles de dicho juego, junto a una descripción.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/sig-in.png "Inicio de sesión")

Página en la que el usuario iniciará sesión con su email y contraseña.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/team-creation.png "Creación de equipo")

En esta página el usuario podrá crear su equipo eligiendo el nombre, juego, participantes e icono.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/team-page.png "Página de equipo")

En esta página se podrá ver la información de un equipo, su nombre y los miembros que lo componen.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/tournamentbracket.png "Página de torneo")

Página en la que se puede observar en detalle un torneo en específico, con su nombre, las fechas y los participantes.

## Participación
### Daniel
- Página de leaderboard (AJAX)
- Organización de ficheros
- Creación de un equipo
- Trabajo en las funcionalidades del admin
### Alejandro
- Sistema de elo
- Resolución de conflictos entre ramas
- Implementación de la API de Google
- PieChart con MDB ()
### Jorge
- Login
- Registro
- Perfil
### Lucía
- Brackets
- Administración de partidas
-

### Commits
| Alejandro                                                                                                  | Daniel                                                                                                     | Jorge       | Lucía       |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-------------|-------------|
| [Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/07c38597615903dc5279c1117235e979b39f91fd) | [Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/dfd29fbbbf1ed0aebce075cc5dc33699633dd7dc) | [Commit1]() | [Commit1]() |
| [Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/a8370e596d8421e03c3db213c4cbf2a0f54e0864) | [Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/cfb3032fe3e93d7bf0f77752c531f47322cd2028) | [Commit2]() | [Commit2]() |
| [Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/207b45d58ba3ae19154a39cbf57f2745955eaf95) | [Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/36853db13c0557898687f75ffebb91fa07052c45) | [Commit3]() | [Commit3]() |
| [Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/1f2846131e54d8ca47e5848d0ec039180014c777) | [Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/b6dc3abe1eb8c4d1eba1496e6dffe39a1878a6e3) | [Commit4]() | [Commit4]() |
| [Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/d2fd9401a5e6b6cdbaf9decfc608bc660e697835) | [Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/30ab72f782cb90d1d2a2225dcb18de3443568d09) | [Commit5]() | [Commit5]() |