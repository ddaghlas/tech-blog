const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const post = document.querySelector('.edit-form');
    const id = post.dataset.post_id;

    if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }

  const deleteFormHandler = async (event) => {
    event.preventDefault();

    const post = document.querySelector('.edit-form');
    id = post.dataset.post_id;

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-btn').addEventListener('submit', editFormHandler);
  document.querySelector('.delete-post-btn').addEventListener('submit', deleteFormHandler);