import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });

export default async function handler(req, res) {
  const { prompt, numeropreguntas } = req.body;
  if (!prompt) {
    return res.status(400).json({ message: "Falta el prompt en la solicitud" });
  }
  try {
    // Solicitud a Mistral para que genere las preguntas
    const chatResponse = await client.chat.complete({
      model: "open-mixtral-8x22b",
      messages: [
        {
          role: "user",
          content: `crea un cuestionario con este tema ${prompt} tu respuesta tiene que seguir esta logica crea ${numeropreguntas} preguntas tu respuesta debera seguir este formato, no deberas devolver mas nada que no sea el formato, la respuesta ira tal cual el formato  [
  {
    "formTitle": "aqui va el nombre del cuestionario",
    "formDescription": "aquí va una breve descripcion"
  },
  [
    {
      "title": "aqui va la pregunta",
      "type": "en este puedes poner RADIO O CHECKBOX",
      "correctAnswer": "la espuesta correcta deberá ir aca ",
      "options": ["option 1", "option2", "ption 3", "option n"]
    },
    
  ]
]  `,
        },
      ],
    });
    //respuesta de la ia
    const generatedQuestions = chatResponse.choices[0].message.content;
    // Limpieza inicial de saltos de línea y comillas escapadas
    const cleanedResponse = generatedQuestions
      .replace(/\\n/g, "") // Eliminar saltos de línea escapados
      .replace(/\\'/g, "'") // Reemplazar comillas simples escapadas
      .replace(/\\"/g, '"'); // Reemplazar comillas dobles escapadas

    console.log("log de la respuesta limpiada",cleanedResponse);

    // Si se parsea con éxito, devolver el objeto
    return res.status(200).json({ cleanedResponse });
  } catch (error) {
    console.error("Error al generar preguntas:", error);
    return res
      .status(500)
      .json({ message: "Error al procesar la solicitud", error });
  }
}
