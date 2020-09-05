const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')

const root = path.join(__dirname, 'www/public')

const server = http.createServer((request, response) => {
    let url_ = url.parse(request.url)

    let path_ = path.join(root, url_.pathname)
    let stream = fs.createReadStream(path_)

    // DATA LOG
    console.log(`
        url request: ${url_.pathname}
        path       : ${path_}
    `)
    // ========

    stream.on('data', (data) => {
        response.write(data)
    })

    stream.on('end', () => {
        response.end()
    })

    stream.on('error', (err) => {
        let errString = err.name + '->' + err.message

        response.write(errString)
        response.end()
    })

})

server.listen(8000)
console.log('Server is now running....')