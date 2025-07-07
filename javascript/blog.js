// Select elements
const blogPosts = document.getElementById('blog-posts');
const blogForm = document.getElementById('blog-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');


blogForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title && content) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
    `;

    blogPosts.appendChild(post);

    titleInput.value = '';
    contentInput.value = '';
  } else {
    alert('Fill in both fields!');
  }
});