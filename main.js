$(document).ready(function(){
    $('button').click(function(){
        const userEmpty = $('#gituserempty').val();
        const endPoint = `https://api.github.com/users/${userEmpty}`

    const gitName = document.querySelector("#gitName")
    const gitUser = document.querySelector("#gitUser")
    const gitTarefas = document.querySelector("#gitTarefas")
    const gitFallowers = document.querySelector("#gitFallowers")
    const gitFallowing = document.querySelector("#gitFallowing")
    const gitLink = document.querySelector("#gitLink")
    const gitAvatar = document.querySelector("#gitAvatar")

    
    fetch(endPoint).then(function(response){
            return response.json();
        })
        .then(function(json){
            const avatar = json.avatar_url
            const user = json.login
            const name = json.name;
            const tarefas = json.public_repos;
            const fallowers = json.followers;
            const fallowing = json.following;
            const link = json.html_url;

            gitAvatar.src = avatar;
            gitUser.innerHTML = user;
            gitName.innerHTML = name;
            gitTarefas.innerHTML = tarefas;
            gitFallowers.innerHTML = fallowers
            gitFallowing.innerHTML = fallowing
            gitLink.href = link;
            
        })
    })
})  