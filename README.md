# eTorneos
Nuestra aplicación web será un sistema de torneos de Rocket League (videojuego), donde los usuarios registrados podrán participar, ver partidas, unirse a un equipo, etc...

## Miembros
- Daniel Liszewski - d.liszewski.2017@alumnos.urjc.es
- Jorge Carreras - j.carreras.2017@alumnos.urjc.es
- Lucía Romero - l.romerov.2017@alumnos.urjc.es
- Alejandro Gavilán - a.gavilanv.2017@alumnos.urjc.es

### Vídeo de funcoinamiento de la web
El vídeo se puede encontrar en el siguiente enlace:
[Vídeo](https://youtu.be/tvUrQJ3_AoA)

## Entidades
- Torneos
- Partidas
- Jugadores
- Equipos

### Torneos
Cada torneo tiene una página asociada, donde aparece la bracket del torneo con los nombres de los equipos que participan (se podrá acceder a sus páginas desde aquí), su elo y la info de cada partida.
Los datos del torneo como premios y numero de jugadores máximo serán editados por el admin.

### Partidas
Cada partida tiene información como por ejemplo los resultados. Estos resultados son actualizados por el admin.

### Jugadores (usuarios registrados)
Cada jugador tiene una página de perfil (ahí aparece un gráfico del ratio de las partidas ganadas vs perdidas) con una foto de perfil, su elo en cada juego.

### Equipos
Cada equipo tiene una pagina asociada con los jugadores que la conforman (se puede acceder a ellos) y su elo (quizá más tarde se pueda añadir una imagen de equipo).

## Tipos de usuarios
Cada usuario tiene los permisos descritos y los mencionados en el anterior.

### Anónimo
- Acceder al índice
- Podrá registrarse
- Podrá ver la página de torneos

### Registrado
- Ver la información de los jugadores
- Ver la información de los torneos
- Participar en los torneos
- Cambiar la información y la foto de su perfil

### Admin
- Crear torneos
- Eliminar torneos
- Cambiar la información de los torneos
- Crear equipos

## Tecnología usada
Hemos añadido que los torneos tengan una localización física la cual se puede ver utilizando Google Maps

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/rama-de-union/github/googleMaps.jpg "Google Maps API")

## Sistema de ELO (algoritmo)
Cada jugador tendrá una puntuación numérica asociada a cada juego que juegue (elo). Cada vez que juegue una partida contra algien, su puntuación variará en función de la diferencia de elo entre los dos jugadores y el resultado (mismo sistema que el ajedrez).

## Diagrama de navegación

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/rama-de-union/github/navChart.png "NavChart")

Permisos de acceso:
- Negro: Anónimo.
- Rojo: Usuario registrado.
- Verde: Admin.

## Diagrama entidad - relación

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/rama-de-union/github/DiagramaER.PNG "ER")

## Diagrama Clases
![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/rama-de-union/github/Diagrama.PNG)

## Capturas de pantalla


![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/rama-de-union/github/mainPage.jpg "Página principal")

Página de torneos que contiene los diferentes torneos en los que los usuarios podrán participar.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/player-profile.png "Perfil del jugador")

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/player-graph.png "Gráfico del jugador")

En la página del usuario podremos ver el nombre del usuario, un pequeño texto de presentación, fecha de nacimiento y equipo. Además, contendrá un gráfico que representara el porcentaje de partidas ganadas y partidas de ese usuario.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/register.png "Página de registro")

Página para registrar nuevos usuarios en la que se requerirá su nombre, email, nombre de usuario, y contraseña.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/rlmain.jpg "Página de juego")

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/rltournaments.jpg "Parte de selección de torneos")

Página que contiene información del juego al que se ha accedido y los torneos disponibles de dicho juego, junto a una descripción.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/sig-in.png "Inicio de sesión")

Página en la que el usuario iniciará sesión con su email y contraseña.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/master/github/team-creation.png "Creación de equipo")

En esta página el amin podrá crear un equipo eligiendo el nombre y participantes.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/rama-de-union/github/bracket.jpg "Página de torneo")

Página en la que se puede observar en detalle un torneo en específico, con su nombre, las fechas, los participantes y su ubicación.

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/rama-de-union/github/leaderboard.png "Leaderboard")

