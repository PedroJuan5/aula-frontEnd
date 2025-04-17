function fetchObjetos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((resposta) => resposta.json())
    .then((posts) => {
        const postContainer = document.getElementById("posts");


        posts.forEach((post) => {
            console.log(post.title)
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            //Montar um h2 -> title
            const postTitle = document.createElement("h2")
            postTitle.textContent = "Bangu";

            // Montar a tag p e buscar o body
            const postBody =  document.createElement("p");
            postBody.textContent = post.body;

            //Adicionar estrura na tela
            // Chamar estrutura HTML
            postDiv.appendChild(postTitle);

            postContainer.appendChild(postDiv);
        });
    });
}

//chamando a função
fetchObjetos();