var header = document.createElement("h2")
header.innerHTML="User Details"
header.className="titlename"
document.body.append(header)






fetch('https://60c98aa8772a760017203b57.mockapi.io/users')
.then(data=>data.json())
.then(users => loadusers(users))  

function loadusers(users){
  const userList = document.createElement("div");
  userList.className="listdiv";


  users.forEach((user) => 
{
  const userContainer = document.createElement("div");
  userContainer.className="container"
  userContainer.innerHTML = `
    <div class = "pic"><img src="${user.avatar}"></div>
    <p class = "name">      Name : <span class="content">${user.name}</span></p>
    <p class = "id">      Id : <span class="content">${user.id}</span></p>
    <p class = "created">   Created on : <span class="content">${user.createdAt}</span></p>
`;
  userList.append(userContainer);
});


document.body.append(userList);
};
