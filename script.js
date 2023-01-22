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
    const buttonBox = evilButton.getBoundingClientRect()
    console.log(buttonBox.x, buttonBox.y)
    console.log(distanceFromCenter(buttonBox.x, buttonBox.y))
})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2 
}