// Function to handle volunteer form submission
document.getElementById('volunteer-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  if (name && email) {
    alert(`Thank you, ${name}! You are now signed up to volunteer.`);
  }
});

// Function to add a new post to the discussion forum
function addPost() {
  let postContent = document.getElementById('new-post').value;
  if (postContent) {
    let postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.textContent = postContent;
    document.getElementById('forum-posts').appendChild(postDiv);
    document.getElementById('new-post').value = ''; // Clear the textarea
  }
}
