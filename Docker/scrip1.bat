cd ..

cd ./Angular/eTournaments

docker run --rm --name angular-container -v "%cd%":/angular -w /angular node:12.14.1 /bin/bash -c "npm install; npm run-script build"

xcopy /E "%cd%"\dist\eTournaments ..\..\practica\src\main\resources\static\new

cd ../../practica

mvn install

xcopy /E "%cd%"\target\practica-0.0.1-SNAPSHOT.jar ..\Docker\practica.jar

cd ../Docker

docker image build -t 'user'/practica -f Dockerfile .

docker push web9/practica

