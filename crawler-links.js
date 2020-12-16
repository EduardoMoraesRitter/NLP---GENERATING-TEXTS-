var request = require("request");
var cheerio = require("cheerio");

var fs = require('fs')
var links = fs.openSync('links.txt', 'w')

request("https://www.letras.com.br/racionais-mcs", function (err, res, body) {
    if (err) console.log("Erro :" + err);
    var $ = cheerio.load(body);
    //console.log($(".item-quick-menu"))
    $(".item-quick-menu").each(function () {
         var link = $(this).find(".item-box").attr("href");
         fs.writeSync(links, link + '\n')
         console.log(link);

    });
});
