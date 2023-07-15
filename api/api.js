// var express = require("express");
// var cors = require("cors");
// var app = express();
// app.listen(5501, function () {
//   console.log("CORS-enabled web server listening on port 5501");
// });
// app.use(cors());
// const axios = require("axios");
// const http = require("http");
// let response = null;
// let info = [];
// let forex = [];
// let all = [];

// axios
//   .get(
//     "http://apilayer.net/api/live?access_key=9f3dfebf16e80154da0583231bad50b9&currencies=EUR,GBP,CAD,PLN&source=USD&format=1"
//   )
//   .then((response) => {
//     forex.push(response.data.quotes);
//     console.log(forex);
//   });

// new Promise(async (resolve, reject) => {
//   try {
//     response = await axios.get(
//       "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",

//       {
//         headers: {
//           "X-CMC_PRO_API_KEY": "fa3e9c10-5af3-4740-b219-6aaa248f7d6d",
//         },
//       }
//     );
//   } catch (ex) {
//     response = [null];
//     console.log(ex);
//     reject(ex);
//   }
//   if (response) {
//     const name = response.data;
//     name.data.forEach((element) => {
//       const symbol = element.symbol;
//       const priceSymb = element.quote.USD.price;
//       info.push([[symbol], [priceSymb]]);
//     });
//   }
// });
// all = [forex, info];
// const server = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.write(JSON.stringify(all));
//   console.log(info);
//   response.end();
// });
// server.listen(5000, 5501);
