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
            var letra = ""
            //letra = $("title").text() + "\n\n"
            //letra += str($(".lyrics-section")).replace(/<br>/g, '\n')//.text()//.replace(/,/g, ', \n');
            //console.log($(this).find(".lyrics-section").text());

            //console.log($(".lyrics-section")[0].children[0].next)

            $(".lyrics-section")[0].children[0].next.children.forEach((i) => {
                if(i.data){
                    console.log(i.data)
                    letra += i.data + "\n"
                }
            })
            fs.writeSync(letras, letra + '\n\n')
        }
        done();
    }
});

//c.queue("https://www.letras.com.br/cpm-22/um-minuto-para-o-fim-do-mundo#top=cpm-22");

lineReader.eachLine("links.txt", function (line, last) {
   //console.log(line)
   c.queue(line);
});
