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
        
        //fetch catch finally

        fetch(endPoint).then(function(response){
            if(!response.ok) {
                throw new Error ('Try again later!')
            } return response.json();
        })
            .then(function(resposta){
                    
                const avatar = resposta.avatar_url
                const user = resposta.login
                const name = resposta.name;
                const tarefas = resposta.public_repos;
                const fallowers = resposta.followers;
                const fallowing = resposta.following;
                const link = resposta.html_url;
        
                gitAvatar.src = avatar;
                gitUser.innerHTML = user;
                gitName.innerHTML = name;
                gitTarefas.innerHTML = tarefas;
                gitFallowers.innerHTML = fallowers
                gitFallowing.innerHTML = fallowing
                gitLink.href = link;
        })
        .catch(function(error){
            alert('Teve algum problema!', error)
        })
        .finally(function(){
            $('#gituserempty').val('')
        })

        //Ajax

        // $.ajax(endPoint).done(function(resposta){
        //     const avatar = resposta.avatar_url
        //     const user = resposta.login
        //     const name = resposta.name;
        //     const tarefas = resposta.public_repos;
        //     const fallowers = resposta.followers;
        //     const fallowing = resposta.following;
        //     const link = resposta.html_url;

        //     gitAvatar.src = avatar;
        //     gitUser.innerHTML = user;
        //     gitName.innerHTML = name;
        //     gitTarefas.innerHTML = tarefas;
        //     gitFallowers.innerHTML = fallowers
        //     gitFallowing.innerHTML = fallowing
        //     gitLink.href = link;
        // })

    // Json

    // const gitName = document.querySelector("#gitName")
    // const gitUser = document.querySelector("#gitUser")
    // const gitTarefas = document.querySelector("#gitTarefas")
    // const gitFallowers = document.querySelector("#gitFallowers")
    // const gitFallowing = document.querySelector("#gitFallowing")
    // const gitLink = document.querySelector("#gitLink")
    // const gitAvatar = document.querySelector("#gitAvatar")
    
    // fetch(endPoint).then(function(response){
    //         return response.json();
    //     })
    //     .then(function(json){
    //         const avatar = json.avatar_url
    //         const user = json.login
    //         const name = json.name;
    //         const tarefas = json.public_repos;
    //         const fallowers = json.followers;
    //         const fallowing = json.following;
    //         const link = json.html_url;

    //         gitAvatar.src = avatar;
    //         gitUser.innerHTML = user;
    //         gitName.innerHTML = name;
    //         gitTarefas.innerHTML = tarefas;
    //         gitFallowers.innerHTML = fallowers
    //         gitFallowing.innerHTML = fallowing
    //         gitLink.href = link;
            
    //     })

        
    })
})  