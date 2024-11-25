const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });

export default async function handler(req, res) {

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ message: 'Falta el prompt en la solicitud' });
  }
  try {
    // Solicitud a Mistral para que genere las preguntas
    const chatResponse = await client.chat.complete({
      model: 'open-mixtral-8x22b',
      messages: [{ role: 'user', content: `Genera preguntas sobre: ${prompt}` }],
    });
    //respuesta de la ia 
    const generatedQuestions = chatResponse.choices[0].message.content;

    //poner la respuesta mas bonita(temporal)
    generatedQuestions
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line) => line.replace(/^\d+\.\s*/, ''));

    //devuelve la respuesta
    return res.status(200).json({ generatedQuestions });

  } catch (error) {
    console.error('Error al generar preguntas:', error);
    return res.status(500).json({ message: 'Error al procesar la solicitud', error });
  }
}
