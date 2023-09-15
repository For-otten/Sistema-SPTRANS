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
    // Seletor de mudança para o menu suspenso
    var selectProce = document.getElementById('selectProce');

    // Adicione um evento de mudança ao menu suspenso
    selectProce.addEventListener('change', function() {
      // Verifique se o valor selecionado é 'Banco 1'
      if (selectProce.value === 'Banco 1') {
        carregarBanco('./formularioBanco/formulario1.html');
      }
    });
  });

  function reload(){
    window.location.reload();

  }