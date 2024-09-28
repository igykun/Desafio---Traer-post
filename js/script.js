//se crea una funcion asincrona llamada getPost(), el nombre salio del 'apoyo desafio - traer post' 
async function getPosts() {
    //se crea una constante postList que contiene una lista desornada creada en html
    const postsList = document.getElementById('postsList');
    //se vacia el contendio de la lista cada vez que se presione el boton
    postsList.innerHTML = ''; 

    //try/catch para evitar que un error bote el programa entero
    try {
        //se crea una constante response, la constante crea una conexcion con la API entregada
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Se revisa la conexion con la API
        if (!response.ok) {
            //se crea un mensaje de error
            throw new Error('Error al obtener los datos de la API');
        }

        const posts = await response.json(); // Se convierte a formato Json para poder leerse

        // Usamos un forEach para recorrer el array y publicarlo en la lista
        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            postsList.appendChild(listItem);
        });

    } catch (error) {
        // En caso de error un error aparecera en vez de la lista
        postsList.innerHTML = `<li>Error: ${error.message}</li>`;
    }
}