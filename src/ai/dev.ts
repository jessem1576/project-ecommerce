import { config } from 'dotenv';
config();

import '@/ai/flows/enrich-product-description.ts';
import '@/ai/flows/identify-key-qualities.ts';
import '@/ai/flows/suggest-product-keywords.ts';