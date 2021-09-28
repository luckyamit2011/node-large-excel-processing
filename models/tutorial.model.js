module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("agency_staging", {
   
    DeptID: {
      type: Sequelize.STRING
    },
    DeptType: {
      type: Sequelize.STRING
    },
    FirstName: {
      type: Sequelize.STRING
    },
    MI: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    Title: {
      type: Sequelize.STRING
    },
    MailingLine1: {
      type: Sequelize.STRING
    },
    MailingLine2: {
      type: Sequelize.STRING
    },
    MailingAddress: {
      type: Sequelize.STRING
    },
    MailingCity: {
      type: Sequelize.STRING
    },
    MailingState: {
      type: Sequelize.STRING
    },
    MailingZip: {
      type: Sequelize.STRING
    },
    PhysAdd: {
      type: Sequelize.STRING
    },
    PhysCity: {
      type: Sequelize.STRING
    },
    PhysST: {
      type: Sequelize.STRING
    },
    PhysZip: {
      type: Sequelize.STRING
    },
    County: {
      type: Sequelize.STRING
    },
    Population: {
      type: Sequelize.STRING
    },
    Specializations: {
      type: Sequelize.STRING
    },
    Officers: {
      type: Sequelize.STRING
    },
    JailCapacity: {
      type: Sequelize.STRING
    },
    Phone: {
      type: Sequelize.STRING
    },
    PhoneExt: {
      type: Sequelize.STRING
    },
    Fax: {
      type: Sequelize.STRING
    },
    FaxExt: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};