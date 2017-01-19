'use strict';
import csv from 'csv-db';
import fs from 'fs';
import path from 'path';
const db_path = path.join(__dirname, 'register.csv');
const initialize = () => {
    if (!fs.existsSync(db_path)) {
        return new csv(db_path, ['id', 'username', 'tel']);
    }
    // return csv(db_path);
    return new csv(db_path, ['username', 'tel']);
};

const getAllData = () => {
    const db = initialize();
    return db.get().then(data => {
        console.log(data);
        return data;
    }, error => {
        console.log(error);
    });
}

module.exports = {
    getAllData,
    initialize
}