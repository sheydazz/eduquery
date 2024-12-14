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
          content:`crea un cuestionario con este tema ${prompt} y solo ${numeropreguntas}
          preguntas tu respuesta debera seguir este formato, no deberas devolver mas nada
          que no sea el formato, la respuesta ira tal cual el siguiente formato
          [
            {
              "formTitle": "aqui va el nombre del cuestionario",
              "formDescription": "aquí va una breve descripcion"
            },
            [
              {
                "title": "aqui va la pregunta",
                "type": "RADIO",
                "correctAnswer": "la respuesta correcta deberá ir aca",
                "options": ["option 1", "option 2", "option 3", "option n"],
                "options2": [{"value": "option 1"}, {"value": "option 2"}, {"value": "option 3"}, {"value": "optio}n n"}]
              },
            ]
          ]`,
        },
      ],
    });

    // Respuesta de la IA
    const generatedQuestions = chatResponse.choices[0].message.content;
    // Parsear a objeto JSON
    const parsedResponse = JSON.parse(generatedQuestions);

    // Devolver el array con solo las dos posiciones
    return res.status(200).json(parsedResponse);
  } catch (error) {
    console.error("Error al generar preguntas:", error);
    return res
      .status(500)
      .json({ message: "Error al procesar la solicitud", error });
  }
}
