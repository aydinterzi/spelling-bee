import { words } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  return Response.json(words[params.locale]);
}
