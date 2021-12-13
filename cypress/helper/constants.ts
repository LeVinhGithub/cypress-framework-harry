export const credential = {
  staging: {
    username: "vinh.le@iruuza.com",
    password: "123456",
  },
  tabledef: {
    username: "e2etabledef@iruuza.com",
    password: "123456",
  },
  apis: {
    username: "e2eapisf@iruuza.com",
    password: "123456",
  },
  dash: {
    username: "e2edash@iruuza.com",
    password: "123456",
  },
  module: {
    username: "e2emodule2@iruuza.com",
    password: "123456",
  },
};

export const isE2ELocalCI = Cypress.env("e2eLocalCI");
