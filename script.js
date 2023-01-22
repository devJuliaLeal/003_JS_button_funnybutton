const evilButton = document.getElementById('evil-button')
const simButton =document.getElementById('sim-button')

evilButton.addEventListener('click' , () => {
    alert('até parece')
    window.close()
})

simButton.addEventListener('click', () => {
    alert('Eu também te amo')

})

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    console.log(x,y)
})