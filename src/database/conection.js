import sql from "mssql";

const dbSettings = {
  user: "c0ffee",
  password: "cofitopass",
  server: "localhost",
  database: "webstore",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

getConnection();
