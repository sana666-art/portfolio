export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    console.log("New contact message:", { name, email, message });

    return res.status(200).json({
      success: true,
      message: "Message received"
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
}