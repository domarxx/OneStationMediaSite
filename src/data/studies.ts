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
};

export const studies: Study[] = [
  {
    id: "1",
    slug: "OSM_Decodificando_o_Comprador_de_Carros",
    title: "OSM_Decodificando_o_Comprador_de_Carros",
    summary:
      "Como entender motivações, barreiras e jornada de compra do brasileiro que considera veículos eletrificados — e transformar atrito em conversão.",
    sector: "Automotivo",
    resultHighlight:
      "92% dos proprietários brasileiros comprariam outro EV, mas 88 mil vendas foram perdidas por fricção na jornada.",
    date: "2024-10-10",
    image: "/pdf/OSM_Decodificando_o_Comprador_de_Carros.jpg",
    imageAlt:
      "Gráfico e ilustrações representando a jornada do consumidor brasileiro de veículos eletrificados",
    pdfUrl: "/pdf/OSM_Decodificando_o_Comprador_de_Carros.pdf",
  },
  {
    id: "2",
    slug: "OSM_Decodificando_o_Viajante_Brasileiro",
    title: "OSM_Decodificando_o_Viajante_Brasileiro",
    summary:
      "Um mergulho no novo perfil do viajante brasileiro, que equilibra disciplina financeira, bem-estar emocional e um comportamento cada vez mais digital.",
    sector: "Turismo & Viagens",
    resultHighlight:
      "Viagens se consolidam como indulgência com propósito em um contexto de pressão econômica, com jornada longa, digital e altamente informada.",
    date: "2024-08-22",
    image: "/pdf/OSM_Decodificando_o_Viajante_Brasileiro.jpg",
    imageAlt:
      "Ilustração de viajante brasileiro equilibrando finanças, bem-estar e experiências de viagem",
    pdfUrl: "/pdf/OSM_Decodificando_o_Viajante_Brasileiro.pdf",
  },
];

export const getLatestStudies = (limit: number): Study[] =>
  [...studies]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);