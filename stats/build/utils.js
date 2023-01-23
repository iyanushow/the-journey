"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const [day, month, year] = dateString.split("/").map(val => parseInt(val));
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
