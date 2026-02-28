function atualizarRelogios() {
    const sp = new Date().toLocaleTimeString("pt-br", { timeZone: "America/Sao_Paulo"});

    const ny = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York"});

    const london = new Date().toLocaleTimeString("en-GB", {timeZone: "Europe/London"});

    const tokyo = new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo"});

    document.getElementById("sp").innerText = sp;
    document.getElementById("ny").innerText = ny;
    document.getElementById("london").innerText = london;
    document.getElementById("tokyo").innerText = tokyo;

}

// atualiza a cada 1 segundo
setInterval(atualizarRelogios, 1000);
atualizarRelogios();