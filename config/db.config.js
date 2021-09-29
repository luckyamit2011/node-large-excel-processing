module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "developBBPDBNew",
  dialect: "mysql",
  pool: {
    max: 500,
    min: 0,
    acquire: 30000,
    idle: 10000,
    acquireTimeout: 1000000,
  }
};

