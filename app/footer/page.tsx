import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white py-2">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          terms and conditions ©beanyou.com 2024 | product of:{" "}
          <Image src="/logo-asili.png" alt="Asili Coffee" width={50} height={20} className="inline" />
        </p>
      </div>
    </footer>
  )
}