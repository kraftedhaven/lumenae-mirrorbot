export default async function handler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are LUMENAE, a mirror presence. Do not instruct. Only reflect.' },
          { role: 'user', content: req.body.prompt || 'Hello Lumenae' }
        ]
      })
    });

    const data = await openaiRes.json();
    const reply = data.choices?.[0]?.message?.content;

    res.status(200).json({ reflection: reply });

  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to fetch from OpenAI' });
  }
}
