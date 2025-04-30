import { pool } from "../db.config.js";

export const insertReview = async ({ storeId, userId, rating, content }) => {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO review (store_id, user_id, rating, content)
            VALUES (?, ?, ?, ?)`,
      [storeId, userId, rating, content]
    );
    return result.insertId;
  } finally {
    conn.release();
  }
};
