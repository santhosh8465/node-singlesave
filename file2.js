const https = require('https')
const express = require('express')
const app = express();
const port = 3000
const data = JSON.stringify({
'drugname': 'ATORVASTATIN CALCIUM', 'lat': '40.497604', 'lng': '-74.48848679999998', 'numdrugs':'1', 'qty':'0', 'ncpdps':'null'
 })

const  options = {
    hostname: 'localhost'
    , port: app.get('port')
    , path: 'https://www.wellrx.com/prescriptions/get-drugs'
    , method: 'POST'
    ,headers: {
        //POST /prescriptions/get-drugs HTTP/1.1
        'Content-Type': 'application/json',
        'Cookie': '_fbp=fb.1.1562940990289.1103511892; _ga=GA1.2.1852675243.1562940989; _gac_UA-61531907-1=1.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gat=1; _gcl_aw=GCL.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gid=GA1.2.556533979.1562940989; b1pi=!2XsCQ4igwshv2H8vLnpW7/Jj8QPM17haYtdPLd2Jl4u4g57heEkcriLpnQ2wkAK5tlDC24AU0rqcIbI=; _hjIncludedInSample=1; wrxBannerID=1; _gcl_au=1.1.2122930554.1562940990; ASP.NET_SessionId=nejpk2srmacslxi3zoc0ifi3; __RequestVerificationToken=NquluhuCjUXLwGUdIU-N5ABLFTGnLbtDZxV3jv22aT3Hpjkio6BqDei4-O6QmkWQ-oJwh-PpLLdLU3LdVZAH2m4Nl-U1',
        'X-Requested-With': 'XMLHttpRequest',
        'Referer': 'https://www.wellrx.com/prescriptions/atorvastatin%20calcium/somerset,%20nj%2008873,%20usa',
        'Accept-Encoding':'br, gzip, deflate',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        //'Host': 'www.wellrx.com',
        'Accept-Language': 'en-us',
        //'Connection': 'keep-alive',
        //'Content-Length': 129,

    }
}

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
        process.stdout.write(d)
    })
})

req.on('error', (error) => {
    console.error(error)
})

req.write(data)
req.end()