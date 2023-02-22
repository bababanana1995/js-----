function generateCss() {


    let input = document.querySelector('input[for="result"]');
    let fontSelect = document.getElementById('font-family')
    let h2 = document.getElementById('result');

    fontSelect.addEventListener('change', (event) => {
        let selectedFont = event.target.value;
        h2.style.fontFamily = selectedFont;
    });

    input.addEventListener('input', () => {
        h2.textContent = input.value;
    })

    let fontSize = document.getElementById('font-size').value

    let fontFamily = document.getElementById('font-family').value

    let offsetX = document.getElementById('offsetX').value
    let offsetY = document.getElementById('offsetY').value
    let blur = document.getElementById('blur').value


    let colorText = document.getElementById('colorText').value



    let color = document.getElementById('color').value
    let red = parseInt(color.slice(1, 3), 16)
    let green = parseInt(color.slice(3, 5), 16)
    let blue = parseInt(color.slice(5, 7), 16)
    let opacity = document.getElementById('opacity').value


    let result = document.getElementById('result')
    let textarea = document.getElementById('cssCode')

    let str = `${offsetX}px ${offsetY}px ${blur}px rgba(${red}, ${green}, ${blue}, ${opacity})`

    let font = `${fontSize}px`
    let colorH2 = `${colorText}`
    let fontF = `${fontFamily}`

    textarea.textContent = 'text-shadow:' + str + ';' + '\n' + 'font-size:' + font + ';' + '\n' + 'color:' + colorH2 + ';' + '\n' + 'font-family:' + fontF + ';'
    result.style.textShadow = str
    result.style.fontSize = font
    result.style.color = colorText
    result.style.fontFamily = fontF


}

for (let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateCss)

}
generateCss()