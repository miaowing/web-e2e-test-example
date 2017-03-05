/**
 * Created by feng on 2017/3/5.
 */
module.exports = {
    'Baidu Search Test': function (client) {
        var baidu = client.page.search.baidu();
        client
            .url(baidu.url)
            .waitForElementPresent('body', 5000);

        baidu.setValue('@searchBar', 'nightwatch')
            .api.pause(3000)
            .assert.containsText('#container', 'Night Watch');

        client.end();
    }
};