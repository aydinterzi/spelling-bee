export const runtime = "edge";

import { words } from "@/lib/data";
import wordd from "@/lib/words.json";
export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const locale = params.locale as keyof typeof words;
  return Response.json(wordd[locale]);
}
