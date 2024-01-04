<h1>Backend do projeto de controle financeiro</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=express&message=framework&color=blue&style=for-the-badge&logo=EXPRESS"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)


## Descrição do projeto 

<p align="justify">
  Backend do projeto full-stack de controle financeiro. 
  Projeto conta com autenticação de usuario com login e senha, criptografia na senha e na validação dela com CRUD de novos usuarios, novas categorias, novas transações e novas metas.
</p>

## Funcionalidades

:heavy_check_mark: Autenticação de usuario

:heavy_check_mark: Criptografia de senha com jsonwebtoken

:heavy_check_mark: CRUD de novos usuarios, novas categorias, novas transações e novas metas


## Rotas

Login -> auth/login: 

![image](https://github.com/jpadedg/controleFinanceiro-back/assets/57507707/b2ffa489-7542-492b-a161-79d1833270a5)

Registrar novo usuario -> auth/register: 

![image](https://github.com/jpadedg/controleFinanceiro-back/assets/57507707/743adea5-427d-4674-8e1c-8def3ed5f79a)

Essas duas rotas não precisam de um Token de autenticação para poder realiza-la mas para realizar as demais rotas é necessário ter o token no postman ou no insomnia, ou com o servidor rodando.

obter todas as categotias -> /categorias/

![image](https://github.com/jpadedg/controleFinanceiro-back/assets/57507707/115098de-643e-4258-90ee-4fc2f3e1c66e)

Adicionar uma nova categoria -> /categorias/

![image](https://github.com/jpadedg/controleFinanceiro-back/assets/57507707/b2107034-9143-460e-a615-806dabccf751)

Alterar uma nova categoria -> /categorias/20 (Numero do ID a ser alterado)

![image](https://github.com/jpadedg/controleFinanceiro-back/assets/57507707/3385d89d-034b-4a12-87d1-77fbfaf35ea0)

Excluir uma categoria -> /categorias/20 (Numero do ID a ser excluido)

![image](https://github.com/jpadedg/controleFinanceiro-back/assets/57507707/1dd8dde2-2feb-42b0-9b0f-30bef0dd84fb)


## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

...

Liste todas as dependencias e libs que o usuário deve ter instalado na máquina antes de rodar a aplicação 

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone [https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator](https://github.com/jpadedg/controleFinanceiro-back.git)
```

```
cd controleFinanceiro-back
npm i
npm run dev
```

Agora basta rodar localmente o projeto Front-end: https://github.com/jpadedg/controleFinanceiro-front


## Desenvolvedores/Contribuintes :octocat:

João Pedro Aded - 2023 
