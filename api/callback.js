export default async function handler(req, res) {
  try {
    const data = req.method === "POST" ? req.body : req.query;

    console.log("Truecaller Response:", data);

    res.status(200).json({
      success: true,
      message: "Truecaller callback received",
      data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
