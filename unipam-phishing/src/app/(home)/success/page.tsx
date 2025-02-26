import Image from "next/image";

export default function Success() {
  return <div className="w-full h-svh flex justify-center items-center">
    <div className="m-8 flex flex-col items-center gap-2">
      <Image src="/images/surprise.svg" alt="Sucesso" width={400} height={400} />
      <h1 className="mt-8 text-4xl font-semibold text-center text-primary">Sucesso!</h1>
      <p className="text-center">Em breve você receberá um e-mail com seu cupom do Magalize Luiza 🎉.</p>
    </div>
  </div>
}