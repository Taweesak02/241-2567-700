const BASE_URL = 'http://localhost:8000'
window.onload = async () => {
    await loadData()
}

const loadData = async () =>{
    console.log('user page loaded');
    //1 load all user from api 
    const response = await axios.get(`${BASE_URL}/users`);
    
    console.log(response.data);

    
    const userDOM = document.getElementById('user');

    //2. นำ user ทั้งหมด โหลด กลับเข้าไปใน html 

    let htmlData = `<table>`
    htmlData += `<tr id='table_header'>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>`

    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i]
        htmlData += `<tr>
        <td>${user.id}</td>
        <td>${user.firstname} ${user.lastname}</td>
        <td><a href = 'index.html?id=${user.id}'><button id='edit_button'>Edit</button></a></td>
        <td><button class = 'delete' id = 'del_button' data-id='${user.id}'>Delete</button></td>
        </tr>`
    }
    htmlData += '</table>'
    userDOM.innerHTML = htmlData;

    //3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            // ดึง  id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id;
            try{
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData()//recursive function เรียกใช้ฟังก์์ชัน ตัวเอง
            }catch(error){
                console.error('error',error);
            }
        })
    }
}