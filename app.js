var algorithmia = require("algorithmia");

var input = ["data://Aluxian/AffinityAnalysisFPGrowthSample/groceries.csv", "-M 0.001"];
algorithmia.client("API KEY HERE")
           .algo("algo://Aluxian/AffinityAnalysisFPGrowth/0.1.0")
           .pipe(input)
           .then(function(response) {
             console.log(response.get());
           });