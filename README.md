# Automação de testes de API com CodeceptJS

Esse projeto é um template para a criação de uma automação de testes utilizando CodeceptJS.

----

## Configurações iniciais:

O projeto já está configurado e pronto para ser implementado, não precisando de configurações adicionais para ser utilizado.

As configurações realizadas nesse template foram:

- Criação de um projeto com CodeceptJS, utilziando o helper *Rest*.

    ```BASH
    npm install -g codeceptjs
    npx codeceptjs init
    ```

- Inicialização das configurações do gherkin para o CodeceptJS.

    ```BASH
    npx codeceptjs gherkin:init
    ```

- Adicionado o helper *JSONResponse* no arquivo de configurações.

- Adicionado o helper *CustomRestHelper*, com o método *definePayload()*.

- Criação dos steps que executam a requisição.

- Configuração do relatório *Alure Report*.

- Configuração das URLs a serem utilizadas no teste em seus respectivos ambientes.

---

## Implementação da automação:

Para implementar novos testes, escrever os cenários em um arquivo *.feature* dentro da pasta feature. Com os cenários escritos utilizar o seguinte comando para gerar os steps:

```BASH
npx codeceptjs gherkin:snippets
```

Ao executar esse comando em uma linha de comandos, seu steps serão gerados no próprio terminal. Basta copia-los para um arquivo *_steps.js* dentro da pasta *step_definitions*.

### Utilização do *definePayload*

Para utilizar o método definePayload, informar os seguintes parâmetros:

- endPoint: informar a url completa para a requisição, incluindo os parâmetros.
- body: json com o body da requisição.
- headers: json com os headers da requisição.

### Utilização do Alure Report

Para executar o alure report, é necessário ter o Alure instalado globalmente em sua maquina. Para isso, execute o comando abaixo.

```BASH
npm install -g allure-commandline --save-dev
```

Com o Alure instalado, execute o comando abaixo para executar:

```BASH
allure serve output
```
---
## Execução da automação

Para executar a automação utilizamos o seguinte comando:

```BASH
npx codeceptjs run
```

Podemos adicionar os seguintes parâmetros:

- *--grep*: Utilizamos o parâmetro *--grep* quando queremos executar uma suite de testes especifica. Para isso, informamos também qual a tag deve ser executada. Exemplo: ```--grep "@ListagemUsuarios" ```

### Execução paralela 

Para executarmos testes paralelos, pelos usar o comando ```run-workers 5```, onde *5* é quantidade de testes que serão executados em paralelo.

Então para executar os testes em paralelo, utilize o seguinte comando:

```npx codeceptjs run-workers 5```