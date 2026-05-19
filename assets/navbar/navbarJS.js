fetch('gavinB579.github.io/assets/navbar/navbarHTML.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });