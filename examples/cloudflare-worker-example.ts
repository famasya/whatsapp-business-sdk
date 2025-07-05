// Example of using the WhatsApp Business SDK in Cloudflare Workers

import { WABAClient } from '../src/index';

// Example Cloudflare Worker
export default {
  async fetch(request: Request, env: any): Promise<Response> {
    // Initialize the WhatsApp Business client
    const client = new WABAClient({
      apiToken: env.WHATSAPP_API_TOKEN, // Store in Cloudflare Workers environment variables
      phoneId: env.WHATSAPP_PHONE_ID,
      accountId: env.WHATSAPP_ACCOUNT_ID,
    });

    try {
      // Example: Send a text message
      if (request.method === 'POST') {
        const { to, message } = await request.json();

        const response = await client.sendMessage({
          to: to,
          type: 'text',
          text: {
            body: message
          }
        });

        return new Response(JSON.stringify(response), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Example: Upload media (using File from FormData)
      if (request.method === 'PUT') {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const type = formData.get('type') as string;

        if (!file || !type) {
          return new Response('Missing file or type', { status: 400 });
        }

        const response = await client.uploadMedia({
          file: file, // File object works directly in Workers
          type: type
        });

        return new Response(JSON.stringify(response), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Example: Download media
      if (request.method === 'GET') {
        const url = new URL(request.url);
        const mediaUrl = url.searchParams.get('mediaUrl');

        if (!mediaUrl) {
          return new Response('Missing mediaUrl parameter', { status: 400 });
        }

        const mediaBuffer = await client.downloadMedia(mediaUrl);

        return new Response(mediaBuffer, {
          headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename="media"'
          }
        });
      }

      return new Response('Method not allowed', { status: 405 });

    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

// Environment variables needed in wrangler.toml:
// [vars]
// WHATSAPP_API_TOKEN = "your_api_token"
// WHATSAPP_PHONE_ID = "your_phone_id"
// WHATSAPP_ACCOUNT_ID = "your_account_id"
