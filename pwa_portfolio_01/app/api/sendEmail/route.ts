import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

   const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});


    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Portfolio Message : ${subject}`,
        text: `Name : ${name} \n Email : ${email} \n Message : ${message}`,
    }
    try {
        await transport.sendMail(mailOptions);
        return new Response("Email send ,", { status: 200 })
    } catch (e) {
        return new Response(`Failed to send email ${e}`, { status: 500 });
    }
}