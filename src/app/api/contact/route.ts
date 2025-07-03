// app/api/contact/route.ts
import { Resend } from "resend";
import ContactEmail from "../../../../email/EmailTemplate";
// ✅ this is the email template

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, mobile, msg } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'vishalkumar041200@gmail.com',
      subject: "📬 New contact form on portfolio",
      react: ContactEmail({ firstname, lastname, email, mobile, msg }), // ✅ correct usage
      replyTo: email, // optional but useful
    });

    if (error) {
      return Response.json(
        {
          success: false,
          message: "Sorry for the inconvenience, please try again.",
          error,
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Thank you! I have received your info and will contact you soon.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Something went wrong on the server. Please try again.",
        error,
      },
      { status: 500 }
    );
  }
}
