"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
let manCityWins = 0;
for (const match of reader.data) {
    if (match[1] === "Man City" && match[5] === "H") {
        manCityWins++;
    }
    else if (match[2] === "Man City" && match[5] === "A") {
        manCityWins++;
    }
}
console.log(manCityWins);
