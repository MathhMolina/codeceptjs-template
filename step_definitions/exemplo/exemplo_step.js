const { I } = inject();
const { listagemUsuarios } = require('../../helpers/env');

Given('que tenho um payload correto para a listagem de usuário', () => {
    I.definePayload(endPoint = listagemUsuarios, body = null, headers = null)
});

Then('vejo que foi retornada uma listagem de usuários corretamente', () => {
    I.seeResponseCodeIs(200);
});

