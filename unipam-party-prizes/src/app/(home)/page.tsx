import { FormSection } from "./form-section";
import { cookies } from "next/headers";
import { MainSection } from "./main-section";

export default async function Home() {
  const logId = (await cookies()).get("userLogId")?.value;

  return (
    <>
      <MainSection />
      <FormSection logId={logId} />
    </>
  );
}
