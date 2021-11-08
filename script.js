//choose element
const container = document.querySelector('.container')
const imageSection = document.querySelector('.image-section')
const textSection = document.querySelector('.text-section')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sectionLength = textSection.querySelectorAll('div').length

let sectionIndex = 0

textSection.style.top = `-${(sectionLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeDirection('up'))
downButton.addEventListener('click', () => changeDirection('down'))

const changeDirection = (direction) => {
    const sectionHeight = container.clientHeight
    if(direction === 'up') {
        sectionIndex++
        if(sectionIndex > sectionLength - 1){
            sectionIndex = 0
        }
    } else if(direction === 'down') {
        sectionIndex--
        if(sectionIndex < 0){
            sectionIndex = sectionLength - 1
        }
    }

    imageSection.style.transform = `translateY(-${sectionIndex * sectionHeight}px)`
    textSection.style.transform = `translateY(${sectionIndex * sectionHeight}px)`
}