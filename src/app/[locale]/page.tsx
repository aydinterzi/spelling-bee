import Hive from "@/components/Hive";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function Index() {
  const res = await fetch("http://localhost:3000/word/en", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <MaxWidthWrapper>
        <Hive />
      </MaxWidthWrapper>
    </div>
  );
}
