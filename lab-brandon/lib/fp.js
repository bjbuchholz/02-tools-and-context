"use strict";

const fp = {};

fp.forEach = (array, callback) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

fp.map = (array, callback) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

fp.filter = (array, callback) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}


fp.reduce = (array, callback, initialState) => {
    let result = initialState;
    if (array.length === 0 || array === null) {
        return undefined;
    } else {
        for (let i = 0; i < array.length; i++) {
            result = callback(result, array[i]);
        }
    }
    return result;
}

module.exports = fp; 
