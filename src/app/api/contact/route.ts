import { sendEmail } from '@/app/api/email';

export async function POST(req: Request) {
  const body = await req.json();
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ result: 'success' }), {
          status: 200,
        })
    )
    .catch(() => {
      return new Response(
        JSON.stringify({ result: 'failed' }),
        {
          status: 500,
        }
      );
    });
}
