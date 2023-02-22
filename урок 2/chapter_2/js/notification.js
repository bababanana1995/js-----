update()
document.querySelector('.notification__form button').addEventListener('click',
    function () {
        let time = document.querySelector('.notification__form input').value
        let message = document.querySelector('.notification__form textarea').value

        let info = document.querySelector('.notification__info')

        if (!time || !message) {
            info.textContent = "Укажите время и собщение"
            info.style.opacity = 1
            setTimeout(() => {
                info.style.opacity = 0
            }, 2000)
            setTimeout(() => {
                info.textContent = ''
            }, 3000)
            return
        }
        localStorage.setItem(time, message)
        update()
    })

document.querySelector('.notification__list > button').addEventListener('click',
    function () {
        if (localStorage.length && confirm("Очистить список уведомлений?")) {
            localStorage.clear()
            update()
            document.querySelector('.notification__list').hidden = true
        } else if (!localStorage.length) {
            alert("Уведомлений нет!")
        }
    })
function update() {
    if (!localStorage.length) {
        document.querySelector('.notification__list').hidden = true
    } else {
        document.querySelector('.notification__list').hidden = false
    }
    document.querySelector('.notification__list > div').innerHTML = ''
    document.querySelector('.notification__info').textContent = ''
    
    for (let key of Object.keys(localStorage)) {
        document.querySelector('.notification__list > div').insertAdjacentHTML
document.querySelector('.notification__list > div').insertAdjacentHTML('beforeend', `
  <div class="notification__item">
    <div>${key} - ${localStorage.getItem(key)}</div>  
    <button data-time="${key}">&times;</button>
  </div>
`)
    }
    document.querySelector('.notfication__form input').value = ''
    document.querySelector('.notfication__form textarea').value = ''
    if(document.querySelector('.audioAlert')){
    document.querySelector('.audioAlert').remove()
    }
}

document.querySelector('.notification__list')