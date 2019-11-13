# Pineapple Store

Este é um exemplo de testes de deploy e ecommerce(PWA), pode ser encontrado https://pineapple-store.herokuapp.com/.

## Visuals
#### SignIn da aplicação.

![Meetapp](https://user-images.githubusercontent.com/53484547/67404562-f3bbb300-f589-11e9-88b2-43fe73df72c9.png "Meetapp Screenshot")

#### Dashboard da aplicação.

![Meetapp](https://user-images.githubusercontent.com/53484547/67404553-f1f1ef80-f589-11e9-810b-c19778ae4206.png "Meetapp Screenshot")

## Getting started

Para inicializar o projeto
```bash
 git clone https://github.com/Lucas-Fonte/Pineapple.git
```
Ou faça o download do .zip do projeto.

Para o banco de dados, pode ser utilizado qualquer banco SQL, para este projeto foi utilizado **PostgreSQL**.

Caso possua o [Docker](https://docs.docker.com/docker-for-mac/install/), uma opção seria apenas criar um container do PostgreSQL. 

```
 Exemplo com credenciais padrão do projeto
 
 docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
```
Outra opção seria fazer o download direto do [postgres](https://www.postgresql.org/download/) e roda-lo com as mesmas credenciais.

Com o banco de dados configurado, basta criar uma *database* chamada 'meetapp', ou como optar por chama-lá, lembrando sempre de alterar a variável no arquivo **.env**.

*(Versão 11 utilizada, pois a versão 12 apresentou problemas ao introduzir as migrations)*

Use um package manager, [yarn](https://yarnpkg.com/en/docs/install#mac-stable) ou [npm](https://www.npmjs.com/get-npm) , para instalar as dependências.

```bash
cd backend
yarn
yarn sequelize db:migrate
yarn start
```

```bash
cd frontend
yarn 
yarn start
```
Tudo pronto para o gerenciamento de produtos.

# Estudo de caso

## Heroku vs (Firebase + ElephantSQL ou Google Cloud SQL)

Atualmente é utilizado Heroku para deploy da aplicação, por sua facilidade, dinamismo, além de possuir integração com os PostgreSQL e de visualização simples utilizando o Postbird.

Entretanto outra possibilidade a ser considerada é a de utilizar o Firebase para deploy da aplicação e manter o PostgreSQL utilizando ElephantSQL ou Google Cloud SQL.

Considerações: 
- Deploy mais demorado
- Possibilidade de app nativo
- Database e aplicação em diferentes plataformas
- Firebase proporciona multiplas ferramentas
- Considerar uso de Kubernetes
- Firebase Hosting provisiona um certificado SSL
- Facilita o deploy de PWAs


## License
Pineapple
Pineapple é uma aplicação full-stack feita com NodeJS, ReactJS.

MIT License

License
Copyright (c) [2019] [Pineapple-Store]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
