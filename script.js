let relogioContainer = document.getElementById("relogio")

function intervalo(){
    setInterval(() => {
        let agora = new Date()
        let horas = agora.getHours()
        let minutos = agora.getMinutes()
        let segundos = agora.getSeconds()

        relogioContainer.textContent = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
    }, 1000)         
}

setInterval(intervalo(), 1000)