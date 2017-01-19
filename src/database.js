import Csv from 'csv-db';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, 'register.csv');
const initialize = () => {
  if (!fs.existsSync(dbPath)) {
    return new Csv(dbPath, ['id', 'username', 'tel']);
  }
  // return csv(db_path)
  return new Csv(dbPath, ['username', 'tel']);
};

const getAllData = () => {
  const db = initialize();
  return db.get().then((data) => {
    console.log(data);
    return data;
  }, (error) => {
    console.log(error);
  });
};

module.exports = {
  getAllData,
  initialize,
};