Página en la que aparecen los equipos registrados ordenados por su puntuación de elo.

## Participación
### Daniel
- Página de leaderboard AJAX
- Organización de ficheros
- Creación de un equipo
- Trabajo en las funcionalidades del admin
### Alejandro
- Sistema de elo
- Resolución de conflictos entre ramas
- Implementación de la API de Google
- PieChart con MDB
### Jorge
- Login
- Registro
- Perfil
- Editar Perfil
- Seguridad
### Lucía
- Brackets
- Administración de partidas
- Base de datos
- Página de torneos
- Añadir equipo a torneo

### Commits
| Alejandro                                                                                                  | Daniel                                                                                                     | Jorge                                                                                                      | Lucía                                                                                                      |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/07c38597615903dc5279c1117235e979b39f91fd) | [Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/dfd29fbbbf1ed0aebce075cc5dc33699633dd7dc) | [Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/edfde9cdc4e5c2da6dcf80e04d02163330e261c4) | [Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/e942a1f887f194484bb5966702cce29033ba87ef) |
| [Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/a8370e596d8421e03c3db213c4cbf2a0f54e0864) | [Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/cfb3032fe3e93d7bf0f77752c531f47322cd2028) | [Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/627436c70d6535de38e0cc0060b113f7aa176c7e) | [Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/7f5775c9470d353c8646c0be7527b4ff3a317d58) |
| [Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/207b45d58ba3ae19154a39cbf57f2745955eaf95) | [Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/36853db13c0557898687f75ffebb91fa07052c45) | [Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/fde70062c1a4cb5185281076e7726b31bd91d61a) | [Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/8b2109ec4f4f82df46979f96bae06fe91b813954) |
| [Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/1f2846131e54d8ca47e5848d0ec039180014c777) | [Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/b6dc3abe1eb8c4d1eba1496e6dffe39a1878a6e3) | [Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/2b745219a4e190edab2a827d438399dce610bfea) | [Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/68b1d6b044808676daab24a5605b8a14e9af2460) |
| [Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/d2fd9401a5e6b6cdbaf9decfc608bc660e697835) | [Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/30ab72f782cb90d1d2a2225dcb18de3443568d09) | [Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/237dbdb9a4ee63fb24fcfccff9160f370a69482e) | [Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/466878e2527490ef163a9e4b62793c237bc90ab4) |

### Archivos
| Alejandro               | Daniel                  | Jorge                           | Lucía                   |
|-------------------------|-------------------------|---------------------------------|-------------------------|
| EloCalculator.java      | Team.java               | UserRepositoryAuthProvider.java | Base de datos           |
| README                  | TeamRepository.java     | login.html                      | WebController           |
| pie.js                  | TeamRestController.java | register.html                   | play.html               |
| DataRestController.java | load.js                 | WebSecurityConfig.java          | rocketleague.html       |
| googleMap.js            | leaderboard.html        | profile.html                    | diamond.html            |

## Manual
### Generación de la instancia de Base de Datos y su correspondiente Schema. 

Para la generación de la BBDD se deberá descargar el gestor de BBDD “MysqlWorkBench”. Una vez descargado e instalado debemos crear una conexión mysql: localhost y el puerto 3306.
Una ve creada la conexión se deberá crear el Schema “web_fase_1” y hacer un data import de los siguientes datos adjuntados: 
[Schemas](FinalDataSQL)
       
### Lanzamiento de la aplicación de Spring.
La aplicación se encuentra desarrollada con Spring, por lo que se deberá arrancar mediante el Spring Boot. 
También se puede arrancar mediante un IDE, vea sea Eclipse o Netbeans que permita la implementación de aplicaciones con Spring. 
Una vez arrancada la aplicación. El servidor empezará a correr por el puerto 8443. Asegúrese de que no hay ninguna otra aplicación corriendo por ese puerto o este podría fallar. 
La practica se encuentra en: [Practica](practica)

### Acceso a la web. 
Para acceder a la web introduzca la URL: https://https://localhost:8443/

### Especificación REST
Se puede encontrar la documentación y especificación de los endpoints REST en el siguiente archivo
[Documentación](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/Primeros-pasos-angular/API.md)

