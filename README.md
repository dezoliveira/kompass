# Kompass

#### Visão Geral

Bem vindo ao Kompass, aplicativo de Listagem e identificação de usuários no Google Maps, através de Latitude e Longitude consumidas por api e tendo também a funcionalidade de poder adicionar um novo usuario a Lista de Usuários e no mapa. Suas funcionalidades são:

- Consulta de usuários através do mapa e da listagem de usuários
- Marcador no local em que o usuário se encontra
- Info View ao clicar no marcador que exibe os detalhes do usuário como nome, cidade, latitude e longitude.
- Botão Kompass que rastreia um usuário específico no mapa.

Acesse: [Kompass](https://kompass-beige.vercel.app/)

---

#### Tecnologias

- React
- Tailwind CSS
- Vite

---

#### Rotas

- /
- /location

---

#### Páginas

- Home: Página com logo, navbar e botão para ir até a exibição do Mapa e Listagem de Usuários.
- Location: Página com Mapa de usuários, Listagem de usuários e Botão com Modal para adicionar novos usuários. 

---

#### Componentes

- Google Maps
- Layout
- Modal
- Navbar
- UsersList

---

#### Como Rodar o Projeto (local)

- git clone https://www.github.com/dezoliveira/kompass
- npm install
- npm run dev

#### Como Rodar o Docker

- git clone https://www.github.com/dezoliveira/kompass
- npm install -g docker
- docker build -t reactjs-cookbook/dockerize-reactjs-app .
- docker run -it -p 8080:80 --rm --name dockerize-reactjs-app reactjs-cookbook/dockerize-reactjs-app
- localhost:8080