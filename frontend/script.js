// ══════════════════════════════════
//  DATA: conteúdo de cada matéria
// ══════════════════════════════════
const SUBJECTS = {
  quimica: {
    name:'Química', icon:'🧪', color:'s-purple',
    bg:'linear-gradient(135deg,#2D1B69,#1A0F3E)',
    desc:'Funções Orgânicas, Isomeria, Reações, Eletroquímica',
    mapa:['Tabela Periódica','→','Ligações Químicas','→','Funções Inorgânicas','→','Reações Químicas','→','Química Orgânica','→','Isomeria','→','Reações Org.','→','Eletroquímica'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — Tabela Periódica e Propriedades',meta:'Vídeo-aula • 20 min • Prof. Rafael B.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Ligações Químicas: Iônica, Covalente e Metálica',meta:'Vídeo-aula • 25 min • Prof. Rafael B.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 3 — Funções Inorgânicas: Ácidos e Bases',meta:'Vídeo-aula • 22 min • Prof. Rafael B.',badge:'Em progresso',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 4 — Reações Químicas e Balanceamento',meta:'Vídeo-aula • 18 min • Prof. Rafael B.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 5 — Funções Oxigenadas: Álcoois e Aldeídos',meta:'Vídeo-aula • 18 min • Prof. Rafael B.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 6 — Isomeria Plana e Espacial',meta:'Vídeo-aula • 30 min • Prof. Rafael B.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 7 — Eletroquímica: Pilhas e Eletrólise',meta:'Vídeo-aula • 28 min • Prof. Rafael B.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
    ],
    apostilas:[
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Apostila Completa de Química Orgânica',meta:'PDF • 120 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Resumo Funções Oxigenadas',meta:'PDF • 24 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Tabela de Nomenclaturas Orgânicas',meta:'PDF • 8 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Mapa Mental — Reações Orgânicas',meta:'PDF • 4 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
    ],
    tarefas:[
      {type:'task',icon:'📝',cls:'ci-task',title:'Tarefa 1 — Funções Inorgânicas',meta:'10 questões • Entrega: 20/06',badge:'Pendente',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
      {type:'task',icon:'📝',cls:'ci-task',title:'Tarefa 2 — Álcoois e Aldeídos',meta:'8 questões • Entrega: 28/06',badge:'Futura',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'task',icon:'📝',cls:'ci-task',title:'Prova — Química Orgânica',meta:'20 questões • Entrega: 10/07',badge:'Futura',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
    ]
  },
  matematica: {
    name:'Matemática', icon:'📐', color:'s-pink',
    bg:'linear-gradient(135deg,#4D1525,#2D0B15)',
    desc:'Álgebra, Geometria, Trigonometria, Probabilidade, Cálculo',
    mapa:['Conjuntos','→','Funções','→','Álgebra Linear','→','Trigonometria','→','Geometria Plana','→','Geometria Espacial','→','Probabilidade','→','Estatística'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — Conjuntos e Operações',meta:'Vídeo-aula • 22 min • Prof. Marcos S.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Funções do 1º e 2º Grau',meta:'Vídeo-aula • 35 min • Prof. Marcos S.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 3 — Função Exponencial e Logarítmica',meta:'Vídeo-aula • 28 min • Prof. Marcos S.',badge:'Em progresso',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 4 — Trigonometria no Triângulo Retângulo',meta:'Vídeo-aula • 30 min • Prof. Marcos S.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 5 — Geometria Plana: Áreas e Perímetros',meta:'Vídeo-aula • 32 min • Prof. Marcos S.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 6 — Geometria Espacial: Volumes',meta:'Vídeo-aula • 31 min • Prof. Marcos S.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 7 — Probabilidade e Análise Combinatória',meta:'Vídeo-aula • 26 min • Prof. Marcos S.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 8 — Estatística Descritiva',meta:'Vídeo-aula • 20 min • Prof. Marcos S.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
    ],
    apostilas:[
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Apostila Completa de Matemática — ENEM',meta:'PDF • 180 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Formulário de Geometria Espacial',meta:'PDF • 6 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Resumo de Trigonometria',meta:'PDF • 12 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
    ],
    tarefas:[
      {type:'task',icon:'📝',cls:'ci-task',title:'Tarefa 1 — Funções',meta:'12 questões • Entrega: 22/06',badge:'Pendente',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
      {type:'task',icon:'📝',cls:'ci-task',title:'Tarefa 2 — Trigonometria',meta:'10 questões • Entrega: 02/07',badge:'Futura',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
    ]
  },
  biologia: {
    name:'Biologia', icon:'🧬', color:'s-teal',
    bg:'linear-gradient(135deg,#0D3D35,#062420)',
    desc:'Citologia, Histologia, Genética, Ecologia, Evolução',
    mapa:['Citologia','→','Histologia','→','Fisiologia','→','Genética Mendeliana','→','Genética Molecular','→','Ecologia','→','Evolução','→','Botânica'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — Célula Procariótica e Eucariótica',meta:'Vídeo-aula • 24 min • Profa. Ana C.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Organelas Celulares e Funções',meta:'Vídeo-aula • 28 min • Profa. Ana C.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 3 — Divisão Celular: Mitose e Meiose',meta:'Vídeo-aula • 32 min • Profa. Ana C.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 4 — Genética: Leis de Mendel',meta:'Vídeo-aula • 30 min • Profa. Ana C.',badge:'Em progresso',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 5 — Genética Molecular: DNA e RNA',meta:'Vídeo-aula • 26 min • Profa. Ana C.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 6 — Ecologia: Cadeias e Teias Alimentares',meta:'Vídeo-aula • 22 min • Profa. Ana C.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 7 — Evolução: Teoria de Darwin',meta:'Vídeo-aula • 20 min • Profa. Ana C.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
    ],
    apostilas:[
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Apostila de Citologia Completa',meta:'PDF • 96 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Resumo de Genética Mendeliana',meta:'PDF • 18 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Tabela de Biomas Brasileiros',meta:'PDF • 5 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
    ],
    tarefas:[
      {type:'task',icon:'📝',cls:'ci-task',title:'Tarefa 1 — Citologia',meta:'8 questões • Entrega: 18/06',badge:'Atrasado',badgeCls:'rgba(255,77,109,.15)',badgeColor:'var(--pink)'},
      {type:'task',icon:'📝',cls:'ci-task',title:'Tarefa 2 — Genética de Mendel',meta:'10 questões • Entrega: 30/06',badge:'Pendente',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
    ]
  },
  fisica: {
    name:'Física', icon:'⚡', color:'s-blue',
    bg:'linear-gradient(135deg,#0D2B4A,#071928)',
    desc:'Mecânica, Termodinâmica, Óptica, Eletromagnetismo, Física Moderna',
    mapa:['Cinemática','→','Dinâmica','→','Energia e Trabalho','→','Gravitação','→','Termodinâmica','→','Ondulatória','→','Óptica','→','Eletromagnetismo'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — Cinemática: MRU e MRUV',meta:'Vídeo-aula • 30 min • Prof. Lucas C.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Dinâmica: Leis de Newton',meta:'Vídeo-aula • 28 min • Prof. Lucas C.',badge:'Em progresso',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 3 — Energia: Trabalho e Potência',meta:'Vídeo-aula • 24 min • Prof. Lucas C.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 4 — Termodinâmica: Calor e Temperatura',meta:'Vídeo-aula • 26 min • Prof. Lucas C.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 5 — Ondulatória: Som e Luz',meta:'Vídeo-aula • 22 min • Prof. Lucas C.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 6 — Eletrostática e Eletrodinâmica',meta:'Vídeo-aula • 32 min • Prof. Lucas C.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 7 — Eletromagnetismo: Lei de Faraday',meta:'Vídeo-aula • 28 min • Prof. Lucas C.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
    ],
    apostilas:[
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Apostila Completa de Mecânica',meta:'PDF • 110 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Formulário de Física — ENEM e Vestibulares',meta:'PDF • 10 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
    ],
    tarefas:[
      {type:'task',icon:'📝',cls:'ci-task',title:'Tarefa 1 — Leis de Newton',meta:'10 questões • Entrega: 25/06',badge:'Pendente',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
    ]
  },
  historia: {
    name:'História', icon:'📜', color:'s-yellow',
    bg:'linear-gradient(135deg,#3D2E00,#231A00)',
    desc:'Brasil Colonial, Independência, República, Guerras Mundiais, Contemporânea',
    mapa:['Pré-história','→','Antiguidade','→','Idade Média','→','Expansão Marítima','→','Brasil Colonial','→','Independência','→','República','→','Guerras Mundiais','→','Brasil Contemporâneo'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — Brasil Pré-Colonial e Povos Indígenas',meta:'Vídeo-aula • 20 min • Profa. Paula M.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Brasil Colonial: Capitanias Hereditárias',meta:'Vídeo-aula • 24 min • Profa. Paula M.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 3 — Independência do Brasil',meta:'Vídeo-aula • 22 min • Profa. Paula M.',badge:'Em progresso',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 4 — República Velha e Era Vargas',meta:'Vídeo-aula • 28 min • Profa. Paula M.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 5 — 1ª e 2ª Guerras Mundiais',meta:'Vídeo-aula • 35 min • Profa. Paula M.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 6 — Ditadura Militar no Brasil',meta:'Vídeo-aula • 26 min • Profa. Paula M.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
    ],
    apostilas:[
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Linha do Tempo — História do Brasil',meta:'PDF • 14 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Resumo Guerras Mundiais',meta:'PDF • 22 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
    ],
    tarefas:[
      {type:'task',icon:'📝',cls:'ci-task',title:'Tarefa 1 — Brasil Colonial',meta:'8 questões • Entrega: 23/06',badge:'Pendente',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
    ]
  },
  portugues: {
    name:'Português', icon:'✍️', color:'s-orange',
    bg:'linear-gradient(135deg,#3D1A00,#231000)',
    desc:'Gramática, Interpretação de Texto, Literatura, Redação',
    mapa:['Morfologia','→','Sintaxe','→','Semântica','→','Literatura Brasileira','→','Literatura Portuguesa','→','Interpretação','→','Redação ENEM'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — Classes Gramaticais: Substantivo e Adjetivo',meta:'Vídeo-aula • 22 min • Prof. João O.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Verbos: Conjugações e Modos',meta:'Vídeo-aula • 30 min • Prof. João O.',badge:'Concluído',badgeCls:'rgba(0,212,170,.15)',badgeColor:'var(--teal)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 3 — Análise Sintática: Termos da Oração',meta:'Vídeo-aula • 28 min • Prof. João O.',badge:'Em progresso',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 4 — Literatura Modernista Brasileira',meta:'Vídeo-aula • 24 min • Prof. João O.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 5 — Interpretação de Texto: Estratégias',meta:'Vídeo-aula • 20 min • Prof. João O.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 6 — Redação ENEM: Estrutura e Competências',meta:'Vídeo-aula • 35 min • Prof. João O.',badge:'Não iniciado',badgeCls:'rgba(255,255,255,.06)',badgeColor:'var(--text3)'},
    ],
    apostilas:[
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Gramática Completa para o ENEM',meta:'PDF • 140 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Modelos de Redação Nota 1000',meta:'PDF • 30 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
    ],
    tarefas:[
      {type:'task',icon:'📝',cls:'ci-task',title:'Redação Dissertativa — Tema ENEM',meta:'1 redação • Entrega: 27/06',badge:'Pendente',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
    ]
  },
  enem: {
    name:'ENEM 2026', icon:'🎯', color:'s-pink',
    bg:'linear-gradient(135deg,#4D1525,#2D0B15)',
    desc:'Ciências da Natureza, Humanas, Linguagens, Matemática',
    mapa:['Linguagens','→','Ciências Humanas','→','Ciências da Natureza','→','Matemática','→','Redação','→','Simulados','→','Revisão Final'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — Como funciona o ENEM 2026',meta:'Vídeo-aula • 15 min • Equipe Arandu',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Redação ENEM: Estrutura da Dissertação',meta:'Vídeo-aula • 35 min • Prof. João O.',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 3 — Ciências da Natureza: Revisão Geral',meta:'Vídeo-aula • 40 min • Múltiplos professores',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 4 — Matemática: Os 20 temas mais cobrados',meta:'Vídeo-aula • 45 min • Prof. Marcos S.',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'task',icon:'📝',cls:'ci-task',title:'Simulado Completo — ENEM 2025 (gabaritado)',meta:'45 questões por área • Com comentários',badge:'Fazer',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Cronograma de Estudos ENEM 2026',meta:'PDF • Planejamento 6 meses',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
    ],
    apostilas:[
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Mega Apostila ENEM — Todas as Áreas',meta:'PDF • 350 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
      {type:'doc',icon:'📄',cls:'ci-doc',title:'Temas de Redação ENEM (2015–2025)',meta:'PDF • 28 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'},
    ],
    tarefas:[
      {type:'task',icon:'📝',cls:'ci-task',title:'Simulado ENEM — Área 1: Linguagens',meta:'45 questões • Sem prazo',badge:'Fazer',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
      {type:'task',icon:'📝',cls:'ci-task',title:'Simulado ENEM — Área 2: Ciências Humanas',meta:'45 questões • Sem prazo',badge:'Fazer',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
    ]
  },
  vestibulares: {
    name:'Vestibulares', icon:'🏛️', color:'s-purple',
    bg:'linear-gradient(135deg,#2D1B69,#1A0F3E)',
    desc:'FUVEST, UNICAMP, UNESP, ITA, IME',
    mapa:['FUVEST','→','UNICAMP','→','UNESP','→','ITA','→','IME','→','Simulados','→','Redação'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — FUVEST: Como funciona e o que cai',meta:'Vídeo-aula • 20 min • Equipe Arandu',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — UNICAMP: Diferenças e estratégias',meta:'Vídeo-aula • 18 min • Equipe Arandu',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'task',icon:'📝',cls:'ci-task',title:'Simulado FUVEST 2024 — 1ª Fase',meta:'90 questões • Com gabarito',badge:'Fazer',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'},
    ],
    apostilas:[{type:'doc',icon:'📄',cls:'ci-doc',title:'Guia Completo dos Vestibulares SP',meta:'PDF • 60 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'}],
    tarefas:[{type:'task',icon:'📝',cls:'ci-task',title:'Prova FUVEST 2023',meta:'90 questões',badge:'Fazer',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'}]
  },
  concursos: {
    name:'Concursos', icon:'📋', color:'s-blue',
    bg:'linear-gradient(135deg,#0D2B4A,#071928)',
    desc:'Concursos Federais e Estaduais, Bancários, Fiscais',
    mapa:['Raciocínio Lógico','→','Língua Portuguesa','→','Matemática','→','Direito Constitucional','→','Administração Pública','→','Conhecimentos Específicos'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — Raciocínio Lógico para Concursos',meta:'Vídeo-aula • 30 min',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Português para Concursos: Gramática',meta:'Vídeo-aula • 28 min',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
    ],
    apostilas:[{type:'doc',icon:'📄',cls:'ci-doc',title:'Apostila Raciocínio Lógico',meta:'PDF • 80 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'}],
    tarefas:[{type:'task',icon:'📝',cls:'ci-task',title:'Lista — Raciocínio Lógico',meta:'20 questões',badge:'Fazer',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'}]
  },
  militares: {
    name:'Militares', icon:'🎖️', color:'s-teal',
    bg:'linear-gradient(135deg,#0D3D35,#062420)',
    desc:'EsPCEx, AFA, EFOMM, Colégio Naval',
    mapa:['Matemática','→','Física','→','Química','→','Biologia','→','Português','→','História','→','Geografia','→','Inglês'],
    conteudo:[
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 1 — EsPCEx: Estrutura da prova',meta:'Vídeo-aula • 15 min',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
      {type:'video',icon:'🎬',cls:'ci-video',title:'Aula 2 — Matemática para EsPCEx',meta:'Vídeo-aula • 40 min',badge:'Assistir',badgeCls:'rgba(124,77,255,.15)',badgeColor:'var(--purple-light)'},
    ],
    apostilas:[{type:'doc',icon:'📄',cls:'ci-doc',title:'Guia de Preparação — Academias Militares',meta:'PDF • 45 páginas',badge:'Baixar',badgeCls:'rgba(74,158,255,.15)',badgeColor:'var(--blue)'}],
    tarefas:[{type:'task',icon:'📝',cls:'ci-task',title:'Simulado EsPCEx 2024',meta:'50 questões',badge:'Fazer',badgeCls:'rgba(255,209,102,.15)',badgeColor:'var(--yellow)'}]
  }
};

// ══════════════════════════════════
//  THEME
// ══════════════════════════════════
let isDark = true;
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle('light', !isDark);
  const icon = isDark ? '🌙' : '☀️';
  const title = isDark ? 'Modo claro' : 'Modo escuro';
  ['themeToggle','themeToggleAuth'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) { el.textContent = icon; el.title = title; }
  });
  showToast(isDark ? '🌙 Modo escuro ativado' : '☀️ Modo claro ativado');
}

// ══════════════════════════════════
//  STATE
// ══════════════════════════════════
let currentUser = null;
let userType = 'aluno';
let toastTimer = null;
let avatarGrad = 'linear-gradient(135deg,#7C4DFF,#FF4D6D)';

// ══════════════════════════════════
//  AUTH
// ══════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.auth-screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('appScreen').classList.remove('active');
  document.getElementById(id).classList.add('active');
}
function selectType(t) {
  userType = t;
  document.getElementById('typeAluno').classList.toggle('selected',t==='aluno');
  document.getElementById('typeProfessor').classList.toggle('selected',t==='professor');
}
function toggleInterest(el){ el.classList.toggle('selected'); }

function doLogin() {
  const email = document.getElementById('loginEmail').value || 'bah@gmaiç.com';
  const name = email.split('@')[0];
  currentUser = {
    name: capitalize(name), role:'Aluno', email,
    bio:'Estudante apaixonado por ciências. ENEM 2026 na mira! 🎯',
    city:'', state:'', school:'', age:''
  };
  enterApp();
}
function doRegister() {
  const name = document.getElementById('regName').value || 'Novo Usuário';
  const email = document.getElementById('regEmail').value || 'usuario@Arandu.com';
  currentUser = {
    name: capitalize(name),
    role: userType==='professor'?'Professor':'Aluno',
    email,
    bio: 'Olá! Acabei de entrar no Arandu. 🚀',
    city: document.getElementById('regCity').value,
    state: document.getElementById('regState').value,
    school: document.getElementById('regSchool').value,
    age: document.getElementById('regAge').value
  };
  showToast('🎉 Cadastro realizado com sucesso!');
  setTimeout(enterApp, 800);
}
function enterApp() {
  document.querySelectorAll('.auth-screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('appScreen').classList.add('active');
  updateUserUI();
  navigate('feed', document.querySelector('.nav-item'));
}
function doLogout() {
  currentUser = null;
  showScreen('loginScreen');
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPass').value = '';
}

// ══════════════════════════════════
//  USER UI UPDATE
// ══════════════════════════════════
function getInitials(name) {
  return name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
}
function updateUserUI() {
  if (!currentUser) return;
  const ini = getInitials(currentUser.name);
  // sidebar
  document.getElementById('sidebarAvatar').textContent = ini;
  document.getElementById('sidebarAvatar').style.background = avatarGrad;
  document.getElementById('sidebarName').textContent = currentUser.name;
  document.getElementById('sidebarRole').textContent = currentUser.role;
  // profile page
  document.getElementById('profileAvatar').textContent = ini;
  document.getElementById('profileAvatar').style.background = avatarGrad;
  document.getElementById('profileName').textContent = currentUser.name;
  document.getElementById('profileRole').textContent = currentUser.role;
  document.getElementById('profileBio').textContent = currentUser.bio || '';
  const loc = [currentUser.city, currentUser.state].filter(Boolean).join(', ');
  document.getElementById('profileLocation').textContent = loc ? '📍 '+loc : '';
  // account form
  fillAccountForm();
}
function fillAccountForm() {
  if (!currentUser) return;
  setVal('accName', currentUser.name);
  setVal('accEmail', currentUser.email);
  setVal('accBio', currentUser.bio);
  setVal('accCity', currentUser.city);
  setVal('accState', currentUser.state);
  setVal('accSchool', currentUser.school);
  setVal('accAge', currentUser.age);
}
function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

// live update while typing
function liveUpdateName(val) {
  if (!currentUser) return;
  if (val.trim()) {
    currentUser.name = val.trim();
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('sidebarName').textContent = currentUser.name;
    const ini = getInitials(currentUser.name);
    document.getElementById('profileAvatar').textContent = ini;
    document.getElementById('sidebarAvatar').textContent = ini;
    document.getElementById('modalAvatar').textContent = ini;
  }
}
function liveUpdateBio(val) {
  if (!currentUser) return;
  currentUser.bio = val;
  document.getElementById('profileBio').textContent = val;
}

// ══════════════════════════════════
//  EDIT PROFILE MODAL
// ══════════════════════════════════
function openEditModal() {
  if (!currentUser) return;
  document.getElementById('modalName').value = currentUser.name;
  document.getElementById('modalBio').value = currentUser.bio || '';
  document.getElementById('modalCity').value = currentUser.city || '';
  document.getElementById('modalState').value = currentUser.state || '';
  document.getElementById('modalAvatar').textContent = getInitials(currentUser.name);
  document.getElementById('modalAvatar').style.background = avatarGrad;
  document.getElementById('editModal').classList.add('active');
}
function closeEditModal() {
  document.getElementById('editModal').classList.remove('active');
}
function selectAvatarColor(el) {
  document.querySelectorAll('.avatar-color').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  avatarGrad = el.dataset.grad;
  document.getElementById('modalAvatar').style.background = avatarGrad;
  // live preview
  document.getElementById('profileAvatar').style.background = avatarGrad;
  document.getElementById('sidebarAvatar').style.background = avatarGrad;
}
function saveProfile() {
  const name = document.getElementById('modalName').value.trim();
  const bio = document.getElementById('modalBio').value.trim();
  const city = document.getElementById('modalCity').value.trim();
  const state = document.getElementById('modalState').value.trim();
  if (name) currentUser.name = name;
  currentUser.bio = bio;
  currentUser.city = city;
  currentUser.state = state;
  updateUserUI();
  closeEditModal();
  showToast('✅ Perfil atualizado com sucesso!');
}

// account form save
function saveAccount() {
  if (!currentUser) return;
  const name = document.getElementById('accName').value.trim();
  const email = document.getElementById('accEmail').value.trim();
  const bio = document.getElementById('accBio').value.trim();
  const city = document.getElementById('accCity').value.trim();
  const state = document.getElementById('accState').value.trim();
  const school = document.getElementById('accSchool').value.trim();
  const age = document.getElementById('accAge').value.trim();
  if (name) currentUser.name = name;
  if (email) currentUser.email = email;
  currentUser.bio = bio;
  currentUser.city = city;
  currentUser.state = state;
  currentUser.school = school;
  currentUser.age = age;
  updateUserUI();
  showToast('✅ Dados salvos com sucesso!');
}

// ══════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════
const pageTitles = {feed:'Início',search:'Pesquisar',materias:'Matérias',comunidades:'Comunidades',perfil:'Área do Usuário'};
function navigate(page, navEl) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  if (navEl) navEl.classList.add('active');
  document.getElementById('topbarTitle').textContent = pageTitles[page]||page;
  window.scrollTo({top:0,behavior:'smooth'});
}

// ══════════════════════════════════
//  MATÉRIAS — go from feed or search
// ══════════════════════════════════
function goToSubject(key) {
  // navigate to materias tab first
  const materiasNav = document.querySelectorAll('.nav-item')[2];
  navigate('materias', materiasNav);
  // then open the module
  setTimeout(()=>openModule(key), 50);
}

// ══════════════════════════════════
//  MODULE DETAIL
// ══════════════════════════════════
function openModule(key) {
  const s = SUBJECTS[key];
  if (!s) return;
  document.getElementById('subjectsView').style.display = 'none';
  document.getElementById('moduleView').classList.add('active');
  document.getElementById('moduleName').textContent = s.name;
  document.getElementById('moduleIcon').textContent = s.icon;
  document.getElementById('moduleDesc').textContent = s.desc;
  document.getElementById('moduleHeader').style.background = s.bg;
  // reset tabs
  document.querySelectorAll('.module-tab').forEach(t=>t.classList.remove('active'));
  document.querySelector('.module-tab').classList.add('active');
  ['tab-conteudo','tab-apostilas','tab-tarefas','tab-mapa'].forEach(id=>{
    document.getElementById(id).style.display = id==='tab-conteudo'?'block':'none';
  });
  // render lists
  renderList('contentList', s.conteudo);
  renderList('apostilasList', s.apostilas);
  renderList('tarefasList', s.tarefas);
  renderMapa(s.mapa);
  window.scrollTo({top:0,behavior:'smooth'});
}
function renderList(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item=>`
    <div class="content-item" onclick="showToast('${item.type==='video'?'▶️ Reproduzindo':item.type==='doc'?'📥 Baixando':'📝 Abrindo'} ${item.title.substring(0,30)}...')">
      <div class="content-type-icon ${item.cls}">${item.icon}</div>
      <div class="content-item-info">
        <div class="ci-title">${item.title}</div>
        <div class="ci-meta">${item.meta}</div>
      </div>
      <span class="ci-badge" style="background:${item.badgeCls};color:${item.badgeColor}">${item.badge}</span>
    </div>
  `).join('');
}
function renderMapa(steps) {
  const el = document.getElementById('mapaContent');
  el.innerHTML = steps.map(s=>{
    if (s==='→') return `<span style="font-size:20px;color:var(--text3)">→</span>`;
    return `<div style="background:var(--card2);border:1px solid var(--border);border-radius:10px;padding:10px 16px;font-size:13px;font-weight:600;">${s}</div>`;
  }).join('');
}
function closeModule() {
  document.getElementById('subjectsView').style.display = 'block';
  document.getElementById('moduleView').classList.remove('active');
}
function switchTab(tabEl, tabId) {
  document.querySelectorAll('.module-tab').forEach(t=>t.classList.remove('active'));
  tabEl.classList.add('active');
  ['tab-conteudo','tab-apostilas','tab-tarefas','tab-mapa'].forEach(id=>{
    document.getElementById(id).style.display = id===tabId?'block':'none';
  });
}

// ══════════════════════════════════
//  ÁREA DO USUÁRIO TABS
// ══════════════════════════════════
function switchAreaTab(tabEl, areaId) {
  document.querySelectorAll('.area-tab').forEach(t=>t.classList.remove('active'));
  tabEl.classList.add('active');
  ['area-salvos','area-conteudo','area-conta'].forEach(id=>{
    document.getElementById(id).style.display = id===areaId?'block':'none';
  });
  if (areaId==='area-conta') fillAccountForm();
}

// ══════════════════════════════════
//  FOLLOW
// ══════════════════════════════════
function toggleFollow(btn, name) {
  if (btn.classList.contains('following')) {
    btn.classList.remove('following');
    btn.textContent = 'Seguir';
    showToast('👋 Deixou de seguir '+name);
  } else {
    btn.classList.add('following');
    btn.textContent = 'Seguindo ✓';
    showToast('✅ Seguindo '+name);
    const el = document.getElementById('statFollowing');
    if (el) el.textContent = parseInt(el.textContent)+1;
  }
}

// ══════════════════════════════════
//  SEARCH
// ══════════════════════════════════
let activeFilter = 'todos';
function setFilter(f, el) {
  activeFilter = f;
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  filterResults();
}
function filterResults() {
  const q = (document.getElementById('mainSearchInput').value||'').toLowerCase();
  const cards = document.querySelectorAll('#searchResults .result-card');
  cards.forEach(card=>{
    const text = card.innerText.toLowerCase();
    const type = card.dataset.type||'';
    const matchQ = !q||text.includes(q);
    const matchF = activeFilter==='todos'||type===activeFilter;
    card.style.display = matchQ&&matchF?'block':'none';
  });
}

// ══════════════════════════════════
//  TOAST
// ══════════════════════════════════
function showToast(msg) {
  const toast = document.getElementById('toast');
  const parts = msg.split(' ');
  document.getElementById('toastIcon').textContent = parts[0];
  document.getElementById('toastMsg').textContent = parts.slice(1).join(' ');
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 2800);
}

// ══════════════════════════════════
//  UTILS
// ══════════════════════════════════
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

// close modal on overlay click
document.getElementById('editModal').addEventListener('click', function(e){
  if (e.target===this) closeEditModal();
});

// prefill login
document.getElementById('loginEmail').value = 'bah@gmail.com';
document.getElementById('loginPass').value = '';
