var Crawler = require("crawler");
var lineReader = require("line-reader");

var fs = require('fs')
var letras = fs.openSync('letras.txt', 'w')

var c = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            var letra = $("title").text() + "\n\n"
            letra += $(".lyrics-section").text()
            console.log(letra);
            fs.writeSync(letras, letra + '\n\n\n\n')
        }
        done();
    }
});

//c.queue("https://www.letras.com.br/racionais-mcs/ta-na-chuva");

lineReader.eachLine("links.txt", function (line, last) {
    //console.log(line)
    c.queue(line);
});
