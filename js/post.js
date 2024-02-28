function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add('post')
    console.log(post);
    postDiv.innerHTML=`
    <h5>user-${post.userId}</h5>
    <h5>id:${post.id}</h5>
    <h5>Post:${post.title}</h5>
    <p>Post Description:${post.body}</p>
    `;
    postsContainer.appendChild(postDiv);
  }
}

loadPosts();
