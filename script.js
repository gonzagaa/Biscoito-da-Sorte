

function handleTryClick() {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

    let randomNumber = Math.round(Math.random() * 10)

    switch(randomNumber) {
        case 0: document.querySelector(".screen2 h3").innerHTML = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
        break
        case 1: document.querySelector(".screen2 h3").innerHTML = "Nem todos os dias são bons, mas há algo bom em cada dia."
        break
        case 2: document.querySelector(".screen2 h3").innerHTML = "Siga confiante na direção dos seus sonhos. Viva a vida que imaginar."
        break
        case 3: document.querySelector(".screen2 h3").innerHTML = "Faça da alegria a maior certeza da sua vida, e o tempo se encarregará de permitir que grandes momentos aconteçam todos os dias."
        break
        case 4: document.querySelector(".screen2 h3").innerHTML = "Bom dia! Independentemente do que estiver sentindo, levante-se, vista-se e saia para brilhar."
        break
        case 5: document.querySelector(".screen2 h3").innerHTML = "Acredite no seu valor e prove a você mesmo que todos os sonhos são possíveis de alcançar."
        break
        case 6: document.querySelector(".screen2 h3").innerHTML = "Sinta carinho, goste, adore e ame! Mas, jamais precise de alguém pra ser feliz, além de você mesmo."
        break
        case 7: document.querySelector(".screen2 h3").innerHTML = "No tempo certo, tudo dará certo."
        break
        case 8: document.querySelector(".screen2 h3").innerHTML = "Atitude é uma coisa pequena que faz toda a diferença."
        break
        case 9: document.querySelector(".screen2 h3").innerHTML = "A persistência pode transformar um fracasso em um sucesso extraordinário!"
        break
        case 10: document.querySelector(".screen2 h3").innerHTML = "Não existe um caminho para a felicidade. A felicidade é o caminho."
        break
        default:
          break
        }
    }

function handleResetClick() {
    document.querySelector(".screen2").classList.add("hide")
    document.querySelector(".screen1").classList.remove("hide")
}

inputPhrases.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)