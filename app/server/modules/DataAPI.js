var _HOST = 'localhost';
var _PORT = '3011'
var _PATH = '/open-data/rest/';

exports.APIList = [
    {
        name: 'Population',
        options: {
            host: _HOST,
            port: _PORT,
            path: _PATH + 'population',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36'
            }
        }
    },
    {
        name: 'Debts',
        options: {
            host: _HOST,
            port: _PORT,
            path: _PATH + 'debts',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36'
            }
        }
    },
    {
        name: '2014_Ordinance_Amount',
        options:{
            host: 'localhost',
            port:'3011',
            path: '/open-data/rest/foo',
            headers: {
                'Content-Type': '*/*',
                'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36'
            }
        }
    }

];