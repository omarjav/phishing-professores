import { FormHeader } from "./form-header";
import { FormBody } from "./form-body";
import { FormFooter } from "./form-footer";

import styles from "./page.module.css";
import { cookies } from "next/headers";
export default async function Home() {
  const logId = (await cookies()).get("userLogId")?.value;
  
  return (
    <div className={styles.contentWrapper}>
      <FormHeader />
      <FormBody logId={logId} />
      <FormFooter />
    </div>
  );
}
