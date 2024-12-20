for(let i = 0; i <= 3; i++ ){
fetch('https://jsonplaceholder.typicode.com/users/' + i)
    .then(response => response.json())
    .then(function(user) {
        let testEL = document.getElementById("test");
        testEL.innerHTML += JSON.stringify(user.address);
        console.log(user.address)
    })
}