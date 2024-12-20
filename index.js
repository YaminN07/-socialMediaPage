

function findName(id, str){
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
        .then(function(user) {
            let testEL = document.getElementById(str);
            testEL.innerHTML += JSON.stringify(user.name);
        })
}
   
function findUsername(id, str) {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
        .then(function(user) {
            let testEL = document.getElementById(str);
            testEL.innerHTML += JSON.stringify(user.username);
        })
}


function getComment (id, str){
    fetch('https://jsonplaceholder.typicode.com/comments/' + id)
        .then(response => response.json())
        .then(function(comment) {
            let testEL = document.getElementById(str);
            testEL.innerHTML += JSON.stringify(comment.body);
        })
}


function getPost (id, str){
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
        .then(function(post) {
            let testEL = document.getElementById(str)
            testEL.innerText += " " + post.body
        })
}


function getTodo (id, str){
    fetch('https://jsonplaceholder.typicode.com/todos/' + id)
        .then(response => response.json())
        .then(function(todo) {
            let testEL = document.getElementById(str)
            testEL.innerText += " " + todo.title
        })
}


function getTodoStatis (id, str){
    fetch('https://jsonplaceholder.typicode.com/todos/' + id)
        .then(response => response.json())
        .then(function(todo) {
            let testEL = document.getElementById(str)
            testEL.innerText += " " + todo.completed
            console.log(todo.completed)
        })
}


for (let i = 1; i < 11 ; i++){

    document.body.innerHTML += '<div> <p>Profile Img:</p> <img id="profileImg" src="https://unsplash.it/1920/1080?random' + i + '"><p id="name' + i + '"> Names: </p><p id="username' + i + '">Username: </p><p id="comment' + i + '">Comment: </p><p id="post' + i + '">Post: </p><p id="todo' + i + '">Todo: </p><p id="todosStatus' + i + '">Is todo completed: </p></div>';

    findName(i, "name" + i)
    findUsername(i, "username" + i)
    getComment(i, "comment" + i)
    getPost(i, "post" + i)
    getTodo(i, "todo" + i)
    getTodoStatis(i, "todosStatis" + i)
}
