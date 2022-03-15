// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const documentScreen = document.querySelector('body')
const wordScreen = document.querySelector('#word')
console.log(wordScreen)
let i = 0

setInterval(() => {
  const colorsFetch = fetch('apiJson/colors.json').then(response => {
    response.json().then(response => {
      const colors = Object.values(response)
      const lengthColors = colors.length - 1
      lengthColors === i
        ? (i = 0)
        : ((documentScreen.style.backgroundColor = colors[i]),
          (wordScreen.style.backgroundColor = colors[i++]))
    })
  })
}, 900)

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).
