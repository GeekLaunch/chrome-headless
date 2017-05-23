const CDP = require('chrome-remote-interface');
const fs = require('fs');

CDP({
    host: 'localhost',
    port: 9222,
}, async client => {
    const {Page} = client;

    await Page.enable();

    let {data} = await Page.captureScreenshot({
        format: 'png',
    });

    fs.writeFile('screenshot.png', data, 'base64', e => console.error(e));

    await client.close();
});
