const newCommentFormHandler = async (event) => {
  event.preventDefault();
  
  const comment = document.querySelector('#comment').value.trim();
  const post_id = event.target.getAttribute("data-post-id");
  
  if (comment && post_id) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert(response.statusText);
    }
  }
}
  
  document.querySelector('.comment-form').addEventListener('submit', newCommentFormHandler);