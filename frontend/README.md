# 🐾 Sr. Bigodes - Cat Lovers Site 🐾

Bem-vindos ao **Sr. Bigodes**, um site dedicado aos amantes de gatos! Esta aplicação foi criada com **React + Vite**,<br>
com o objetivo de compartilhar imagens adoráveis e informações curiosas sobre gatos. Além disso, oferecemos um <br>
sistema de login e cadastro para personalizar a experiência dos usuários.

## 📋 Funcionalidades

- **Página Inicial (Home):** Uma recepção calorosa com as últimas atualizações do mundo felino.
- **Página de Login e Cadastro:** Permite que os usuários se registrem e façam login para acessar conteúdos personalizados.
- **Página Sobre (Sobre Nós):** Nossa missão e paixão por gatos é explicada de forma acolhedora.
- **Cards de Gatos (API TheCatApi):** Explore vários cards com imagens fofas de gatos e suas informações detalhadas, tudo puxado diretamente da [TheCatApi](https://thecatapi.com).

## 🚀 Tecnologias Utilizadas

- **React** com **Vite** para uma experiência de desenvolvimento ágil e moderna.
- **Sequelize** como ORM para a gestão de banco de dados.
- **Express** para o backend.
- **TheCatApi** para fornecer imagens e dados sobre gatos.
- **CSS personalizado** para estilizar os componentes.
- **bcrypt** para segurança de senhas.
- **CORS** para controle de acessos no backend.

## 🖼️ Como Funciona a Página de Gatos

Na página de gatos, você encontrará uma galeria de cards que exibe:

- **Imagem do gato:** Obtida da API TheCatApi.
- **Informações sobre o gato:** Curiosidades, raça e outras características especiais.

Cada card também inclui um link para "Ver Mais..." onde você pode acessar detalhes adicionais sobre cada gato.

## 📂 Estrutura de Páginas

- **Login / Cadastro:** Os usuários podem se cadastrar e fazer login na aplicação.
- **Sobre:** Uma página com curiosidades e informações sobre nossa paixão por gatos.
- **Home:** Apresenta os destaques mais recentes.
- **Cards de Gatos:** Vários cards dinâmicos que consomem as informações diretamente da API TheCatApi.

## 🔒 Segurança

O projeto implementa:

- Proteções contra **SQL Injection** e **XSS**.
- Utilização do **bcrypt** para o hash seguro de senhas.

## ⚙️ Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/thecatapi.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   npm run dev
   ```
