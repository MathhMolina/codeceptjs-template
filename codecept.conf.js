exports.config = {
    output: './output',
    helpers: {
        REST: {
            endpoint: 'http://localhost:3000/api',
            timeout: 10000
        },
        JSONResponse: {},
        CustomRestHelper: {
            require: './customRestHelper_helper'
        }
    },
    bootstrap: null,
    timeout: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/**/*.feature',
        steps: './step_definitions/**/*.js'
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        allure: {
            enabled: true
        }
    },
    stepTimeout: 0,
    stepTimeoutOverride: [{
        pattern: 'wait.*',
        timeout: 0
    },
    {
        pattern: 'amOnPage',
        timeout: 0
    }],
    name: 'API',
    translation: 'pt-BR',
    env: 'homolog'
}