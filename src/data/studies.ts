export type Study = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  sector: string;
  resultHighlight: string;
  date: string; // ISO string
  image: string;
  imageAlt: string;
  pdfUrl: string; // URL do PDF para download
  detailSubtitle?: string; // Opcional
  sections?: {             // Opcional
    id: string;
    title: string;
    paragraphs: string[];
  }[];
};

export const studies: Study[] = [
  {
    id: "1",
    slug: "OSM_Decodificando_o_Comprador_de_Carros",
    title: "Decodificando o Comprador de Carros",
    summary:
      "Como entender motivações, barreiras e jornada de compra do brasileiro que considera veículos eletrificados — e transformar atrito em conversão.",
    sector: "Automotivo",
    resultHighlight:
      "92% dos proprietários brasileiros comprariam outro EV, mas 88 mil vendas foram perdidas por fricção na jornada.",
    date: "2024-10-10",
    image: "/pdf/OSM_Decodificando_o_Comprador_de_Carros.jpg",
    imageAlt: "Gráfico e ilustrações representando a jornada do consumidor brasileiro de veículos eletrificados",
    pdfUrl: "/pdf/OSM_Decodificando_o_Comprador_de_Carros.pdf",
    
    // Conteúdo extraído do PDF "Comprador de Carros"
    detailSubtitle: "O mercado automotivo atingiu um ponto de inflexão: a mobilidade elétrica migrou de promessa futura para realidade imediata, mas enfrenta um gap crítico entre interesse e conversão real.",
    sections: [
      {
        id: "cenario",
        title: "O Paradoxo do Interesse vs. Ação",
        paragraphs: [
          "O Brasil vive um momento único: o share de vendas de veículos eletrificados dobrou, enquanto no mundo atingiu seu maior patamar. A satisfação é altíssima: 92% dos atuais proprietários de EVs comprariam outro.",
          "No entanto, estima-se que 88.000 vendas potenciais foram perdidas em 2024. Consumidores iniciaram a jornada, mas foram dissuadidos por barreiras como insegurança com infraestrutura, dúvidas sobre revenda e falta de informações claras."
        ]
      },
      {
        id: "jornada",
        title: "A Decisão Começa Antes da Jornada",
        paragraphs: [
          "Dados indicam que 84% das compras automotivas são decididas no cérebro do consumidor antes mesmo dele começar a pesquisar ativamente. A fase visível da jornada (os 30 dias de pesquisa) serve apenas para validar uma decisão emocional já tomada.",
          "Marcas que tentam disputar atenção apenas no momento da busca (fundo de funil) chegam tarde demais. A liderança pertence a quem constrói confiança e reputação meses antes do gatilho de compra."
        ]
      },
      {
        id: "perfis",
        title: "Quem é o Comprador de Eletrificados?",
        paragraphs: [
          "Identificamos três perfis principais: o 'Eco-Tech', motivado por sustentabilidade e inovação; o 'Econômico Pragmático', focado puramente na redução de custos operacionais a longo prazo; e o 'Tech Elite', que busca status e diferenciação.",
          "Para converter esses públicos, a estratégia não deve ser apenas superar objeções, mas reduzir sistematicamente o risco percebido da decisão de compra."
        ]
      }
    ]
  },
  {
    id: "2",
    slug: "OSM_Decodificando_o_Viajante_Brasileiro",
    title: "Decodificando o Viajante Brasileiro",
    summary:
      "Um mergulho no novo perfil do viajante brasileiro, que equilibra disciplina financeira, bem-estar emocional e um comportamento cada vez mais digital.",
    sector: "Turismo & Viagens",
    resultHighlight:
      "Viagens se consolidam como indulgência com propósito em um contexto de pressão econômica, com jornada longa, digital e altamente informada.",
    date: "2024-08-22",
    image: "/pdf/OSM_Decodificando_o_Viajante_Brasileiro.jpg",
    imageAlt: "Ilustração de viajante brasileiro equilibrando finanças, bem-estar e experiências de viagem",
    pdfUrl: "/pdf/OSM_Decodificando_o_Viajante_Brasileiro.pdf",

    // Conteúdo extraído do PDF "Viajante Brasileiro"
    detailSubtitle: "Após a instabilidade pós-pandemia, o brasileiro emerge como um viajante disciplinado e exigente: ele quer viver bem, gastar melhor e garantir que cada experiência entregue propósito e equilíbrio emocional.",
    sections: [
      {
        id: "contexto",
        title: "Austeridade Seletiva e Bem-Estar",
        paragraphs: [
          "Mesmo em um cenário de pressão econômica e inflação, a viagem deixou de ser supérflua para se tornar uma 'indulgência com propósito'. O consumidor corta gastos em outras áreas, mas mantém as viagens como uma ferramenta de descompressão e saúde mental.",
          "73% dos consumidores afirmam manter esses momentos de prazer mesmo com o orçamento apertado, buscando microescapadas e destinos que ofereçam reconexão."
        ]
      },
      {
        id: "perfil",
        title: "O Perfil do Novo Viajante",
        paragraphs: [
          "Estamos falando de um consumidor majoritariamente jovem-adulto (24-38 anos), com alta autonomia financeira e digital. Ele é um 'Super E-shopper': 88% compram online mensalmente e usam o mobile como centro de decisão.",
          "Esse viajante é planejador: 63% pesquisam com 6 meses de antecedência e 41% poupam especificamente para isso ao longo do ano, buscando sempre a melhor relação entre custo e experiência."
        ]
      },
      {
        id: "digital",
        title: "A Jornada é Híbrida e Assistida",
        paragraphs: [
          "A compra de viagem hoje é validada socialmente. O Instagram e TikTok funcionam como vitrines ativas ('feedbooking'), onde inspiração e conversão se misturam.",
          "A Inteligência Artificial surge não para substituir o viajante, mas para empoderá-lo: ele quer curadoria personalizada e simulação financeira, mas exige manter o controle final da decisão para evitar frustrações."
        ]
      }
    ]
  },
];

export const getLatestStudies = (limit: number): Study[] =>
  [...studies]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);