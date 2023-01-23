const evilButton = document.getElementById('evil-button')
const OFFSET =100
const simButton =document.getElementById('sim-button')

evilButton.addEventListener('click' , () => {
    alert('até parece')
    window.close()
})

/*simButton.addEventListener('click', () => {
    alert('Eu também te amo')

})*/

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = evilButton.getBoundingClientRect()
    const verticalDistanceFrom= distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const horizontalDistanceFrom= distanceFromCenter(buttonBox.y,y, buttonBox.width)
    const horizontalOffset = buttonBox.width/2 + OFFSET
    const verticalOffset = buttonBox.height/2 + OFFSET
    if (Math.abs(horizontalDistanceFrom)<= horizontalOffset && Math.abs(verticalDistanceFrom)<= verticalOffset)
    setButtonPosition(
        buttonBox.x + horizontalOffset/ horizontalDistanceFrom
    )



})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2 
}