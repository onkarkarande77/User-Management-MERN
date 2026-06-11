const mysql=require("mysql2");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pass@123",
    database:"reactdb"
});

db.connect((err)=>{

    if(err){
        console.log("database Error");
        console.log(err);
    }
    else{
        console.log("database connected")
    }
})

module.exports=db;