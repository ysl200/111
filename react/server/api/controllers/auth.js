
import {db} from "../db.js"
import bcrypt from "bcrypt"
export const register = (req, res) => {
    
    //检查用户是否存在
    const q = "SELECT * FROM user WHERE username = ? OR userphone = ?"

    db.query(q, [req.body.username, req.body.userphone], (err, data)=>{
        
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`userphone`,`password`) VALUES (?)";
        const values = [req.body.username, req.body.userphone, hash];

        db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
        });
    });
}

export const login = (req, res) => {

}

export const logout = (req, res) => {

}