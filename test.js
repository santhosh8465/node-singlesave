const fetch = require('node-fetch');
const https = require("https");
(async () => {
    const rawResponse = await fetch('https://www.wellrx.com/prescriptions/atorvastatin%20calcium/somerset,%20nj%2008873,%20us', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cookie': '_ga=GA1.2.1852675243.1562940989; _gac_UA-61531907-1=1.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gat=1; _gcl_aw=GCL.1562941988.CjwKCAjw36DpBRAYEiwAmVVDMEFQElOYE_aAn9V1wi4solCur4rcrmxwb_DP52Y7LO6qFK9504gGsxoCb8cQAvD_BwE; _gid=GA1.2.556533979.1562940989; _fbp=fb.1.1562940990289.1103511892; b1pi=!gEctvFHZFGAMaEgvLnpW7/Jj8QPM15t/4tupby4OGYB/ug4wFtsdTxnyukUb+wgP/4JvVbbq/8UH7Cg=; _hjIncludedInSample=1; wrxBannerID=1; _gcl_au=1.1.2122930554.1562940990; ASP.NET_SessionId=nejpk2srmacslxi3zoc0ifi3; __RequestVerificationToken=NquluhuCjUXLwGUdIU-N5ABLFTGnLbtDZxV3jv22aT3Hpjkio6BqDei4-O6QmkWQ-oJwh-PpLLdLU3LdVZAH2m4Nl-U1',

        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();

    console.log(content);
})();