# eTorneos
Nuestra aplicación web será un sistema de torneos de videojuegos, donde los usuarios registrados podrán participar, ver partidas, unirse a un equipo, etc...

## Miembros
- Daniel Liszewski
- Jorge Carreras
- Lucía Romero
- Alejandro Gavilán

## Entidades
- Juegos
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
- Ver las páginas de los torneos
- Acceder a la info de las partidas
- Ver la información de los jugadores
- Podrá registrarse

### Registrado
- Participar en los torneos
- Cambiar la información y la foto de su perfil

### Admin
- Crear torneos
- Eliminar torneos
- Cambiar la información de los torneos

## Tecnología usada
El usuario podrá usar Facebook para acceder a su cuenta (si tenemos tiempo también añadiremos la posibilidad de hacer publicaciones automáticas cuando entras en torneos o los resultados de una partida).

## Sistema de ELO (algoritmo)
Cada jugador tendrá una puntuación numérica asociada a cada juego que juegue (elo). Cada vez que juegue una partida contra algien, su puntuación variará en función de la diferencia de elo entre los dos jugadores y el resultado (mismo sistema que el ajedrez).