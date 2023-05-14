const btnChange = document.querySelector('#btn-change-theme')
const body = document.querySelector('body')


btnChange.addEventListener('click', () => {
    
    const imgBtn = document.querySelector('.img-btn')
    body.classList.toggle('dark-mode')

    if ( body.classList.contains('dark-mode') ) {
        imgBtn.setAttribute('src', './src/img/moon.png')
    } else {
        imgBtn.setAttribute('src', './src/img/sun.png')
    }
})