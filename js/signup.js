const signupForm = document.querySelector('#signupForm')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Capturar valores del formulario
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const phone = document.querySelector('#phone').value
    const birthdate = document.querySelector('#birthdate').value
    const address = document.querySelector('#address').value

    // Obtener usuarios almacenados en localStorage o inicializar array vacío
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)

    if (isUserRegistered) {
        return alert('¡El usuario ya está registrado!')
    }

    // Guardar nuevo usuario con todos los datos
    Users.push({ name, email, password, phone, birthdate, address })
    localStorage.setItem('users', JSON.stringify(Users))

    alert('¡Registro exitoso!')
    window.location.href = 'login.html'
})


const Users = JSON.parse(localStorage.getItem('users')) || []

if (Users.length === 0) {
    console.log('No hay usuarios registrados aún.')
} else {
    Users.forEach(user => {
        console.log(`Nombre: ${user.name}`)
        console.log(`Correo: ${user.email}`)
        console.log(`Teléfono: ${user.phone || 'No registrado'}`)
        console.log(`Fecha de nacimiento: ${user.birthdate || 'No registrada'}`)
        console.log(`Dirección: ${user.address || 'No registrada'}`)
        console.log('--------------------------------------')
    })
}
