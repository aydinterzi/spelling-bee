import Hive from "@/components/Hive";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div>
      <MaxWidthWrapper>
        <Hive />
      </MaxWidthWrapper>
    </div>
  );
}
