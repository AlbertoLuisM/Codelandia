const login = document.getElementById('login')

login.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = document.getElementById('email').value
    let psswd = document.getElementById('passowd').value
    let data = {
        email,
        psswd,
    }
    let convertData = JSON.stringify(data)
    
    localStorage.setItem('user', convertData)
})