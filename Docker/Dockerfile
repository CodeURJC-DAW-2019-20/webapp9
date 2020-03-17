
FROM openjdk:8-alpine

COPY ./practica.jar ./practica.jar
COPY images usr\src\images

EXPOSE 8443 3306

CMD ["java", "-jar", "practica.jar"]