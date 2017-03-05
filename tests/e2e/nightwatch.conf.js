// require('babel-register');

// http://nightwatchjs.org/getingstarted#settings-file
module.exports = {
    src_folders: ['tests/e2e/specs'],
    output_folder: 'tests/e2e/reports',
    page_objects_path: 'tests/e2e/page_objects',
    custom_assertions_path: ['tests/e2e/custom-assertions'],

    selenium: {
        start_process: true,
        server_path: require('selenium-server').path,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': require('chromedriver').path
        }
    },

    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            globals: {
                devServerURL: 'http://www.baidu.com'
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
};