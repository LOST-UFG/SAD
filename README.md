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

A UFG é uma instituição que preza pela formação de profissionais comprometidos com a transformação e desenvolvimento da sociedade. Está entre seus objetivos, se desenvolver cada vez mais para melhorar sua qualidade de ensino, pesquisa e extensão.
Levando esses objetivos em consideração, chegamos a conclusão de que é de extrema importância a avaliação constante das atividades realizadas por nossos docentes, de forma a habilitar o processo de evolução de ensino, pesquisa e extensão da Universidade. Apesar dessa importância, o atual processo de avaliação está longe de ser o ideal.
O docente deve registrar suas atividades no Sistema de Cadastro de Atividades Docentes (SICAD) anualmente. Após isso, é gerado o RADOC (Relatório de Atividades do Docente). A Comissão de Avaliação Docente (CAD), por sua vez, realiza a transcrição dessas atividades para planilhas eletrônicas para contabilização da pontuação das atividades do docente de acordo com a Resolução do CONSUNI em duas situações: Estágio Probatório e Progressão Horizontal.
Como descrito acima, o processo conta com o uso de várias ferramentas, cuja a integração das informações entre essas plataformas é realizado manualmente. Além disso, não existe padronização nas planilhas avaliativas. Portanto, por ser um processo  oneroso, repetitivo e altamente sujeito a erros, principalmente quando consideramos um relatório de 1 (um) ano de atividades de vários professores, é imprescindível que se faça uma intervenção tecnológica para auxiliar este processo, automatizando-o.


## 🎨 Layout

O layout da aplicação está disponível [clicando aqui](https://docs.google.com/document/d/1b0pzPq9pHcfnet4qj5l2yjUHmYnysagpr4hgqlBQRNU).

### Arquitetura

- [ ] Diagrama Arquitetural
<img src="https://lh6.googleusercontent.com/ZLiiqLn0r6Z-jb0PiXtJxhPi059jv7GMVPTX8sDeG8l9kwbFU9whg8jC-3NPYS6nUIk3PAqGw13EmghTuPRmFc39D5FaCOBczE4XazndewTA45QspWHxntiIv4_ZONp5fjHnpKhp" width="600">

### Pré-requisitos

Antes de dar início, certifique-se que tenha em sua máquina:
- [ ] Gerenciador de Banco de Dados Relacional (Recomendamos o MySQL)
- [ ] Node versão 12.16.3 ou superior
- [ ] Yarn versão 1.22.4 ou superior


### Rodando o projeto

```bash
1. Clone este repositório
$ git clone https://github.com/LOST-UFG/SAD.git

2. Acesse a pasta do projeto no seu terminal/cmd
$ cd SAD

3. Instale as dependências
$ yarn

4. Crie o banco de dados utilizando o Script disponível em https://docs.google.com/document/d/12l-ZlKr_H6rQxS98UkdCiBEQhBkKraUTbcEy2OdACus

5. Configure o .env em ./SAD com as seguintes variáveis de ambiente
SERVER_URL = ip da maquina onde será executado o SAD
SERVER_PORT = porta onde será executado o SAD
DB_HOST = IP para o servidor do banco de dados
DB_USER = seu usuario do banco de dados
DB_PASS = sua senha do banco de dados
DB = sad

6. Execute a aplicação
$ yarn start

```

## 💡 Como contribuir

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 👨‍💻 Autores

* Abigail de Jesus Arruda
* Alan Brito Barros
* Amanda Lobo Gomes
* Fernando Severino Almeida
* Heitor Melo de Lucas Brandão
* Jacob Ferraz dos Santos
* Lucas Borges de Souza
* Michelly Silva Lima
* Victor Melo de Lucas Brandão

