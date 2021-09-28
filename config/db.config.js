module.exports = {
  HOST: "bbpnew-cluster.cluster-cvtgekyvscg5.us-east-1.rds.amazonaws.com",
  USER: "bBpAdminDb",
  PASSWORD: "NGLAkI8pAmtF14pFc6Uv",
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

