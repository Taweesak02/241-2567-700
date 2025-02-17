const express = require('express');
const bodyparset = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;

app.use(bodyparset.json());

let users = []

let conn = null;

const initMySQL = async() => {
  conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'webdb',
      port: 8820
  })
}
/*
app.get('/testdbnew', async(req, res) => {

  try{
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])

  } catch(error){
    console.log('error',error.message)
      res.status(500).json({error: "Error fetching users"})
  }
})*/

/*
  GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
  POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
  GET /users/:id สำหรับตึง users รายคนออกมา
  PUT /users/:id สำหรับแก้ไขข้อมูล users รายคน ตาม id ที่บันทึกไว้
  DELETE /users/:id สำหรับลบข้อมูล users รายคน ตาม id ที่บันทึกไว้
*/

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async(req, res) => {
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])
});

// path = GET /users/:id สำหรับตึง users รายคนออกมา
app.get('/users/:id', (req, res) => {
  let id = req.params.id;
  // ค้นหา users หรือ index ที่ต้องการดึงข้อมูล
  let selectedIndex = users.findIndex(user => user.id == id)
   
  res.json(users[selectedIndex]);
})

  
//path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', async(req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?',user)
    console.log('result',results)
    res.json({
      message: "Create user successfully",
      data: results[0]
    })  
    
})
 
//path: PUT /users/:id สำหรับแก้ไขข้อมูล users รายคน ตาม id ที่บันทึกไว้
app.put('/users/:id', (req, res) => { 
  let id = req.params.id;
  let updateUser = req.body;
  // หา users จาก id ที่ต้องการแก้ไข
  let selectedIndex = users.findIndex(user => user.id == id)
  
  users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
  users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
  users[selectedIndex].age = updateUser.age || users[selectedIndex].age;
  users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender;
  
  res.json({
    message: "Update user successfully",
    data: {
      user : updateUser, 
      indexUpdated: selectedIndex
    }
  });
})

//path: DELETE /users/:id สำหรับลบข้อมูล users รายคน ตาม id ที่บันทึกไว้
app.delete('/users/:id', (req, res) => {
  let id = req.params.id;
  //หา index ของ user ที่ต้องการลบ
  let selectedIndex = users.findIndex(user => user.id == id)

  //ลบ
  users.splice(selectedIndex,1);
  res.json({
    message: "Delete user successfully",
    indexDeleted: selectedIndex
  });

}); 

app.listen(port, async(req,res) => {
  await initMySQL()
  console.log(`Http Server is running on port ${port}`);
});