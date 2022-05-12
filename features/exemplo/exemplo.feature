#language: pt

@ListagemUsuarios
Funcionalidade: Listagem de usuários
    Sendo um usuário da API
    Posso listar os usuários
    Para obter dados de usuários cadastrados

    Cenario: Listagem de usuários com sucesso
        Dado que tenho um payload correto para a listagem de usuário
        Quando realizo uma requisição GET
        Entao vejo que foi retornada uma listagem de usuários corretamente