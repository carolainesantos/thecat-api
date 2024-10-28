# 🐾 Sr. Bigodes 
Este projeto consiste em uma aplicação web que traz informações e imagens aleatórios sobre gatos. Desenvolvida com **React + Vite** no frontend e Node.js no backend, 
segue o padrão de arquitetura **MVC (Model-View-Controller)** para uma melhor organização e manutenção do código.


### 🐈‍⬛ Sobre a Api 

TheCatAPI é uma API gratuita e popular para amantes de gatos! Com ela, conseguimos acessar uma vasta coleção de imagens de gatos, além de várias curiosidades e informações detalhadas sobre as raças. Ela permite que desenvolvedores adicionem conteúdo visual e informativo sobre gatos de forma fácil e prática em suas aplicações.<br>
Para saber mais sobre TheCatAPI e como ela pode transformar seu projeto, visite  [TheCatApi](https://thecatapi.com).


### 💡Como Usamos

No Sr. Bigodes, utilizamos o backend para consumir dados da **TheCatAPI** e enviar as informações para o frontend, exibindo imagens e informações nos cards de gatos. </br>
Esse processo não apenas organiza e otimiza a comunicação com a API, mas também enriquece a experiência do usuário com detalhes divertidos e informativos sobre nossos felinos favoritos. Cada clique traz algo novo para quem ama gatos!


### 📋 Funcionalidades

- **Página Inicial:** Uma recepção calorosa para encantar o usuário.
- **Página de Login e Cadastro: ** Permite que os usuários se registrem e façam login para acessar conteúdos personalizados.
- **Página Sobre:** Conta a respeito da nossa missão.
- **Cards de Gatos:** Exibe vários cards com imagens fofas de gatos e suas informações detalhadas, tudo diretamente da API [TheCatApi](https://thecatapi.com).


### 🚀 Tecnologias Utilizadas

- Frontend
   - **React** com **Vite** para uma experiência de desenvolvimento ágil e moderna.
   - **Axios** usado para fazer requisições ao backend, facilitando a comunicação entre o frontend e o servidor.
   - **CSS** personalizado para estilizar os componentes e proporcionar uma interface atraente e intuitiva.
 
- Backend
   - **Express** como framework para construir a API do servidor de forma rápida e eficiente.
   - **Sequelize** ORM para facilitar a interação com o banco de dados, gerenciando informações de usuários e dados dos gatos.
   - **TheCatAPI** fornece imagens e dados detalhados sobre gatos, consumidos pelo backend e enviados ao frontend.
   - **bcrypt** para hashing seguro de senhas, garantindo a segurança dos dados dos usuários.
   - **CORS** para controle de acessos, assegurando que apenas o frontend autorizado interaja com o backend.
   - **Axios** também utilizado no backend para fazer requisições à TheCatAPI e integrar as informações de forma estruturada.


### 🔒 Segurança

O projeto implementa:

- Proteções contra **SQL Injection** e **XSS**.
- Utilização do **bcrypt** para o hash seguro de senhas.


## ⚙️ Como Executar o Projeto

Pré-requisitos!<br>
Certifique-se de ter o Node.js instalado na sua máquina. Para baixa-lo [clique aqui](https://nodejs.org/pt).

1. Clone este repositório:

```bash
git clone git@github.com:carolainesantos/thecat-api.git
```

2. Configuração do Backend<br>
 1.1 Acesse a pasta backend:
   
```bash
cd /backend
```
 1.2. Instale as dependências:
      
   ```bash
   npm install
   ```
1.3. Inicie o servidor:
      
   ```bash
   npm run dev
   ```

3.Frontend <br>
   3.1 Acesse a pasta frontend:
      
   ```bash
   cd /frontend
   ```
   3.2. Instale as dependências:
         
   ```bash
   npm install
   ```
   3.3. Inicie o servidor:
         
   ```bash
   npm run dev
   ```













