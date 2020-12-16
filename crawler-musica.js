var request = require("request");
var cheerio = require("cheerio");

var fs = require('fs')
var links = fs.openSync('links.txt', 'w')

request("https://www.letras.com.br/cpm-22/um-minuto-para-o-fim-do-mundo#top=cpm-22", function (err, res, body) {
    if (err) console.log("Erro :" + err);
    var $ = cheerio.load(body);

    console.log($(".lyrics-section").attr('section'))

    //console.log($(".item-quick-menu"))
    //$(".item-quick-menu").each(function () {
        // var link = $(this).find(".item-box").attr("href");
         //fs.writeSync(links, link + '\n')
         //console.log(link);

    //});
});