### Pasos para generar Docker.
1. Descargar Docker Desktop y crear un usuario.
2. Abrir consola de comandos.
3. Generar .jar usando las directrices de maven.
4. Generar dockerfile en la carpeta en la que se encuentre el .jar.
5. Escribir en el Dockerfile las siguientes líneas:
      - FROM openjdk:8-jdk-alpine
      - ARG JAR_FILE=target/* .jar
      - COPY ./practica.jar practica.jar
      - ENTRYPOINT ["java","-jar","/practica.jar"]
6. Construir la imagen de nuestra aplicación con el siguiente comando:
      - docker image build -t 'user'/practica -f Dockerfile  . 
7. Construir contenedor de la base de datos. 
      - docker container run --name 'nombre del contenedor' -e MYSQL_ROOT_PASSWORD='contraseña' -e MYSQL_DATABASE='nombre de la base de datos' -d mysql:8
8. Una vez construido, comprobamos que la base de datos está conectada.
      - docker ps
9. Linkeamos la base de datos con la imagen de nuestra aplicación y construimos su contenedor.
      - docker run -it --name 'nombre del contenedor' --link 'nombre del contenedor de la base de datos':mysql -d 'nombre de la imagen'
10. Creamos el archivo docker-compose.yml

version: "3"
services:
  practica:
    restart: always
    ports:
      - "8443:8443"
    networks:
      - conexionBBDD-network
    environment:
      WAIT_HOSTS: mysql:3306
    depends_on:
      - mysqldb
 
  mysqldb:
    image: mysql:8
    restart: on-failure
    ports:
      - "5000:3306"
    healthcheck:
      test: "/usr/bin/mysql --user=root --password=root--execute \"SHOW DATABASES;\""
      interval: 2s
      timeout: 20s
      retries: 10
    networks:
      - conexionBBDD-network
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=web_fase_1  

networks:
  conexionBBDD-network: 

11. Ejecutamos el siguiente comando para agrupar los dos contenedores.
      - docker-compose up

### Participación 2ª ronda

- Daniel
He participado principalmente en la implementación de la API Rest, centrandome en la seguridad y ficheros POSTMAN.

- Jorge
En esta fase he estado realizando la creacion de contenedores con Docker y su conexion con la BBDD

- Alejandro
En esta fase he estado trabajando sobre REST, implementando la subida de imágenes y limpiando código repetido para que se pueda reutilizar entre la web normal y la aplicación web.

- Lucía
En esta fase he estado realizando los contenedores de la aplicación y la base de datos mediante Docker.

### Archivos fase REST/Docker
| Alejandro               | Daniel                  | Jorge                           | Lucía                   |
|-------------------------|-------------------------|---------------------------------|-------------------------|
| PlayerService           | UserServiceImp          | Dockerfile                      | Dockerfile              |
| TournamentService       | Teams_On_GameService    | docker-compose.yml              | docker-compose.yml      |
| TournamentRestController| TeamServiceImp          | practica.jar                    | practica.jar            |
| TournamentController    | UserRestController      |                                 |                         |
| ImageService            | TeamRestController      |                                 |                         |

### Commits fase REST/Docker

- Alejandro
[Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/74ca3d439ff350ae5e80dabd5c1968140b531855)
[Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/088ea1f7547b01c10c52e9dca0d9e2c613444204)
[Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/f9ac767cf7ff8d50c5252c5312799e9de9c67596)
[Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/361d15274f3ae647751670b354a636f761b46320)
[Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/1652a2395a0a89edc32d4d7ebd5b5e9d32373088)

- Daniel
[Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/5d20bed1c98973d380f4d65a063f06a4c149faed)
[Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/198eeb624ad3335b226bc885871a84d6ded42972)
[Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/1652a2395a0a89edc32d4d7ebd5b5e9d32373088)
[Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/2570d66c52c2825d6d7b014f19a52d372fea21a3)
[Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/3808860eb9aa70a6b10f547189abc6a22e79fa7f)

- Lucía
[Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/cf9efca912e44e8535e80c759dd275035943e3c1)
[Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/6ace090fb4c3ba0c2a91e346f91891cea4cb4767)


- Jorge
[Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/cf9efca912e44e8535e80c759dd275035943e3c1)
[Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/6ace090fb4c3ba0c2a91e346f91891cea4cb4767)


### Pasos para desarrollo en Angular

Para el desarrollo de la aplicación web en Angular, se deberá instalar un editor o entorno de desarrollo. En nuestro caso hemos descargado Visual Studio Code (https://code.visualstudio.com/). También, habrá que instalar node.js (https://nodejs.org/es/).
Una vez descargadas ambas herramientas, abriremos el proyecto en Visual Studio, y en la consola situada en la parte inferior de este entorno escribiremos la siguientes líneas de comandos:
      *cd nombre-carpeta-app
      *npm install -g angular/cli
       
Es posible que se necesite instalar las dependencias de bootstrap y jquery, para ello ejecutaremos los siguientes comandos:
      *npm install bootstrap
      *npm install jquery
       
Para ejecutar la aplicación, se usará el siguiente comando (abrimos también una ventana en el navegador con la dirección localhost:4200, donde se encontrará la aplicación):
      *npm start
       
Los cambios realizados mientras la aplicación se esté ejecutando se actualizarán automáticamente, por lo que no será necesario utilizar el comando cada vez que se haga una modificación.

### Diagrama API Rest
![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/securityRest/github/RestDiagram.png "Diagrama Rest")

### Diagrama componentes y templates Angular

![alt text](https://github.com/CodeURJC-DAW-2019-20/webapp9/blob/Primeros-pasos-angular/github/AngularDiagram.png "Diagrama Angular")

### Participación 3ª ronda

- Daniel
En esta fase me he encargado del funcionamiento de crear un nuevo equipo, del aspecto de la aplicación
para que sea el mismo que en las fases anteriores, de la carga y ejecucíon de la API de Google Maps y
he colaborado en la solución de numerosos errores.

-Jorge
En esta fase me he encargado de inciar los primeros pasos en Angular. Crear el pathing de las rutas. La autentificacion del
user Login. Las configuraciones de proxy, build y angular.json.
Además de realizar el Docker. 

### Commits fase Angular

- Daniel
[Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/5dbd50ae30a00297078a4c62e4cce8c8add0c3b1)
[Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/877f66b7506d36927b6665587324420120382df9)
[Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/bf1d0f7bae594d48f0b48eb7a22cdfc98d8297fe)
[Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/eb67247a4889735e69cce2a83f06c5ab8af47fff)
[Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/ceb97126ba01b1dd60c96f0e31280b416d0175ee)

- Jorge
[Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/4e151e2ae23af14683f3f948526ace068f4c8e33)
[Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/4703007de82a06e7c5900f84702000f797a8f800)
[Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/2c709a052f5eca85c7d760194b80dde6b03c47b4)
[Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/13be5898f8085ac81f55e057163d268c53d5f505)
[Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/f7c097e8ae770afe4ea94585380c8e70386cef19)

- Alejandro
[Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/8246c639adef41e0b895f28ac0ad392579939858)
[Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/3eda83b55c26a966a5c2c08dabe20a7f94959839)
[Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/53969b481cf53ab87c98bf594a3c91a68812fd99)
[Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/5f13c6bed3b6d9893593a88a62185b8b43413454)
[Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/b60e660a1fb49d4f03dfc4bb0ff737cde6c99cd6)

- Lucía
[Commit1](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/2399b4ef7a70aa0e0f57d29c4b538366e4bbc234)
[Commit2](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/65437cf2157df1c1531e53e5e6ca34c4e593e338)
[Commit3](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/6e9510dc9ca0918238b556512054f4bf38802bfe)
[Commit4](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/49cd858d7d47751b6bb4dd45606611b269368647)
[Commit5](https://github.com/CodeURJC-DAW-2019-20/webapp9/commit/b1129902d934506423789dd67c6cd1f0c086cdec)

### Archivos fase Angular

| Alejandro               | Daniel                  | Jorge                           | Lucía                   |
|-------------------------|-------------------------|---------------------------------|-------------------------|
| update.service          | team.component          |angular.json                     | updateMatch.component   |
| profile.component       | app.component           |app-routing.module.ts            | match.service           |
| leaderboard.component   | auth.interceptor        |Docker                           | tournament.component    |
| adminauthguard.service  | teams.service           |package.json                     | tournament.service      |
| profile.service         | users.service           |proxy.conf.json                  | rocketleague.service    |

