const Pool =require("pg").Pool;

const pool= new Pool({
    user:'postgres',
    port:5432,
    password:'tiger',
    database:'postgres',
    host:'localhost',
});
module.exports=pool;