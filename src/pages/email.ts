import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const runtime = "edge";
export const dynamic = "force-dynamic";

export const POST: APIRoute = async ({ request }) => {
  const body: { email: string; message: string } = JSON.parse(
    await request.text(),
  );
  console.log("is dev", import.meta.env.DEV);

  return await new Promise(async (resolve, reject) => {
    const { error } = await resend.emails.send({
      from: `${body.email} <onboarding@resend.dev>`,
      to: [
        import.meta.env.DEV
          ? "delivered@resend.dev"
          : "kareemmahlees@gmail.com",
      ],
      subject: "Contacting from website",
      text: body.message,
    });

    if (error) {
      console.log("is error", error);
      reject(
        new Response(
          JSON.stringify({
            error: true,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        ),
      );
    }
    resolve(
      new Response(
        JSON.stringify({
          error: false,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      ),
    );
  });
};
