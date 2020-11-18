<h1 align="center">SAD
</h1>
<h3 align="center">
Sistema de Avaliação Docente
</h3>

## Tabela de conteúdos

 * [Sobre o projeto](#-sobre-o-projeto)
 * [Layout](#-layout)
 * [Arquitetura](#arquitetura)
 * [Pré-requisitos](#pré-requisitos)
 * [Rodando o Projeto](#rodando-o-projeto)
 * [Como contribuir](#-como-contribuir)
 * [Autores](#-autores)

## 💻 Sobre o projeto



## 🎨 Layout

O layout da aplicação está disponível [clicando aqui](https://docs.google.com/document/d/1b0pzPq9pHcfnet4qj5l2yjUHmYnysagpr4hgqlBQRNU).

### Arquitetura

- [ ] Diagrama Arquitetural
<img src="https://lh6.googleusercontent.com/ZLiiqLn0r6Z-jb0PiXtJxhPi059jv7GMVPTX8sDeG8l9kwbFU9whg8jC-3NPYS6nUIk3PAqGw13EmghTuPRmFc39D5FaCOBczE4XazndewTA45QspWHxntiIv4_ZONp5fjHnpKhp" width="800">

### Pré-requisitos

Antes de dar início, certifique-se que tenha em sua máquina:
- [ ] Gerenciador de Banco de Dados Relacional (Recomendamos o MySQL)
- [ ] Node versão 12.16.3 ou superior
- [ ] Yarn versão 1.22.4 ou superior


### Rodando o projeto

```bash
Clone este repositório
$ git clone https://github.com/CS2020-1-CavaloTroia/UniCaronas

Acesse a pasta do projeto no seu terminal/cmd
$ cd server/UniCaronas

Para o Linux, necessário instalar o pip
$ apt install python3-pip

Instale as dependências
$ pip install Django==3.1.2 djangorestframework pyyaml django-rest-swagger dnspython djongo

Execute a criação do banco de dados
$ python manage.py migrate

Execute a aplicação
$ python manage.py runserver

A aplicação será aberta na porta:8000 - acesse http://localhost:8000
Caso queira especificar a porta utilize
$ python manage.py runserver <port>
```

## 💡 Como contribuir

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 👨‍💻 Autores

Grupo Cavalo de Troia da turma de Construção de Software de 2020.1 da Universidade Federal de Goiás
* Abigail de Jesus Arruda
* Alan Brito Barros
* Amanda Lobo Gomes
* Fernando Severino Almeida
* Heitor Melo de Lucas Brandão
* Jacob Ferraz dos Santos
* Lucas Borges de Souza
* Michelly Silva Lima
* Victor Melo de Lucas Brandão

