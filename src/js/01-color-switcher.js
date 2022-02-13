// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;
btnStop.disabled = true;
btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {    
    body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
     btnStart.setAttribute('disabled', 'true');
     btnStop.removeAttribute('disabled');
      }, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(timerId); 
  btnStart.removeAttribute('disabled');
  btnStop.disabled = true;
});



 