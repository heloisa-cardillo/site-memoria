import { detalhesInfo } from './detalhesInfo.js'

// Espera o carregamento completo do DOM antes de executar
document.addEventListener('DOMContentLoaded', function () {

  const secaoInformacoes = document.getElementById('informacoes-detalhadas')
  const historicoInfo = []
  let idAtual = null

  if (secaoInformacoes) {
    console.log('Seção de informações detalhadas encontrada');

    // Função global para mostrar informações detalhadas 
    window.mostrarInformacoes = function (infoId, detalhesInfo, ehVoltar = false) {
      if (!detalhesInfo[infoId]) return
      else if (!ehVoltar && idAtual && idAtual !== infoId) {
        historicoInfo.push(idAtual)
      }
      // Atualiza o ID atual
      idAtual = infoId;

      // Insere o conteúdo detalhado na seção HTML dinamicamente
      secaoInformacoes.innerHTML = `
            <div class="info-container">
              <h2 class="info-title">${detalhesInfo[infoId].titulo}</h2>
              <div class="info-content">
                <div class="info-bio">
                  ${detalhesInfo[infoId].conteudo}
                </div>
                <div class="botoes-navegacao">
                  <button id="voltar-info" class="botao-voltar">Voltar</button>
                  <button id="fechar-info" class="botao-fechar">Fechar</button>
                </div>
              </div>
            </div>
          `

      secaoInformacoes.style.display = 'block'
      secaoInformacoes.scrollIntoView({ behavior: 'smooth' });

      // Para cada link com 'saiba-mais' dentro da seção, adiciona evento de clique para mostrar mais detalhes
      const novosLinks = secaoInformacoes.querySelectorAll('.saiba-mais');
      novosLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault()
          const novoId = this.getAttribute('data-id')
          if (detalhesInfo[novoId]) {
            console.log('Detalhes encontrados para o ID:', detalhesInfo[novoId]);
            window.mostrarInformacoes(novoId, detalhesInfo);
          } else {
            console.warn('Nenhum detalhe encontrado para o ID:', novoId);
          }
        });
      });

      // Botão Fechar para esconder a seção
      const botaoFechar = document.getElementById('fechar-info');
      if (botaoFechar) {
        botaoFechar.addEventListener('click', function () {
          secaoInformacoes.style.display = 'none'
        });
      }

      // Botão Voltar para retornar à última informação mostrada no histórico
      const botaoVoltar = document.getElementById('voltar-info');
      if (botaoVoltar) {
        botaoVoltar.addEventListener('click', function () {
          const idAnterior = historicoInfo.pop()

          if (idAnterior && detalhesInfo[idAnterior]) {
            window.mostrarInformacoes(idAnterior, detalhesInfo, true);
          } else {
            secaoInformacoes.style.display = 'none'
            idAtual = null
          }
        });
      }
    };

    // Ativa os links "Saiba mais" iniciais da página para que disparem mostrarInformacoes ao clicá-los
    const saibaMaisLinks = document.querySelectorAll('.saiba-mais')
    saibaMaisLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const infoId = this.getAttribute('data-id')
        if (detalhesInfo[infoId]) {
          window.mostrarInformacoes(infoId, detalhesInfo)
        }
      });
    });
  }

  const saibaMaisLinks = document.querySelectorAll('.saiba-mais')

  // Faz redirecionamento para páginas específicas ou usa heurística para descobrir o ID baseado no título do card
  saibaMaisLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (!this.getAttribute('target')) {
        e.preventDefault();

        let infoId = this.getAttribute('data-id')

        if (infoId === 'entrevistas') {
          window.location.href = 'templates individuais/entrevistas.html'
          return;
        }

        if (infoId === 'aeronaves') {
          window.location.href = 'templates individuais/aeronaves.html'
          return;
        }

        // Se não tem ID, tenta descobrir a partir do título do card pai
        if (!infoId) {
          const cardElement = this.closest('.card')
          const cardTitle = cardElement.querySelector('.card-title').textContent.trim()

          if (cardTitle.includes('EMB- 120')) {
            infoId = 'emb-120'
          } else if (cardTitle.includes('Guri na Fatec')) {
            infoId = 'guri'
          } else if (cardTitle.includes('Catálogos dos Laboratórios')) {
            infoId = 'laboratorios'
          }
        }

        // Se tem ID e detalhes disponíveis, mostra as informações; senão, mostra alerta
        if (infoId && detalhesInfo[infoId]) {
          window.mostrarInformacoes(infoId, detalhesInfo);
        } else {
          console.log('Informações para o ID:', infoId, 'não encontradas')
          alert('Informações não disponíveis no momento. Em breve teremos mais conteúdo!')
        }
      }
    })
  })
})
