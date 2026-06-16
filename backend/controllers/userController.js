const db = require("../db");
//this for the inserting the data into db
const insertUser = (req, res) => {

    const { name, email } = req.body;

    const sql =
        "INSERT INTO users(name,email) VALUES(?,?)";

    db.query(sql, [name, email], (err, result) => {

        if (err) {
            console.log(err);
            res.send("Insert Fail");
        }
        
        else {
            res.send("Data inserted successfully");
        }

    });

};

//fetching the all the record from the db
const getUsers=(req,res)=>{

    const sql="SELECT * FROM users";

    db.query(sql,(err,result)=>{
         if(err){
            console.log(err);
            res.send("Fetch Failed");
         }
         else{
           // console.log(result);
            res.send(result);

         }

    });
};

//for the deleting the rec
const deleteUser=(req,res)=>{
    const id=req.params.id;

    const sql="DELETE FROM users WHERE id=?";
 
     db.query(sql,[id],(err,result)=>{
        if(err){
            res.send("err Duaring at deleted time")
            console.log(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("User Not Found");
        } 

        else{
            res.send("Data Deleted");
        }

     }) 
   }

//function to the update the user
const updateUser=(req,res)=>{
    const id=req.params.id;

    const{name,email}=req.body;

    const sql="UPDATE users SET name=?, email=? WHERE id=?";

    db.query(sql,[name,email,id],(err,result)=>{
        if(err){
            console.log(err);

            res.send("update Failed");
        }
        else{
            res.send("Record UPdated Successfully");
        }
    });
};

module.exports = {
    insertUser,
    getUsers,
    deleteUser,
    updateUser
};
