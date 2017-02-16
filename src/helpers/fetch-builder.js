export const postJson = (url, commentIds) => (
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ commentIds })
  })
  .then((res) => res.json())
)
