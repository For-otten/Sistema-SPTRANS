const errorMessage = document.getElementById('errorMessage');

const closetheerror = () => {
    errorMessage.style.display = 'none';
}

function carregarBanco(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        var formBanco = document.getElementById('formset-container');
        if (formBanco) {
          formBanco.innerHTML = data;
        } else {
          console.error('Elemento formset-container não encontrado.');
        }
      })
      .catch(error => {
        console.error('Erro ao carregar a página: ' + error);
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    var selectProce = document.getElementById('selectProce');

    selectProce.addEventListener('change', function() {
      if (selectProce.value === 'Banco 1') {
        carregarBanco('./formularioBanco/formulario1.html');
      }
    });
  });

  function reload(){
    window.location.reload();

  }