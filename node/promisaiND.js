function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => alert('runs after 3 seconds'));






fetch('/article/promise-chaining/user.json')
    // .then below runs when the remote server responds
    .then(function (response) {
        // response.text() returns a new promise that resolves with the full response text
        // when it loads
        return response.text();
    })
    .then(function (text) {
        // ...and here's the content of the remote file
        alert(text); // {"name": "iliakan", "isAdmin": true}
    });







// same as above, but response.json() parses the remote content as JSON
fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => alert(user.name)); // iliakan, got user name







// Make a request for user.json
fetch('/article/promise-chaining/user.json')
    // Load it as json
    .then(response => response.json())
    // Make a request to GitHub
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // Load the response as json
    .then(response => response.json())
    // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
    .then(githubUser => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });