import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body: { email: string; message: string } = JSON.parse(
    await request.text(),
  );
  const { error } = await resend.emails.send({
    from: import.meta.env.DEV ? "Acme <onboarding@resend.dev>" : body.email,
    to: [
      import.meta.env.DEV ? "delivered@resend.dev" : "kareemmahlees@gmail.com",
    ],
    subject: "Contacting from website",
    text: body.message,
  });
  if (error) {
    return new Response(
      JSON.stringify({
        error: true,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
  return new Response(
    JSON.stringify({
      error: false,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
