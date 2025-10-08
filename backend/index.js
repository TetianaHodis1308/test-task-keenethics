import express from "express";
import cors from "cors";
import { Document, Packer, Paragraph, TextRun } from "docx";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-resume", async (req, res) => {
  try {
    const {
      name,
      position,
      city,
      email,
      skills,
      experience,
      education,
      about,
    } = req.body;

    if (!name || !position || !city || !email || !skills || !experience) {
      return res.status(400).json({ error: "Заповніть обов’язкові поля" });
    }

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${name}: ${position}`,
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            new Paragraph({ text: `📍 Місто: ${city}` }),
            new Paragraph({ text: `📧 Email: ${email}` }),
            new Paragraph({ text: `🛠️ Навички: ${skills}` }),
            new Paragraph({ text: `💼 Досвід: ${experience}` }),
            education
              ? new Paragraph({ text: `🎓 Освіта: ${education}` })
              : null,
            about ? new Paragraph({ text: `📝 Про себе: ${about}` }) : null,
          ].filter(Boolean),
        },
      ],
    });
    const buffer = await Packer.toBuffer(doc);

    res.set({
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": "attachment; filename=resume.docx",
    });

    res.send(buffer);
  } catch (error) {
    console.error("Error generating resume:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
