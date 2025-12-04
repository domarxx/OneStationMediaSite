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
  detailSubtitle?: string;
  sections?: {
    id: string;
    title: string;
    paragraphs: string[];
  }[];
};

export const studies: Study[] = [
  {
    id: "1",
    slug: "decodificando-o-comprador-de-carros",
    title: "Decodificando o comprador de carros",
    summary:
      "Como entender motivações, barreiras e jornada de compra do brasileiro que considera veículos eletrificados — e transformar atrito em conversão.",
    sector: "Automotivo",
    resultHighlight:
      "92% dos proprietários brasileiros comprariam outro EV, mas 88 mil vendas foram perdidas por fricção na jornada.",
    date: "2024-10-10",
    image: "/placeholder.svg",
    imageAlt:
      "Gráfico e ilustrações representando a jornada do consumidor brasileiro de veículos eletrificados",
    detailSubtitle:
      "A partir do estudo proprietário da One Station Media, conectamos dados de mercado e comportamento digital para mapear quem é, como pensa e por que desiste o comprador de veículos híbridos e elétricos no Brasil.",
    sections: [
      {
        id: "contexto-mercado",
        title:
          "Contexto de mercado: eletrificação deixa de ser futuro e vira presente",
        paragraphs: [
          "O mercado automotivo brasileiro chegou a um ponto de inflexão: a mobilidade elétrica deixou de ser apenas uma promessa e passou a fazer parte da realidade imediata do setor. Estudos da Anfavea projetam que, até 2040, os veículos eletrificados podem representar mais de 90% de todas as vendas de veículos novos no país.",
          "Ao mesmo tempo, o Brasil acompanha o movimento global. Em 2024, mais de 20% dos carros novos vendidos no mundo eram elétricos, enquanto o share de veículos eletrificados no Brasil praticamente dobrou em pouco tempo, saindo da faixa de 4% para perto de 10% das vendas totais.",
          "Esse crescimento, no entanto, não acontece de forma linear. Ele é impactado por percepções, medos e lacunas de informação que influenciam diretamente a decisão do consumidor que está avaliando migrar para um veículo híbrido ou 100% elétrico.",
        ],
      },
      {
        id: "gap-interesse-acao",
        title: "O gap entre interesse e ação: 88 mil vendas perdidas em 2024",
        paragraphs: [
          "Um dos dados mais contundentes do estudo é o volume de oportunidade perdida. De acordo com análise da Abeifa, estima-se que, em 2024, cerca de 88 mil vendas potenciais de veículos eletrificados foram abandonadas ao longo da jornada.",
          "Esses consumidores chegaram a iniciar o processo de compra — pesquisando, comparando modelos, visitando canais digitais e, em muitos casos, chegando à concessionária —, mas foram dissuadidos por barreiras práticas e emocionais, desistindo antes da conversão.",
          "O desafio estratégico deixa de ser gerar interesse do zero e passa a ser reduzir a fricção: como transformar intenção qualificada em compra efetiva, diminuindo inseguranças e tornando a decisão mais simples, clara e racional para o consumidor.",
        ],
      },
      {
        id: "perfil-comprador",
        title:
          "Quem é o comprador brasileiro de veículos eletrificados hoje",
        paragraphs: [
          "Os dados mostram que o público de veículos híbridos e elétricos no Brasil tende a ter maior capacidade financeira e alta afinidade com tecnologia. As faixas etárias com maior propensão de compra se concentram entre 35 e 45 anos, com destaque para os grupos de 35–40 anos (26%) e 41–45 anos (25%).",
          "Mulheres têm um papel central na jornada: elas representam 42% do processo de compra de eletrificados. Em muitos casos, são exatamente as consumidoras que, partindo da intenção de adquirir um veículo tradicional, ampliam a consideração para incluir elétricos e híbridos. Porém, também são maioria entre as que acabam adiando ou desistindo da decisão por insegurança em relação à tecnologia.",
          "Além disso, o estudo segmenta o público em perfis comportamentais como Eco-Tech, Econômico Pragmático e Tech Elite Driver, cada um com motivações específicas — da sustentabilidade à busca por status e inovação. Entender essas nuances é essencial para direcionar mensagens, ofertas e formatos de mídia mais eficazes.",
        ],
      },
      {
        id: "motivacoes-barreiras",
        title: "Motivações declaradas vs. decisões reais: o papel da economia",
        paragraphs: [
          "Ao cruzar diferentes fontes, uma dicotomia importante aparece com clareza. Em pesquisas globais como o Global EV Driver Survey, a 'preocupação ambiental' surge como a principal motivação declarada para considerar um veículo eletrificado.",
          "Quando analisamos, porém, estudos focados em intenção de compra e comportamento efetivo, como os da WebMotors, os fatores econômicos passam à frente: economia de combustível, custo total de propriedade e benefícios financeiros de longo prazo se tornam decisivos.",
          "Em outras palavras: sustentabilidade é importante para narrativa e posicionamento, mas a conversão acontece quando a conta fecha. Marcas que conseguem traduzir o benefício ambiental em argumentos concretos de economia e praticidade tendem a capturar melhor essa demanda reprimida.",
        ],
      },
      {
        id: "jornada-hibrida",
        title:
          "Uma jornada híbrida: digital intenso, mas com decisão validada no físico",
        paragraphs: [
          "A fase ativa da jornada de compra de veículos eletrificados é rápida e altamente digital. Estudos mostram que, a partir do gatilho de troca ou necessidade, o tempo médio até a compra gira em torno de um mês — e, para híbridos e elétricos, esse ciclo pode ser ainda mais curto.",
          "YouTube, Instagram, buscadores e sites de montadoras formam o núcleo de pesquisa e comparação, com grande peso para reviews independentes e recomendações. Esses pontos de contato são quase três vezes mais influentes do que apenas a mídia paga no momento de converter um consumidor já aquecido.",
          "Apesar disso, a decisão final continua profundamente ligada à experiência física. Cerca de 90% dos consumidores consideram a visita à concessionária importante, e 87% veem o test drive como etapa indispensável. Estratégias de mídia e conteúdo, portanto, precisam estar desenhadas para conectar essa jornada híbrida de ponta a ponta.",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "decodificando-o-viajante-brasileiro",
    title: "Decodificando o viajante brasileiro",
    summary:
      "Um mergulho no novo perfil do viajante brasileiro, que equilibra disciplina financeira, bem-estar emocional e um comportamento cada vez mais digital.",
    sector: "Turismo & Viagens",
    resultHighlight:
      "Viagens se consolidam como indulgência com propósito em um contexto de pressão econômica, com jornada longa, digital e altamente informada.",
    date: "2024-08-22",
    image: "/placeholder.svg",
    imageAlt:
      "Ilustração de viajante brasileiro equilibrando finanças, bem-estar e experiências de viagem",
    detailSubtitle:
      "A partir do estudo proprietário da One Station Media, conectamos comportamento financeiro, consumo digital e tendências do turismo para decodificar quem é o viajante brasileiro e como ele decide para onde ir.",
    sections: [
      {
        id: "introducao-contexto",
        title:
          "Viagem como bem-estar, autocuidado e construção de identidade",
        paragraphs: [
          "O estudo 'Decodificando o viajante brasileiro' integra quatro lentes essenciais: comportamento financeiro, consumo digital, tendências do turismo e percepção internacional do Brasil.",
          "Depois de um ciclo de instabilidade econômica e reorganização emocional pós-pandemia, o brasileiro emerge como um consumidor mais atento, disciplinado e exigente. Ele quer viver bem, gastar melhor e garantir que cada experiência entregue propósito, valor e equilíbrio emocional.",
          "Nesse contexto, viajar deixa de ser apenas luxo aspiracional ou lazer ocasional. A viagem assume o papel de descompressão, bem-estar e retomada de autonomia pessoal — um ato de autocuidado e construção identitária.",
        ],
      },
      {
        id: "novo-contexto-financeiro",
        title: "Novo contexto cultural e financeiro: austeridade seletiva",
        paragraphs: [
          "A relação do brasileiro com o dinheiro passa por uma mudança estrutural. O ciclo que começou com medo e instabilidade evolui para autonomia, educação financeira e, mais recentemente, para a inteligência assistiva, segundo o relatório 'Consciência e Prosperidade' (Itaú & Consumoteca, 2025).",
          "Hoje, 78% dos entrevistados dizem não ter mais desconforto em falar de dinheiro, marcando o fim de uma era de tabu financeiro. Prosperidade deixa de ser apenas acumulação material e passa a incluir equilíbrio emocional e autonomia.",
          "Mesmo com inflação alta — cenário em que 95% dos consumidores percebem aumento de preços e 82% trocam produtos por versões mais baratas — o brasileiro não corta tudo. Surge uma lógica de austeridade seletiva: cortes em supérfluos de baixa relevância, enquanto experiências com carga emocional, como viagens, seguem sendo priorizadas.",
        ],
      },
      {
        id: "pressao-e-bem-estar",
        title:
          "Pressão econômica, mas prioridade ao bem-estar e às experiências",
        paragraphs: [
          "Em vez de abandonar indulgências, o consumidor reorganiza a cesta de consumo. Segundo OpinionBox (2025), 73% afirmam manter 'mimos' mesmo em cenário de inflação elevada — como conexões sociais, experiências gastronômicas e momentos de prazer.",
          "A viagem entra nesse grupo como indulgência com propósito: ela não é vista apenas como gasto, mas como ferramenta de saúde emocional, reconexão e pausa estratégica para organizar a vida e a mente.",
          "Esse movimento impulsiona tendências como slow travel, destinos de natureza, experiências de espiritualidade e vivências imersivas. Microviagens curtas e recorrentes ganham força por oferecer resets frequentes sem exigir grandes orçamentos.",
        ],
      },
      {
        id: "perfil-viajante",
        title: "Quem é o viajante brasileiro hoje",
        paragraphs: [
          "O viajante brasileiro contemporâneo é, ao mesmo tempo, racional e emocional, digital e conectado à natureza, econômico e indulgente. Ele busca autonomia financeira e emocional, valor no gasto e sentido na experiência.",
          "Dados da Serasa Experian indicam que 41,7% dos viajantes estão entre 24 e 38 anos, com concentração forte na faixa de 29–33 anos — fase da vida em que equilíbrio emocional e experiências passam a ser prioridade.",
          "No recorte de renda, 28,7% têm renda mensal acima de R$ 10 mil, enquanto cerca de 22,5% ganham entre R$ 2 e 4 mil, mostrando um público amplo, mas com forte presença de classe média-alta. Mais de 40% possuem score de crédito entre 801 e 1.000, reforçando um perfil planejador, disciplinado e com boa saúde financeira.",
        ],
      },
      {
        id: "jornada-compra",
        title:
          "Jornada de compra longa, comparativa e altamente digital",
        paragraphs: [
          "A jornada do viajante brasileiro é longa, comparativa e informada. O topo do funil é dominado por canais digitais: 62% iniciam a pesquisa no Google, 51% no Instagram, 40% no YouTube e 41% em portais e blogs especializados.",
          "Essa inspiração é altamente funcional: o viajante busca clima, rota, custo, logística, recomendação social e validação emocional. TikTok já aparece em crescimento, especialmente entre os mais jovens, reforçando a lógica de 'feedbooking', em que inspiração e conversão se aproximam.",
          "No meio do funil, há uma fase de curadoria híbrida — pesquisa, comparação e planejamento financeiro. Cerca de 63% pesquisam com 6 meses ou mais de antecedência e 41% vão poupando ao longo do tempo. Transparência de preço, possibilidade de travar tarifas e simular gastos tornam-se ativos decisivos.",
        ],
      },
      {
        id: "conversao-e-super-eshopper",
        title: "Um super e-shopper que busca controle e confiança",
        paragraphs: [
          "Na conversão, predomina o comportamento direto: 64% compram no site ou app da companhia aérea, considerado o canal mais confiável por 67% dos viajantes. OTAs e metabuscadores entram principalmente como ferramentas de pesquisa e comparação.",
          "O viajante é, antes de tudo, um super e-shopper. Segundo o Ecommerce Trends 2026, 88% compram online ao menos uma vez por mês, 78% finalizam transações pelo celular e 85% pesquisam antes de comprar. A confiança social é central: 68% já compraram influenciados por conteúdos e 28% verificam reputação em sites como Reclame AQUI.",
          "Esse comportamento migra diretamente para o turismo, onde o risco percebido é maior e o ciclo de decisão exige validação racional e emocional. Marcas que não integram reputação, reviews, transparência e experiência mobile fluida ficam para trás na disputa pela preferência.",
        ],
      },
      {
        id: "ia-e-oportunidades",
        title:
          "IA, assistência inteligente e oportunidades estratégicas para marcas de turismo",
        paragraphs: [
          "Pesquisas de tendências em turismo apontam a inteligência artificial como elemento central do futuro da jornada de viagem — mas com uma condição clara: a tecnologia precisa humanizar e facilitar, sem roubar a sensação de controle do viajante.",
          "O consumidor quer curadoria personalizada, simulação financeira, sugestão de roteiros, alertas de preço e suporte inteligente, mantendo a autonomia de decisão. A lógica muda: decisões passam a ser assistidas por tecnologia, mas controladas pelo viajante.",
          "Para capturar esse público, marcas precisam integrar tecnologia, cuidado humano e propósito. Estratégias efetivas incluem assistentes baseados em IA para planejamento, preços transparentes, flexibilidade, social commerce com influenciadores e curadoria de experiências responsáveis, imersivas e regenerativas — sempre casando racionalidade financeira com narrativa emocional.",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "saude-brand-awareness",
    title: "Saúde: Construção de Marca com Dados",
    summary:
      "Como utilizamos dados de comportamento e contexto para impulsionar awareness para uma marca do setor de saúde.",
    sector: "Saúde",
    resultHighlight: "+120% em brand lift em relação ao benchmark",
    date: "2024-05-15",
    image: "/placeholder.svg",
    imageAlt: "Profissional de saúde em ambiente moderno com elementos digitais",
  },
  {
    id: "4",
    slug: "tecnologia-lancamento-saas",
    title: "Tecnologia: Lançamento de Plataforma SaaS B2B",
    summary:
      "Campanha full funnel para lançamento de solução SaaS B2B, integrando mídia programática, vídeo e formatos de alto impacto.",
    sector: "Tecnologia",
    resultHighlight: "Taxa de conversão 3x maior que a meta inicial",
    date: "2024-02-01",
    image: "/placeholder.svg",
    imageAlt: "Ilustração de plataforma SaaS em múltiplos dispositivos",
  },
];

export const getLatestStudies = (limit: number): Study[] =>
  [...studies]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);


