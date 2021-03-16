const options = {
    hostname: 'www.hackerrank.com',
    method: 'GET',
    headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Edg/85.0.564.63',
        'Authorization': 'Basic ' + Buffer.from(process.argv[2] + ':' + process.argv[3]).toString('base64')
     }
}

console.log(options);