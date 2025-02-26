'use client'

import { Button } from "@app/components/ui/button";

export function RedeemCupomButton() {
  return (
    <Button
      className="w-full lg:hidden"
      variant="secondary"
      onClick={() =>
        document
          .getElementById("regatar")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Resgate Agora 🎉
    </Button>
  );
}
