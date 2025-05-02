let state = { pompe: "OFF", buzzer: "OFF" };

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    if ("pompe" in body) state.pompe = body.pompe;
    if ("buzzer" in body) state.buzzer = body.buzzer;
    return res.status(200).json({ status: "ok", state });
  } else if (req.method === "GET") {
    return res.status(200).json(state);
  } else {
    return res.status(405).send("Method Not Allowed");
  }
}
