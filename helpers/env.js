const { config } = require('../codecept.conf')
const { urls } = require('./urls');

switch (config.env) {
    case 'homolog':
        exports.listagemUsuarios = urls.homolog.listagemUsuarios;
        break;
    case 'prod':
        break;
    default:
        throw new Error('Ambiente não definido no arquivo de configuração.');
}