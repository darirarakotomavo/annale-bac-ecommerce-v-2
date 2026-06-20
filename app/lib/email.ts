import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html?: string;
  text?: string;
}) {
  try {
    await transporter.sendMail({
      from: `"Richard RAKOTOMAVO" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      text,
    });
    return { success: true };
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return { success: false, error };
  }
}

export async function sendWelcomeEmail(email: string, name: string) {
  return sendEmail({
    to: email,
    subject: "🎓 Bienvenue sur Annales Bac S 2025 !",
    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 40px 20px;">
                <div style="background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                    <h1 style="color: #1a365d; margin-bottom: 20px;">🎓 Bienvenue ${name} !</h1>
                    <p style="color: #4a5568; line-height: 1.6;">Merci de vous être inscrit sur <strong>Annales Bac S 2025</strong>.</p>
                    <p style="color: #4a5568; line-height: 1.6;">Vous avez maintenant accès à :</p>
                    <ul style="color: #4a5568; line-height: 1.8; padding-left: 20px;">
                        <li>📚 Des cours de qualité</li>
                        <li>📄 Des corrigés détaillés</li>
                        <li>🎬 Des vidéos YouTube</li>
                        <li>💬 Un accompagnement personnalisé</li>
                    </ul>
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="${
                          process.env.NEXT_PUBLIC_APP_URL ||
                          "http://localhost:3000"
                        }" style="background: #1a365d; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
                            Découvrir les cours →
                        </a>
                    </div>
                    <p style="margin-top: 30px; color: #718096; font-size: 14px; text-align: center;">
                        À bientôt,<br>
                        L'équipe Annales Bac S 2025
                    </p>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                    <p style="color: #a0aec0; font-size: 12px; text-align: center;">
                        Cet email a été envoyé à ${email}. Si vous ne souhaitez plus recevoir nos emails, <a href="#" style="color: #a0aec0;">désinscrivez-vous</a>.
                    </p>
                </div>
            </div>
        `,
    text: `Bienvenue ${name} ! Merci de vous être inscrit sur Annales Bac S 2025.`,
  });
}
