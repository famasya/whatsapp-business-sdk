# WhatsApp Business SDK - Cloudflare Workers Compatible

This is a modified version of the WhatsApp Business SDK that has been optimized for Cloudflare Workers compatibility by removing Node.js-specific dependencies.

## Changes Made

### Removed Dependencies
- **Express.js** - Removed webhook server functionality (Express-based)
- **form-data** - Replaced with native Web API FormData
- **fs (File System)** - Removed file system operations
- **axios** - Replaced with native fetch API

### Modified Components

#### 1. REST Client (`src/utils/restClient.ts`)
- Replaced axios with native `fetch` API
- Added proper error handling for Workers environment
- Supports FormData uploads using Web APIs

#### 2. WABA Client (`src/WABA_client.ts`)
- **File Upload**: Now accepts `File` or `Blob` objects instead of file paths
- **Media Download**: Returns `ArrayBuffer` instead of writing to file system
- Added deprecated methods with helpful error messages for Node.js-specific functionality

#### 3. Webhook Functionality
- **Removed**: All Express.js-based webhook handlers
- **Reason**: Not needed for client-only usage in Workers

## Usage in Cloudflare Workers

### Basic Setup

```typescript
import { WABAClient } from 'whatsapp-business';

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const client = new WABAClient({
      apiToken: env.WHATSAPP_API_TOKEN,
      phoneId: env.WHATSAPP_PHONE_ID,
      accountId: env.WHATSAPP_ACCOUNT_ID,
    });

    // Your logic here
  }
};
```

### Sending Messages

```typescript
// Send text message
const response = await client.sendMessage({
  to: "1234567890",
  type: "text",
  text: {
    body: "Hello from Cloudflare Workers!"
  }
});
```

### File Upload (Changed API)

**Before (Node.js):**
```typescript
// ❌ This won't work in Workers
await client.uploadMedia({
  file: "/path/to/file.jpg",
  type: "image"
});
```

**After (Workers Compatible):**
```typescript
// ✅ Use File or Blob objects
const formData = await request.formData();
const file = formData.get('file') as File;

await client.uploadMedia({
  file: file, // File object from FormData
  type: "image"
});
```

### Media Download (Changed API)

**Before (Node.js):**
```typescript
// ❌ This won't work in Workers
await client.downloadMedia(mediaUrl, "/path/to/save/file.jpg");
```

**After (Workers Compatible):**
```typescript
// ✅ Returns ArrayBuffer
const mediaBuffer = await client.downloadMedia(mediaUrl);

// Return as response or process as needed
return new Response(mediaBuffer, {
  headers: {
    'Content-Type': 'application/octet-stream'
  }
});
```

## Environment Variables

Set these in your `wrangler.toml`:

```toml
[vars]
WHATSAPP_API_TOKEN = "your_api_token"
WHATSAPP_PHONE_ID = "your_phone_id"
WHATSAPP_ACCOUNT_ID = "your_account_id"
```

## Available Methods

All WhatsApp Business API methods are available:

### Business Profile
- `getBusinessProfile()`
- `updateBusinessProfile()`

### Messages
- `sendMessage()` - Send any type of message
- `markMessageAsRead()`

### Media
- `uploadMedia()` - Upload media (File/Blob)
- `getMedia()` - Get media URL
- `deleteMedia()` - Delete media
- `downloadMedia()` - Download as ArrayBuffer

### Phone Numbers
- `getBusinessPhoneNumbers()`
- `getSingleBusinessPhoneNumber()`
- `updateIdentityCheckState()`
- `requestPhoneNumberVerificationCode()`
- `verifyPhoneNumberCode()`
- `registerPhone()`
- `deregisterPhone()`
- `setupTwoStepAuth()`

### Health
- `getHealthStatus()`

## Migration Notes

If you're migrating from the original SDK:

1. **File Uploads**: Change from file paths to File/Blob objects
2. **Media Downloads**: Handle ArrayBuffer instead of file writes
3. **Webhooks**: Implement your own webhook handling in Workers if needed
4. **Error Handling**: Errors now use standard fetch error patterns

## Example Worker

See `examples/cloudflare-worker-example.ts` for a complete working example.

## Compatibility

- ✅ Cloudflare Workers
- ✅ Web browsers
- ✅ Deno
- ✅ Modern Node.js (with polyfills)
- ❌ Legacy Node.js environments (use original SDK)
