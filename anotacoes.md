
Variaveis de ambiente para subir o container do postgtres
POSTGRES_PASSWORD = 123456

Variaveis de ambiente para subir o container do mysql
MYSQL_ROOT_PASSWORD = 123456

um container é a execução da imagem
um container é um ambiente isolado .

docker build é pra criar uma nova imagem 
usar docker build quando houver modificações no código da imagem q possui 

o docker build é baseado no dockerfile
dockerfile é o passo a passo pra criação da imagem 

docker build . -t nomedaimagem

depois de fazer o build da imagem ir no docker desktop e dar o pusho to docker hub
e logo após ir no render e clicar em "Manual Deploy" e escolher a opção deploy latest refernces 
e após copiar o link 

uma imagem de backend precisa dessa env:
DB_HOST=host.docker.internal

Pois 