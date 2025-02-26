import Image from "next/image";
import { FormRedeemCupom } from "./form";
import { RedeemCupomButton } from "./redeem-cupom-button";
import { cookies } from "next/headers";

export default async function Home() {
  const logId = (await cookies()).get("userLogId")?.value;
  
  return (
    <div className="flex flex-col items-center min-h-screen lg:flex-row">
      <div className="relative bg-primary min-w-full min-h-[50%] p-8 pb-60 flex flex-col gap-8 lg:min-w-[50%] lg:min-h-svh lg:pb-0 lg:p-12 lg:gap-16">
        <Image
          src="/images/logo-unipam.png"
          alt="logo"
          className="h-12"
          width={178}
          height={46}
        />

        <div className="w-full">
          <h2 className="text-2xl text-white font-normal md:text-4xl">
            <strong className="font-semibold">Benefício Exclusivo</strong> para
            Professores do UNIPAM
          </h2>
          <p className="text-white mt-5 mb-3">
            Professor(a), temos uma parceria incrível com o Magazine Luiza e
            preparamos uma oferta especial só para você!
          </p>
          <ul className="text-white list-disc list-inside mb-5">
            <li className="mb-2 last:mb-0">
              20% de desconto em qualquer compra no Magazine Luiza!
            </li>
            <li className="mb-2 last:mb-0">
              Não perca essa oportunidade! Resgate seu benefício agora e
              aproveite!
            </li>
          </ul>
          <RedeemCupomButton />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="absolute right-8 bottom-[-20px] z-20 md:bottom-0 w-[135px] h-[166px] sm:w-[178px] sm:h-[218.95px] lg:w-[300px] lg:h-[368.95px] xl:right-[80px]">
            <Image
              src="/images/lu-magalu.png"
              alt="Lu do Magalu"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 10%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 30%)",
              }}
              quality={100}
              fill
            />
          </div>

          <div className="absolute left-8 bottom-[60px] z-30 w-[150px] h-[17px] sm:w-[250px] sm:h-[29px] lg:bottom-20">
            <Image
              src="/images/unipam-e-magalu.png"
              alt="Logo Unipam + Magalu"
              quality={100}
              fill
            />
          </div>

          <div
            className="absolute bg-primary w-full h-[90px] bottom-[-76px] overflow-hidden lg:hidden"
            style={{
              clipPath:
                "polygon(100% 0%, 0% 0% , 0.00% 49.00%, 2.00% 48.90%, 4.00% 48.61%, 6.00% 48.13%, 8.00% 47.47%, 10.00% 46.64%, 12.00% 45.66%, 14.00% 44.53%, 16.00% 43.28%, 18.00% 41.92%, 20.00% 40.48%, 22.00% 38.98%, 24.00% 37.44%, 26.00% 35.89%, 28.00% 34.36%, 30.00% 32.86%, 32.00% 31.42%, 34.00% 30.06%, 36.00% 28.81%, 38.00% 27.68%, 40.00% 26.69%, 42.00% 25.86%, 44.00% 25.20%, 46.00% 24.72%, 48.00% 24.43%, 50.00% 24.33%, 52.00% 24.43%, 54.00% 24.72%, 56.00% 25.20%, 58.00% 25.86%, 60.00% 26.69%, 62.00% 27.68%, 64.00% 28.81%, 66.00% 30.06%, 68.00% 31.42%, 70.00% 32.86%, 72.00% 34.36%, 74.00% 35.89%, 76.00% 37.44%, 78.00% 38.98%, 80.00% 40.48%, 82.00% 41.92%, 84.00% 43.28%, 86.00% 44.53%, 88.00% 45.66%, 90.00% 46.64%, 92.00% 47.47%, 94.00% 48.13%, 96.00% 48.61%, 98.00% 48.90%, 100.00% 49.00%)",
            }}
          />
        </div>
      </div>

      <FormRedeemCupom logId={logId} />
    </div>
  );
}
