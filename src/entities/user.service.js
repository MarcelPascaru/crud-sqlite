import dbManager from "../db.manager.js";

const database = dbManager.db;

/**
 * Get all users.
 *
 * @param req
 * @param res
 */
const getAllUsers = (req, res) => {
  database.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.json({ users: rows });
  });
};

/**
 * Create user.
 *
 * @param req
 * @param res
 */
const createUser = (req, res) => {
  const insertQuery = `INSERT INTO users (name, age, date)VALUES (?, ?, ?)`;
  const name = req.body.name;
  const age = req.body.age;
  const date =
      new Date().toISOString().replace("T", " ").split(".")[0] +
      "Z".replace("Z", " ");

  database.run(insertQuery, [name, age, date], function (err) {
    if (err) {
      return res.status(500).json({error: err.message});
    }

    return res.status(201).json({
        id: this.lastID
    });
  });
};

export default {
  getAllUsers,
  createUser,
};
