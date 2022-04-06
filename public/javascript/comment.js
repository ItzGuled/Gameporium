async function commentRateFormHandler(event) {
    event.preventDefault();
  
    //will have to change this to reflect the part of the comment body
    const comment_text = document.querySelector('textarea[name="comment-section"]').value.trim();
    //will have to change this to reflect the part of the rating body
    const rating = document.querySelector('textarea[name="rating-body"]').value.trim();
    const game_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/commentrates', {
        method: 'POST',
        body: JSON.stringify({
          comment_text,
          rating
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  //
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
  