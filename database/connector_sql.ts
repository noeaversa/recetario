import { createPool, Pool} from 'mysql';
import { database } from './database_config'
const dataSource = database.DataSource;

let pool: Pool; //Pool deja la conexion a la bd abierta, es decir, que tenes la base cuando quieras ya corriendo


export const init = () => {
  try {
    pool = createPool({
      host: dataSource.db_host,
      user: dataSource.db_user,
      password: dataSource.db_password,
      database: dataSource.db_database,
    });

    console.debug('MySql generated successfully');
  } catch (error) {
    console.error('[mysql.connector][init][Error]: ', error);
    throw new Error('failed to initialized pool');
  }
};

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
  try {
    if (!pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');

    return new Promise<T>((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });

  } catch (error) {
    console.error('[mysql.connector][execute][Error]: ', error);
    throw new Error('failed to execute MySQL query');
  }
}