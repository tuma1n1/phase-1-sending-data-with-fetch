// Add your code here
function submitData(name, email){
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email })
    };
    return fetch('http://localhost:3000/users', config)
     .then(response => response.json()) 
     .then(data => {
      document.body.innerHTML += 
      `<p>New ID: ${data.id}</p>`;
    })
     .catch(error => {
      document.body.innerHTML += 
      `<p>Error: ${error.message}</p>`;
    });
};
