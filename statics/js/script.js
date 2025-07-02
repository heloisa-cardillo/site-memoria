document.addEventListener('DOMContentLoaded', function() {
  
  const tituloPrincipal = document.getElementById('titulo-principal');
  if (tituloPrincipal) {
    console.log('Título principal encontrado:', tituloPrincipal.textContent);
    tituloPrincipal.addEventListener('click', function() {
      alert('Bem-vindo ao Centro de Memória FATEC!');
    });
  }
  
  
  const secaoInformacoes = document.getElementById('informacoes-detalhadas');
  if (secaoInformacoes) {
    console.log('Seção de informações detalhadas encontrada');
    
   
    window.mostrarInformacoes = function(infoId, detalhesInfo) {
      if (detalhesInfo[infoId]) {
        secaoInformacoes.innerHTML = `
          <div class="info-container">
            <h2 class="info-title">${detalhesInfo[infoId].titulo}</h2>
            <div class="info-content">
              <div class="info-bio">
                ${detalhesInfo[infoId].conteudo}
              </div>
              <button style="display: block; margin: 20px auto; padding: 8px 15px; background-color: #005c6e; color: white; border: none; border-radius: 4px; cursor: pointer;">Ler entrevista Completa</button>
            </div>
            <button id="fechar-info" style="display: block; margin: 20px auto; padding: 8px 15px; background-color: #005c6e; color: white; border: none; border-radius: 4px; cursor: pointer;">Fechar</button>
          </div>
        `;
        
        secaoInformacoes.style.display = 'block';
        secaoInformacoes.scrollIntoView({ behavior: 'smooth' });
        
      
        const botaoFechar = document.getElementById('fechar-info');
        if (botaoFechar) {
          console.log('Botão de fechar encontrado');
          botaoFechar.addEventListener('click', function() {
            secaoInformacoes.style.display = 'none';
          });
        }
      }
    };
  }
  
  
  const saibaMaisLinks = document.querySelectorAll('.saiba-mais');
  
  
  const detalhesInfo = {
    'fatec-sjc': {
      titulo: 'FATEC São José dos Campos',
      conteudo: `
        <img src="statics/imgs/pictures/fatec.png" alt="Fatec São José dos Campos" class="info-image">
        <p>A Fatec São José dos Campos - Prof. Jessen Vidal foi criada em 2 de março de 2006. É uma faculdade pública estadual que oferece cursos superiores de tecnologia gratuitos.</p>
        <p>A instituição é mantida pelo Centro Paula Souza, autarquia do Governo do Estado de São Paulo vinculada à Secretaria de Desenvolvimento Econômico, Ciência, Tecnologia e Inovação.</p>
        <p>Localizada no Parque Tecnológico de São José dos Campos, a Fatec está inserida em um ambiente de inovação e desenvolvimento tecnológico, o que proporciona aos alunos contato direto com empresas e instituições de pesquisa.</p>
        <div class="info-sources">
          <p>Link relacionado:</p>
          <p><a href="https://www.educaedu-brasil.com/centros/fatec--faculdade-de-tecnologia-de-sao-jose-dos-campos-uni2198" target="_blank" class="parque-link">https://www.educaedu-brasil.com/centros/fatec--faculdade-de-tecnologia-de-sao-jose-dos-campos-uni2198</a></p>
        </div>

        <div class="video-container">
          <video controls width="100%">
            <source src="statics/video/centro_memorias.mp4" type="video/mp4">
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>
      `
    },
    'centro-memorias': {
      titulo: 'Centro de Memórias da FATEC',
      conteudo: `
        <img src="statics/imgs/pictures/fatec centro memoria.jpg" alt="Centro de Memórias" class="info-image">
        <p>O Centro de Memórias da FATEC São José dos Campos foi criado pela Portaria 01 de 30/06/2022, com o objetivo de resgatar e preservar a memória da instituição por meio de inventário, acervo e ações culturais ligadas à história da educação tecnológica.</p>
        <p>Este projeto visa documentar a trajetória da instituição, seus professores, alunos e contribuições para o desenvolvimento tecnológico da região.</p>
        <div class="info-sources">
          <p>Membros responsáveis:</p>
          <p>Gerson Carlos Favalli;</p>
          <p>Luciana de Abreu Aquino;</p>
          <p>Sardes Aparecida Batista;</p>
          <p>Nilo Jerônimo Vieira;</p>
          <p>Eliane Penha Mergulhão Dias;</p>
        </div>
        <div class="info-sources">
          <p>Professores convidados:</p>
          <p>Elisiane Alves de Oliveira;</p>
          <p>Julia Kanazawa (Etec Jacareí);</p>
        </div>
        <div class="info-sources">
          <p>Link relacionado:</p>
          <p><a href="http://www.memorias.cpscetec.com.br/acervoVer.php?cma=29" target="_blank" class="parque-link">http://www.memorias.cpscetec.com.br/acervoVer.php?cma=29</a></p>
        </div>
      `
    },
    'jessen-vidal': {
  titulo: 'Quem foi Jessen Vidal?',
  conteudo: `
    <img src="statics/imgs/pessoas/jessenVidal.jpg" alt="Professor Jessen Vidal" class="info-image">
    <p>O Prof. Jessen Vidal nasceu no município pernambucano de Guaranhuns, em 21 de novembro de 1930, filho de Sólon Vidal e Katy Leitão Vidal. Na infância e adolescência frequentou o Colégio Presbiteriano XV de Novembro de Guaranhuns e em 1950 veio para São José dos Campos para estudar no Instituto Tecnológico de Aeronáutica (ITA).</p>
    <p>Se formou Engenheiro Aeronáutico no ano de 1956, no ano de 1965, tirou o mestrado no ITA e em 1971 o doutorado na UNESP. Foi Professor Titular da Divisão de Aeronáutica do ITA, Professor Associado da Faculdade de Engenharia Mauá de 1965 a 1970. Reitor do ITA, de 1977 a 1982 e de 1989 a 1994 e Professor Titular e Diretor da Faculdade de Engenharia de Guaratinguetá, da UNESP.</p>
    <p>Foi membro do Conselho Deliberativo da FATEC de 1979 a 1981 e do Conselho Estadual de Educação de 1981 a 1984 e Secretário da Educação do Estado de São Paulo entre 1982 e 1983. Foi também conselheiro do CREA entre 1967 a 1971 e participou do conselho da FUNCATE no período de 1996 a 2007.</p>
    <p><a href="http://www.aeitaonline.com.br/wiki/index.php?title=Jessen_Vidal" target="_blank" class="jessen-link">Wikpedia</a></p>
    <p><a href="https://www.al.sp.gov.br/repositorio/legislacao/lei/2009/lei-13875-16.12.2009.html" target="_blank" class="jessen-link">Ficha Informativa - Assembleia Legislativa do Estado de São Paulo</a></p>
    <p><a href="https://www.al.sp.gov.br/noticia/?id=262504" target="_blank" class="jessen-link">Homenagem - Assembleia Legislativa do Estado de São Paulo</a></p>
  `
},
    'parque-tecnologico': {
      titulo: 'Parque Tecnológico de São José dos Campos',
      conteudo: `
        <img src="statics/imgs/pictures/parqueTecnologico.png" alt="Parque Tecnológico" class="info-image">
        <p>O Parque Tecnológico São José dos Campos foi instituído pelo Decreto Municipal nº 12.367/2006, sendo um ambiente de inovação que abriga empresas de tecnologia, centros de pesquisa e instituições de ensino.</p>
        <p>A FATEC São José dos Campos está localizada dentro do Parque Tecnológico, o que proporciona aos alunos e professores um ambiente privilegiado para o desenvolvimento de projetos e pesquisas em parceria com empresas e instituições.</p>
        <p><a href="https://beacons.ai/pitsjc" target="_blank" class="parque-link">Visite o site do Parque Tecnológico</a></p>
      `
    },
    'cesar-lattes': {
      titulo: 'Quem foi Cesare Lattes?',
      conteudo: `
        <img src="statics/imgs/pessoas/lattes.jpg" alt="César Lattes" class="info-image">
        <p>Cesar Lattes (1924-2005) foi um físico brasileiro, considerado um dos cientistas mais importantes do país. Formou-se em física e matemática pela Universidade de São Paulo (USP).</p>
        <p>Seu trabalho mais conhecido foi a descoberta do méson pi (ou píon), uma partícula subatômica, realizada em 1947 quando tinha apenas 23 anos. Esta descoberta foi fundamental para o avanço da física nuclear e de partículas.</p>
        <p>Em sua homenagem, foi criada a Plataforma Lattes, sistema de currículos acadêmicos mantido pelo CNPq que se tornou padrão nacional para o registro da vida acadêmica de estudantes e pesquisadores do Brasil.</p>
        <div class="info-sources">
          <p>Fontes:</p>
          <p><a href="https://pt.wikipedia.org/wiki/C%C3%A9sar_Lattes#CITEREFLeite_Vieira2019" target="_blank" class="jessen-link">Wikpedia</a></p>
          <p><a href="https://www.ebiografia.com/cesar_lattes/" target="_blank" class="jessen-link">https://www.ebiografia.com/cesar_lattes/</a></p>
          <p><a href="https://educacao.uol.com.br/biografias/cesar-lattes.htm" target="_blank" class="jessen-link">https://educacao.uol.com.br/biografias/cesar-lattes.htm</a></p>
        </div>
      `
    },
    'paula-souza': {
      titulo: 'Quem foi Paula Souza?',
      conteudo: `
        <img src="statics/imgs/pessoas/souza.png" alt="Paula Souza" class="info-image">
        <p>Antônio Francisco de Paula Souza (1843-1917) foi um engenheiro e político brasileiro, formado na Europa. Destacou-se pela contribuição à educação técnica no país, tendo sido o fundador da Escola Politécnica de São Paulo (atual Poli-USP).</p>
        <p>Foi diretor da instituição por 24 anos e defendeu uma educação técnica voltada ao desenvolvimento nacional. Seu legado inspirou a criação do Centro Estadual de Educação Tecnológica Paula Souza (CEETEPS) em 1969, instituição que administra as FATECs e ETECs do estado de São Paulo.</p>
        <div class="info-sources">
          <p>Fontes:</p>
          <p><a href="https://www.poli.usp.br/institucional/diretoria/galeria-de-diretores/prof-dr-antonio-francisco-de-paula-souza" target="_blank" class="jessen-link">https://www.poli.usp.br/institucional/diretoria/galeria-de-diretores/prof-dr-antonio-francisco-de-paula-souza</a></p>
          <p><a href="https://www.cps.sp.gov.br/sobre-o-centro-paula-souza/" target="_blank" class="jessen-link">https://www.cps.sp.gov.br/sobre-o-centro-paula-souza/</a></p>
        </div>
      `
    },
    'baja': {
      titulo: 'Projeto BAJA SAE BRASIL',
      conteudo: `
        <img src="statics/imgs/pictures/BAJA.jpeg" alt="BAJA" class="info-image">
        <p>O Projeto Baja SAE é desenvolvido por alunos de diversos cursos, principalmente Engenharia, com o objetivo de aplicar os conhecimentos teóricos em um projeto prático: projetar, construir e testar um veículo off-road.</p>
        <p>As equipes participam de competições nacionais e internacionais, onde são avaliadas em diversos aspectos, desde o projeto até o desempenho do veículo em provas dinâmicas e de resistência.</p>
        <p>Na FATEC São José dos Campos, o projeto Baja proporciona aos alunos a oportunidade de desenvolver habilidades técnicas e de gestão, trabalhando em equipe e aplicando conhecimentos de diversas áreas.</p>
        <div class="info-sources">
          <p>Fontes:</p>
          <p><a href="https://saebrasil.org.br/programas-estudantis/baja-sae-brasil" target="_blank" class="jessen-link">https://saebrasil.org.br/programas-estudantis/baja-sae-brasil</a></p>
          <p><a href="https://fatecsjc-prd.azurewebsites.net/images/baja/2016/fotos_baja_2016.php" target="_blank" class="jessen-link">https://fatecsjc-prd.azurewebsites.net/images/baja/2016/fotos_baja_2016.php</a></p>
          <p><a href="https://www.cps.sp.gov.br/fatec-sao-jose-dos-campos-recebe-competicao-nacional-de-engenharia/" target="_blank" class="jessen-link">https://www.cps.sp.gov.br/fatec-sao-jose-dos-campos-recebe-competicao-nacional-de-engenharia/</a></p>
          <p><a href="https://pt.wikipedia.org/wiki/F%C3%B3rmula_SAE" target="_blank" class="jessen-link">https://pt.wikipedia.org/wiki/F%C3%B3rmula_SAE</a></p>
        </div>
      `
    },
    'guri': {
      titulo: 'A Incorporação da Aeronave AMT-600 Guri à Infraestrutura Didática da FATEC São José dos Campos',
      conteudo: `
        <img src="../statics/imgs/pictures/GURI/guri(1).jpg" alt="GURI" class="info-image">
        <p>No mês de setembro de 2016, a Faculdade de Tecnologia de São José dos Campos – Prof. Jessen Vidal (FATEC-SJC) integrou oficialmente à sua infraestrutura acadêmica a aeronave AMT-600 Guri, doada pela Agência Nacional de Aviação Civil (ANAC). Esta aquisição representa um avanço significativo na qualificação dos ambientes de aprendizagem voltados ao curso de Tecnologia em Manutenção de Aeronaves, promovendo o aprimoramento das atividades práticas essenciais à formação tecnológica dos discentes.</p>
        <p>A aeronave, fabricada em 2008 pela empresa brasileira AEROMOT, havia sido originalmente adquirida por meio do Projeto de Cooperação Técnica Internacional. Entretanto, após um incidente durante o voo de translado para o Aeroclube do Rio Grande do Sul (ARGS), com apenas três horas de operação, o equipamento permaneceu inoperante e estacionado por vários anos.</p>
        <p>O processo de obtenção foi iniciado por meio de articulações institucionais com a ANAC, culminando na emissão do Termo de Doação em janeiro de 2016. A logística de transporte envolveu o apoio de diferentes entidades, destacando-se a colaboração da Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS), do Comando da Aeronáutica (COMAER), do Departamento de Ciência e Tecnologia Aeroespacial (DCTA) e da Base Aérea de Canoas. A ação conjunta dessas instituições possibilitou o translado terrestre da aeronave até o campus da FATEC.</p>
        <p>A chegada da aeronave Guri não apenas enriqueceu o acervo técnico-pedagógico da instituição, mas também promoveu grande engajamento entre professores e alunos, incentivando a aprendizagem por meio da vivência prática em situações reais de manutenção e operação aeronáutica.</p>
        <div class="info-sources">
          <p>Fonte de Informações:</p>
          <p>Prof. Felix Strottmann – Coordenador do Curso de Tecnologia em Manutenção de Aeronaves - FATEC – Faculdade de São José dos Campos – Prof. Jessen Vidal – 21/Setembro/2016.</p>
        </div>
      `,
    },
    'brasilia': {
      titulo: 'EMB-120 Brasília: Desenvolvimento, Impacto e Legado da Aviação Regional Brasileira',
      conteudo: `
        <img src="statics/imgs/pictures/EMB-120/EMB-120(5).png" alt="EMB-120" class="info-image">
        <p>O EMB-120 Brasília representa um dos marcos mais relevantes da indústria aeronáutica brasileira. Desenvolvido pela Embraer no início da década de 1980, o modelo foi concebido para atender ao mercado regional com uma aeronave turboélice pressurizada, eficiente e de alta confiabilidade. Com capacidade para 30 passageiros, a aeronave é equipada com dois motores Pratt & Whitney Canada PW118A, alcançando velocidades superiores a 580 km/h e operando a altitudes de até 25 mil pés.</p>
        <p>O desenvolvimento do EMB-120 teve como base o programa EMB-12X, que previa uma família de aeronaves com fuselagem comum em diferentes configurações. Embora apenas o EMB-121 Xingu tenha sido efetivamente fabricado inicialmente, a crescente demanda por transporte regional impulsionou a criação do Brasília, cujo primeiro voo ocorreu em julho de 1983. A Embraer adotou sistemas avançados para a época, como o EFIS, e rapidamente conquistou certificações internacionais, o que permitiu sua comercialização em diversos países.</p>
        <p>Durante sua vida operacional, foram desenvolvidas versões aprimoradas como a HOT & HIGH (1986), voltada para operações em ambientes extremos; a Enhanced Range (1992), com maior autonomia e capacidade de carga; e a versão Advanced (1994), que trouxe melhorias significativas em conforto, manutenção e operação em pistas não pavimentadas.</p>
        <p>Com mais de 350 unidades produzidas, o EMB-120 somou mais de quatro milhões de horas de voo e transportou mais de 60 milhões de passageiros. No Brasil, teve papel fundamental na integração regional aérea, sendo utilizado por diversas companhias nacionais. Sua relevância foi reconhecida internacionalmente, sendo eleito “Top Regional Airliner” nos EUA por três anos consecutivos.</p>
        <p>Em 2012, a aeronave EMB 120.167 foi doada pela Embraer à FATEC São José dos Campos – Prof. Jessen Vidal, contribuindo diretamente para o aprimoramento da formação técnica e prática dos estudantes da área de manutenção aeronáutica.</p>
        <div class="info-sources">
          <p>Fonte Bibliográfica:</p>
          <p><a href="http://www1.folha.uol.com.br/folha/turismo/preparese/aviao-embraer_brasilia.shtml" target="_blank" class="jessen-link">http://www1.folha.uol.com.br/folha/turismo/preparese/aviao-embraer_brasilia.shtml</a></p>
          <p>Marcos Resende* Especial para a Folha Online</p>
          <p>Prof. Felix A. Strottmann - FATEC</p>
        </div>
      `,
    },
    'helicoptero': {
      titulo: 'Evolução e Contribuições do Laboratório de Asas Rotativas e Drones da FATEC-SJC para a Formação Tecnológica em Aviação',
      conteudo: `
        <img src="statics/imgs/pictures/Laboratorio/galpao.png" alt="Laboratórios" class="info-image">
        <p>O Laboratório de Asas Rotativas e Drones da FATEC São José dos Campos – Prof. Jessen Vidal tem desempenhado um papel estratégico na formação prática e tecnológica de estudantes dos cursos da área aeronáutica. Desde sua criação, a infraestrutura do laboratório tem evoluído continuamente com a aquisição e integração de componentes reais de helicópteros, simulações estruturais e desenvolvimento de projetos de engenharia, com foco em asas rotativas e sistemas não tripulados.</p>
        <p>As atividades tiveram início em 2016 com a incorporação de partes de aeronaves como o rotor do Schweizer 300 CB, Pantera AS 365K, Esquilo AS 350B e trem de pouso auxiliar do Pantera AS356, muitos deles adquiridos em parceria com a empresa Brascopter Projetos Aeronáuticos e Mecânicos Ltda.</p>
        <p>Entre 2017 e 2019, o laboratório ampliou suas atividades com a participação em competições como a Fórmula Drone SAE, e com a inauguração oficial do espaço no 1º semestre de 2018. Nesse período, destaca-se a instalação experimental de pás de madeira de balsa e testes mecânicos com o conjunto de "skid", cujo comportamento foi analisado por meio de gráficos de força versus deslocamento.</p>
        <p>Em 2020, foram desenvolvidos projetos complexos de proteção para o rotor de cauda do helicóptero Schweizer, detalhados com desenhos técnicos em CAD. As estruturas incluíam suportes metálicos, telas de proteção e sistemas de fixação por parafusos, sendo todas as peças dimensionadas com base em dados de manuais técnicos e medições fotográficas. O projeto demonstrou capacidade dos alunos em engenharia aplicada, desde o dimensionamento até a execução do protótipo.</p>
        <p>Durante os anos de 2021 a 2023, o laboratório seguiu em expansão com o desenvolvimento do projeto do Núcleo Estrutural de Hélices, incluindo elementos como longarina, braços de conexão, suportes e uso de materiais como honeycomb. A fixação de pás e testes de protótipo também foram realizados, culminando em resultados práticos no desenvolvimento da chamada “Pá Master”.</p>
        <p>Além disso, destaca-se o projeto conceitual do Alpha One, futuro simulador de voo voltado a asas rotativas, indicando a continuidade das inovações tecnológicas previstas para o laboratório.</p>
        <p>A trajetória do Laboratório de Asas Rotativas e Drones da FATEC-SJC revela um ecossistema acadêmico inovador, orientado para o aprendizado baseado em projetos reais e aplicação direta de conhecimentos de engenharia, contribuindo significativamente para a qualificação de mão de obra especializada no setor aeronáutico nacional.</p>
      `,
    },
    'masanori': {
      titulo: 'Entrevista com o Professor Fernando Masanori (22/11/2024)',
      conteudo: `
        <img src="statics/imgs/pessoas/masanori/masanori7.jpeg" alt="Masanori" class="info-image">
        <p>Fernando Masanori, nascido em 1964 em São Paulo, teve uma infância difícil e superou desafios para se formar em Ciências da Computação pela USP.</p>
        <p>Teve uma carreira de sucesso em empresas como Itaú e Mastercard, mas após um burnout, mudou-se para São José dos Campos, fez mestrado no ITA e iniciou um doutorado, interrompido para cuidar do pai.</p>
        <p>A partir de 2006, passou a se dedicar à docência na FATEC São José dos Campos, onde implantou e coordenou o curso de Informática, enfrentando desafios estruturais e administrativos. Incentivou metodologias inovadoras, aproximação com o mercado e a comunidade Python.</p>
        <p>Durante a pandemia, destacou-se pela rápida adaptação ao ensino remoto e pelo suporte emocional aos alunos.</p>
        <p>Acredita na FATEC como agente de transformação social e defende a preservação do espírito comunitário e engajado da instituição.</p>
      `,
    },
    'arakaki': {
      titulo: 'Resumo da Entrevista com o Professor e Coodernador do curso de Desenvolvimento de Software Multiplataforma, Reinaldo Gen Ichiro Arakaki (30/03/2025)',
      conteudo: `
        <img src="statics/imgs/pessoas/arakaki/arakaki.jpg" alt="Arakaki" class="info-image">
        <p>Reinaldo Arakaki, nascido em São Paulo, é físico formado pela USP e doutor em Computação pelo INPE. Mudou-se para São José dos Campos em 1989 e iniciou sua trajetória como educador ainda antes do mestrado.</p>
        <p>Atuou na UNIVAP e participou da implantação da UNIFESP, mas foi na FATEC, onde ingressou em 2009, que encontrou um modelo educacional alinhado com seus valores.</p>
        <p>Como coordenador de cursos de TI, foi essencial na criação de ADS e DSM, acompanhando também a evolução da FATEC desde o Parque Tecnológico até o atual prédio.</p>
        <p>Arakaki também é fortemente engajado em atividades voluntárias. Coordena a Olimpíada Brasileira de Matemática (OBM) desde 1994 e a OBMEP desde 2005, além de atuar no cursinho comunitário VESTEC — projeto social que sofreu retração com a pandemia, mas que ele ainda busca reativar. Participa também da organização de maratonas de programação como o InterFATECs e a Maratona Estadual.</p>
        <p>Engajado em ações sociais, coordena a OBM, a OBMEP e o cursinho comunitário VESTEC. Durante a pandemia, defendeu o ensino remoto com qualidade, especialmente para alunos mais avançados.</p>
        <p>Reconhece o papel crescente da inteligência artificial na educação, desde que usada com responsabilidade. Para Arakaki, a FATEC é um espaço de transformação, que prepara os alunos tanto tecnicamente quanto no desenvolvimento de soft skills, fundamentais no mercado atual.</p>
      `,
    },
    'sales': {
      titulo: 'Resumo da Entrevista com o Professor e o primeiro diretor da Fatec de São José dos Campos, Antonio Wellington Sales Rios',
      conteudo: `
        <img src="statics/imgs/pessoas/sales/salesAula.jpg" alt="Sales" class="info-image">
        <p>Antonio Wellington Sales Rios, nascido em Fortaleza em 1954, formou-se em Engenharia de Infraestrutura Aeronáutica e concluiu mestrado pelo ITA. Teve carreira destacada na Força Aérea, contribuindo com projetos como o simulador SIPAR.</p>
        <p>Em 1995, ingressou no Centro Paula Souza e, em 2006, foi convidado a implantar a FATEC São José dos Campos, tornando-se seu primeiro diretor. Liderou a adaptação do prédio da antiga Solectron e coordenou a criação dos primeiros cursos, como Logística, Informática e, em parceria com a EMBRAER, os voltados à área aeronáutica.</p>
        <p>Após deixar a direção em 2011, continuou como professor e coordenador, sendo figura central na consolidação da unidade. Também é empreendedor e reconhecido por seu pioneirismo e dedicação à educação tecnológica.</p>
      `,
    },
    'jeronimo': {
      titulo: 'Resumo da Entrevista com o Professor Nilo Jeronimo Vieira (Março de 2023)',
      conteudo: `
        <img src="statics/imgs/pessoas/jeronimo/jeronimo3.jpeg" alt="Jeronimo" class="info-image">
        <p>Professor Nilo Jeronimo Vieira, natural de Contagem (MG), mudou-se jovem para Itaquaquecetuba e, mais tarde, para São José dos Campos, onde se consolidou como educador. Formado em Letras, iniciou sua carreira docente após experiências diversas, incluindo passagem pela Força Aérea e setor administrativo.</p>
        <p>Teve papel essencial na criação da FATEC São José dos Campos, liderando um abaixo-assinado com mais de 50 mil assinaturas pela implantação da unidade. Foi o primeiro professor contratado e responsável pelas disciplinas de Inglês, Comunicação e Português. Atuou na implantação do programa Ciências sem Fronteiras e do Núcleo de Relações Internacionais, além de integrar a FATEC à rede internacional CDIO. Defensor da qualidade do ensino público, destaca o papel transformador da FATEC na vida dos alunos e no desenvolvimento social.</p>
      `,
    },
    'tozi': {
      titulo: 'Resumo da Entrevista com o Professor e atual diretor da Fatec de São José dos Campos, Luiz Antonio Tozi (20/09/2024)',
      conteudo: `
        <img src="statics/imgs/pessoas/tozi/tozi.png" alt="Tozi" class="info-image">
        <p>Luiz Antonio Tozi é engenheiro naval pela USP, mestre e doutor pelo ITA, com ampla experiência em educação, gestão pública e empresarial. Atuou como vice-ministro da Educação e vice-superintendente do Centro Paula Souza.</p>
        <p>Desde 2011, é diretor da FATEC São José dos Campos, onde ingressou como professor em 2006. Com forte influência familiar e espírito inovador, Tozi defende uma formação que vá além da técnica, estimulando pensamento crítico, soft skills e integração com o setor produtivo.</p>
        <p>Sob sua liderança, a FATEC se consolidou como polo de inovação, com alto índice de empregabilidade e conexão com o ecossistema tecnológico. Durante a pandemia, reforçou a importância do vínculo humano no ensino e criticou modelos educacionais engessados.</p>
        <p>Vê a FATEC como uma escola viva, voltada à experimentação e ao desenvolvimento integral dos alunos.</p>
      `,
    },
    'benedito': {
      titulo: 'Resumo da Entrevista com o secretário e ex-aluno da Fatec, Benedito Vitorino Jr(30/05/2025)',
      conteudo: `
        <img src="statics/imgs/pessoas/benedito/bene(1).jpeg" alt="Benedito" class="info-image">
        <p>Benedito, de 34 anos, é pai de uma menina e mora sozinho desde 2023. Interessado por tecnologia, aprendeu a conciliar a rotina doméstica e profissional. Trabalha há 14 anos na secretaria acadêmica da FATEC, onde ingressou após atuar como estagiário e bolsista na prefeitura.</p>
        <p>Participou de importantes mudanças institucionais, como a digitalização dos processos e a implantação do sistema SIGA. Enfrenta desafios ligados à inclusão educacional e social, como o atendimento a alunos com deficiência e o uso do nome social.</p>
        <p>Valoriza a estabilidade da FATEC e busca crescer nas áreas de gestão empresarial e tecnologia da informação, com interesse em atuar estrategicamente. Também compartilha situações curiosas do dia a dia acadêmico.</p>
      `,
    },
  };
  
  saibaMaisLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (!this.getAttribute('target')) {
        e.preventDefault();
        
        
        let infoId = this.getAttribute('data-id');
        
        if (!infoId) {
          const cardElement = this.closest('.card');
          const cardTitle = cardElement.querySelector('.card-title').textContent.trim();
          
          
          if (cardTitle.includes('EMB- 120')) {
            infoId = 'emb-120';
          } else if (cardTitle.includes('Guri na Fatec')) {
            infoId = 'guri';
          } else if (cardTitle.includes('Catálogos dos Laboratórios')) {
            infoId = 'laboratorios';
          }
        }
        
        if (infoId && detalhesInfo[infoId]) {
          window.mostrarInformacoes(infoId, detalhesInfo);
        } else {
          console.log('Informações para o ID:', infoId, 'não encontradas');
          alert('Informações não disponíveis no momento. Em breve teremos mais conteúdo!');
        }
      }
    });
  });
});