const baseURL = 'http://localhost:4000/api/';

document.getElementById("complimentButton").onclick = function () {
    axios.get(`${baseURL}compliment/`)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};


const fortuneBtn = document.getElementById('fortunesButton');


const getFortunes = () => axios.get(`${baseURL}fortune/`).then(res => alert(res.data));
fortuneBtn.addEventListener("click", getFortunes);



const createUser = body => axios.post(`${baseURL}user/`, body).then(res => console.log(res.data));
const deleteUser = id => axios.delete(`${baseURL}user/${id}`).then(res => console.log(res.data));
const editUser = (id, body) => axios.put(`${baseURL}user/${id}`, body).then(res => console.log(res.data));

const addUserBtn = document.getElementById('addUser');
const deleteUserBtn = document.getElementById('deleteUser');
const editUserBtn = document.getElementById('editUser');
const editUserDialogBtn = document.getElementById('editUserDialog');


const addUser = () => {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const newUser = {
    username: username.value,
    password: password.value
  }
  createUser(newUser);
}


const deleteUserAction = () => {
  const id = document.getElementById('deleteID').value;
  deleteUser(id);
}

const getUserID = () => {
  const dialog = document.getElementById('dialog');
    dialog.show();  
}

const editUserEvent = eve => {
  eve.preventDefault();
  const id = document.getElementById('editID').value;
  const username = document.getElementById('usernameDialog').value;
  const password = document.getElementById('passwordDialog').value;
  
  const updateUser = {
    username: username,
    password: password
  }

  editUser(id, updateUser);

  const dialog = document.getElementById('dialog');
  dialog.close();
}



addUserBtn.addEventListener('click', addUser);
deleteUserBtn.addEventListener('click', deleteUserAction);
editUserBtn.addEventListener('click', getUserID);
editUserDialogBtn.addEventListener('click', editUserEvent);