import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });

export default async function handler(req, res) {
  const { prompt, questionsNumber } = req.body;

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
          content:
            `crea un cuestionario con este tema ${prompt} no presentes tu respuesta con cosas como
            "Aqui esta la respuesta", no les des formato adicional.
            solo sigue el siguiente formato:

            Devuelve un array con 2 items
            el primero debe ser un objeto de js y debe tener los atributos de:
            formTitle, formDescription
            
            el segunto item debe ser un array con unicamente ${questionsNumber} objetos
            js que deben contener los atributos de 
            title, type, correctAnswer, options, 
            type debe ser "RADIO"
            options debe ser un array así: [{'value': 'option'}, {'value': 'option'}]
            y así por cada opción

            inventa cualquier formulario.

            IMPORTANTE: no digas mas nada, no presentes la respuesta con cosas como "Aqui
            esta la respuesta", no le des formato adicional, solo devuelve el array`,
        },
      ],
    });
    //respuesta de la ia
    const generatedQuestions = chatResponse.choices[0].message.content;

    // Turn string into array object
    const cleanedResponse = JSON.parse(generatedQuestions);

    // Si se parsea con éxito, devolver el objeto
    return res.status(200).json({ cleanedResponse });
  } catch (error) {
    console.error("Error al generar preguntas:", error);
    return res
      .status(500)
      .json({ message: "Error al procesar la solicitud", error });
  }
}
