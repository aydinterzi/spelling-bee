import Hive from "@/components/Hive";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function Index({
  params,
}: {
  params: { locale: string };
}) {
  const res = await fetch(`http://localhost:3000/word/${params.locale}`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div>
      <MaxWidthWrapper>
        <Hive data={data} />
      </MaxWidthWrapper>
    </div>
  );
}
