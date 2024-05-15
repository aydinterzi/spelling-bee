import Hive from "@/components/Hive";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import words from "@/lib/words.json";
export default async function Index({
  params,
}: {
  params: { locale: string };
}) {
  const data = words[params.locale];

  return (
    <div>
      <MaxWidthWrapper>
        <Hive data={data} />
      </MaxWidthWrapper>
    </div>
  );
}
