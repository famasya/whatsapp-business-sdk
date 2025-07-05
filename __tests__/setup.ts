jest.resetModules();
import { config } from "dotenv";
import path from "path";
config({ path: path.resolve(__dirname, "..", ".env"), override: true });

//Setting a large timeout because we are making real API calls
//And some of them might take some time
jest.setTimeout(30 * 10000);

//Mocks removed for Cloudflare Workers compatibility
