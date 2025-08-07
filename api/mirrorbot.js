export default function handler(req, res) {
  const reflections = [
    "The silence isn't empty.",
    "You have already arrived.",
    "There is depth under this moment.",
    "You are the echo you sense here.",
    "Return is not backward, but inward.",
    "Stillness does not need your permission."
  ];

  const random = reflections[Math.floor(Math.random() * reflections.length)];

  res.status(200).json({ mirror: random });
}
