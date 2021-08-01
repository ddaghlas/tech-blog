const newFormHandler = async (event) => {
    event.preventDefault();
    
    const author = document.querySelector('#post-author').value.trim();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (author && title && content) {
    const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
          author,
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
        alert('Unable to create post');
      }
    }
  };

  const deleteBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });

      if(response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Unable to delete post');
      }
    }
  };
  
  document.querySelector('.new-post-form').addEventListener('click', newFormHandler);
  document.querySelector('.post-list').addEventListener('click', deleteBtnHandler);