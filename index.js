// let url = "https://www.wellrx.com/prescriptions/atorvastatin%20calcium/somerset,%20nj%2008873,%20usa"
const express = require('express')
const bodyParser = require('body-parser')
//onst https = require('https');
const app = express()
const port = 3000

const https = require("https");
//const https = require("https");
const request = require("request");
const cookie_wellrx ='_ga=GA1.2.1852675243.1562940989; _gac_UA-61531907-1=1.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gat=1; _gcl_aw=GCL.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gid=GA1.2.556533979.1562940989; _fbp=fb.1.1562940990289.1103511892; b1pi=!gEctvFHZFGAMaEgvLnpW7/Jj8QPM15t/4tupby4OGYB/ug4wFtsdTxnyukUb+wgP/4JvVbbq/8UH7Cg=; _hjIncludedInSample=1; wrxBannerID=1; _gcl_au=1.1.2122930554.1562940990; ASP.NET_SessionId=nejpk2srmacslxi3zoc0ifi3; __RequestVerificationToken=NquluhuCjUXLwGUdIU-N5ABLFTGnLbtDZxV3jv22aT3Hpjkio6BqDei4-O6QmkWQ-oJwh-PpLLdLU3LdVZAH2m4Nl-U1'
const cookie_wellrx1 ='_ga=GA1.2.1852675243.1562940989; _gac_UA-61531907-1=1.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gat=1; _gcl_aw=GCL.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gid=GA1.2.556533979.1562940989; _fbp=fb.1.1562940990289.1103511892; b1pi=!gEctvFHZFGAMaEgvLnpW7/Jj8QPM15t/4tupby4OGYB/ug4wFtsdTxnyukUb+wgP/4JvVbbq/8UH7Cg=; _hjIncludedInSample=1; wrxBannerID=1; _gcl_au=1.1.2122930554.1562940990; ASP.NET_SessionId=nejpk2srmacslxi3zoc0ifi3; __RequestVerificationToken=NquluhuCjUXLwGUdIU-N5ABLFTGnLbtDZxV3jv22aT3Hpjkio6BqDei4-O6QmkWQ-oJwh-PpLLdLU3LdVZAH2m4Nl-U1'

//var http = require("http");
const options = {
    hostname: 'localhost'
    , port: app.get('port')
    , path: 'https://www.wellrx.com/prescriptions/atorvastatin%20calcium/somerset,%20nj%2008873,%20usa'
    , method: 'POST'
    ,headers: {
        'Content-Type': 'application/json',
        'Cookie': '_fbp=fb.1.1562940990289.1103511892; _ga=GA1.2.1852675243.1562940989; _gac_UA-61531907-1=1.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gat=1; _gcl_aw=GCL.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gid=GA1.2.556533979.1562940989; b1pi=!2XsCQ4igwshv2H8vLnpW7/Jj8QPM17haYtdPLd2Jl4u4g57heEkcriLpnQ2wkAK5tlDC24AU0rqcIbI=; _hjIncludedInSample=1; wrxBannerID=1; _gcl_au=1.1.2122930554.1562940990; ASP.NET_SessionId=nejpk2srmacslxi3zoc0ifi3; __RequestVerificationToken=NquluhuCjUXLwGUdIU-N5ABLFTGnLbtDZxV3jv22aT3Hpjkio6BqDei4-O6QmkWQ-oJwh-PpLLdLU3LdVZAH2m4Nl-U1',
        'X-Requested-With': 'XMLHttpRequest',
        'Referer': 'https://www.wellrx.com/prescriptions/atorvastatin%20calcium/somerset,%20nj%2008873,%20usa',
        'Accept-Encoding':'br, gzip, deflate',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'en-us',
     }
     ,body: {"drugname": "ATORVASTATIN CALCIUM", "lat": "40.497604", "lng": "-74.48848679999998", "numdrugs":"1", "qty":"0", "ncpdps":"null"}
};

let req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data); // I can't parse it because, it's a string. why?
        let dat = JSON.parse(data);
        console.log(dat);
    });
});
app.get("/", (req, res) => res.send(options.body));
req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
//.req.end();