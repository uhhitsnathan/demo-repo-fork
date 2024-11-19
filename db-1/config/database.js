import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

//envirotmnet variables are variales stukc into envitornsotjoisadofsd

const config = {
    connectionString:process.env.CONNECTION_STRING;
}

const pool = new pg.Pool(config);

export {pool};
