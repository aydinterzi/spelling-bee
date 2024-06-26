import words from "@/lib/words.json";
export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const locale = params.locale as keyof typeof words;
  return Response.json(words[locale]);
}
