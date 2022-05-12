const { I } = inject();

When('realizo uma requisição GET', async () => {
    I.haveRequestHeaders(global.headers);
    global.res = await I.sendGetRequest(global.endPoint);
});

When('realizo uma requisição POST', async () => {
    I.haveRequestHeaders(global.headers);
    global.res = await I.sendPostRequest(global.endPoint, global.body);
});

When('realizo uma requisição DEL', async () => {
    I.haveRequestHeaders(global.headers);
    global.res = await I.sendDeleteRequest(global.endPoint);
});

When('realizo uma requisição PUT', async () => {
    I.haveRequestHeaders(global.headers);
    global.res = await I.sendPutRequest(global.endPoint, global.body);
});
