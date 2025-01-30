


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const users = JSON.parse(xhr.responseText);
    users.forEach(user => {
      console.log(user.name);
    });
  }
};

xhr.send();
