function showCategory(categoryName) {
    const categoryContents = document.querySelectorAll(".category-content");
    categoryContents.forEach((content) => content.classList.remove("active"));

    const selectedCategory = document.getElementById(categoryName);
    selectedCategory.classList.add("active");
    selectedCategory.classList.add("fade2");
}



function updateModal(status, text, descErro) {
    // ---> status: success ou fail + text: resumo erro + descErro: detalhes do erro
    const modal = document.getElementById("infoModal");
    const modalStatusElement = document.getElementById("modalStatus");
    const modalTextElement = document.getElementById("modalText");
    const logoModalElement = document.getElementById("logoModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const detalhes = document.getElementById("detalheErro");
    const errorDesc = document.getElementById("descErro");

    if (status === "success") {
        modalStatusElement.textContent = "Sucesso";
        modalTextElement.textContent = text;
        errorDesc.textContent = descErro;
        logoModalElement.src = "../../public/main/img/success.png";
    } else if (status === "fail") {
        detalhes.style.display = "block";
        modalStatusElement.textContent = "Falha";
        modalTextElement.textContent = text;
        errorDesc.textContent = descErro;
        logoModalElement.src = "../../public/main/img/fail.png";
    }

    modal.style.display = "flex";
    modalOverlay.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("infoModal");
    const modalOverlay = document.getElementById("modalOverlay");
    window.location.reload();
    modal.style.display = "none";
    modalOverlay.style.display = "none";
}




function simularExecucao(nome, desc, url) {
    const formExec = document.querySelector('.formExec');
    const tituloApp = document.getElementById('tituloApp');
    const descApp = document.getElementById('descApp');
    const valCont = document.getElementById('valCont');
    const errorMsg = document.getElementById('errorMsg');
    const inputs = document.getElementsByClassName("inputsExec");
    const buttons = document.getElementsByClassName('btnExec');

    fetch(url)
        .then(response => response.text())
        .then(data => {
            formExec.innerHTML = data;
            Array.from(inputs).forEach(input => {
                input.addEventListener("input", function () {
                    var divVerificadores = input.nextElementSibling;
                    if (divVerificadores) {
                        var paragrafos = divVerificadores.getElementsByTagName("p");
                        for (var j = 0; j < paragrafos.length; j++) {
                            var paragrafo = paragrafos[j];
                            var id = paragrafo.id;
                            if (id.startsWith("isNum-") && !/^\d+$/.test(input.value.trim())) {
                                paragrafo.style.color = 'red';
                                input.classList.add("campo-erro");
                                buttons.disabled = true;

                            } else {
                                paragrafo.style.color = '';
                                input.classList.remove("campo-erro");
                                buttons.disabled = false;


                            }
                        }
                    }

                });
                var inputs = document.querySelectorAll('.inputsExec');

                inputs.forEach(function (input) {
                    input.addEventListener("input", function () {
                        var divVerificadores = input.nextElementSibling;
                        if (divVerificadores) {
                            var paragrafos = divVerificadores.getElementsByTagName("p");
                            for (var j = 0; j < paragrafos.length; j++) {
                                var paragrafo = paragrafos[j];
                                var id = paragrafo.id;

                                if (id.startsWith("maxLen-") && paragrafo.textContent.includes("caracteres restantes")) {
                                    var maxCaracteres = parseInt(paragrafo.textContent.split(" ")[0]);
                                    paragrafo.style.display = 'none';

                                    var contadorCaracteres = divVerificadores.querySelector('.contador-caracteres');
                                    if (!contadorCaracteres) {
                                        contadorCaracteres = document.createElement('span');
                                        contadorCaracteres.className = 'contador-caracteres';
                                        divVerificadores.appendChild(contadorCaracteres);
                                    }

                                    var caracteresRestantes = maxCaracteres - input.value.length;

                                    if (caracteresRestantes <= 0) {
                                        input.value = input.value.slice(0, maxCaracteres);
                                    }

                                    if (caracteresRestantes < 0) {
                                        contadorCaracteres.style.color = 'red';
                                        input.classList.add("campo-erro");
                                        buttons.disabled = true;


                                    } else {
                                        contadorCaracteres.style.color = '';
                                        input.classList.remove("campo-erro");
                                        buttons.disabled = false;


                                    }

                                    contadorCaracteres.textContent = caracteresRestantes + ' caracteres restantes';
                                }
                            }
                        }
                    });
                });



                input.addEventListener("input", function () {
                    var divVerificadores = input.nextElementSibling;
                    if (divVerificadores) {
                        var paragrafos = divVerificadores.getElementsByTagName("p");
                        for (var j = 0; j < paragrafos.length; j++) {
                            var paragrafo = paragrafos[j];
                            var id = paragrafo.id;
                            var texto = paragrafo.textContent.trim();
                            if (id.startsWith("minLen-") && texto.includes("minimo de caracteres")) {
                                var minCaracteres = parseInt(texto.split(" ")[3]);

                                if (input.value.length < minCaracteres) {
                                    paragrafo.style.color = 'red';
                                    input.classList.add("campo-erro");
                                    buttons.disabled = true;


                                } else {
                                    paragrafo.style.color = '';
                                    input.classList.remove("campo-erro");
                                    buttons.disabled = false;

                                }
                            }
                        }
                    }
                });
            });
        })
        .catch(error => {
            console.error('Erro ao carregar a página: ' + error);
        });

    tituloApp.innerHTML = nome;
    descApp.innerHTML = desc;
    valCont.style.display = 'block';
    errorMsg.style.display = 'none';
}




function Verificador() {
    var inputs = document.getElementsByClassName("inputsExec");
    var algumVazio = false;
    const errorMsg = document.getElementById('errorMsg')

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var hasError = false;

        // Verifica se o campo está vazio
        if (input.value.trim() === '') {
            errorMsg.style.display = 'block'
            algumVazio = true;
            hasError = true;
        } else {
            errorMsg.style.display = 'none'

        }

        var divVerificadores = input.nextElementSibling;
        if (divVerificadores) {
            var paragrafos = divVerificadores.getElementsByTagName("p");

            for (var j = 0; j < paragrafos.length; j++) {
                var paragrafo = paragrafos[j];
                var id = paragrafo.id;
                var texto = paragrafo.textContent.trim();

                if (id.startsWith("isNum-") && !/^\d+$/.test(input.value.trim())) {
                    hasError = true;
                    paragrafo.style.color = 'red'; // Define a cor do texto como vermelho
                } else if (id.startsWith("maxLen-") && texto.includes("caracteres máximos")) {
                    // Verifica o número máximo de caracteres
                    var maxCaracteres = parseInt(texto.split(" ")[0]);
                    var caracteresRestantes = input.value.length;

                    if (caracteresRestantes > maxCaracteres) {
                        hasError = true;
                        paragrafo.style.color = 'red'; // Define a cor do texto como vermelho
                    } else {
                        paragrafo.style.color = ''; // Remove a cor do texto (usa o padrão)
                    }
                } else if (id.startsWith("minLen-") && texto.includes("minimo de caracteres")) {
                    // Verifica o número mínimo de caracteres
                    var minCaracteres = parseInt(texto.split(" ")[3]);

                    if (input.value.length < minCaracteres) {
                        hasError = true;
                        paragrafo.style.color = 'red'; // Define a cor do texto como vermelho
                    } else {
                        paragrafo.style.color = ''; // Remove a cor do texto (usa o padrão)
                    }
                } else {
                    paragrafo.style.color = ''; // Remove a cor do texto (usa o padrão)
                }
            }
        }

        if (hasError) {
            input.classList.add("campo-erro");
            algumVazio = true;

        } else {
            input.classList.remove("campo-erro");

        }
    }

    if (algumVazio) {
        hasError = true;

    }
    else {
        errorMsg.style.display = 'none'
    }


    if (!hasError && !algumVazio) {
        updateModal('success', 'Enviado com Sucesso!')
    }
}

