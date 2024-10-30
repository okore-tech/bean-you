import Image from 'next/image'
import { MessageCircle, Send } from 'lucide-react'

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-[#E6C7A9] relative overflow-hidden flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col">
        <div className="flex justify-between mb-12">
          <div className="text-right">
            <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4">Messaging</h2>
          <h1 className="text-2xl md:text-4xl font-bold uppercase">
            Connect with us . Social Media .
          </h1>
            <div className="flex justify-end space-x-4">
              <div className="bg-green-500 p-2 rounded-xl">
                <MessageCircle size={32} color="white" />
              </div>
              <div className="bg-blue-500 p-2 rounded-full">
                <Send size={32} color="white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-grow relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-3/4">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-red-500 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/smartphone-bean-cup.png"
                  alt="Smartphone displaying Bean coffee cup"
                  width={300}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/coffee-bean.png"
        alt="Coffee bean"
        width={50}
        height={50}
        className="absolute top-20 left-10 transform -rotate-12"
      />
      <Image
        src="/coffee-bean.png"
        alt="Coffee bean"
        width={40}
        height={40}
        className="absolute top-40 right-20 transform rotate-45"
      />
      <Image
        src="/coffee-bean.png"
        alt="Coffee bean"
        width={60}
        height={60}
        className="absolute bottom-40 left-20 transform rotate-12"
      />
      <Image
        src="/coffee-bean.png"
        alt="Coffee bean"
        width={45}
        height={45}
        className="absolute bottom-20 right-10 transform -rotate-30"
      />

      <div className="absolute bottom-4 left-4">
        <Image
          src="/bean-logo.png"
          alt="Bean logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-4 right-4">
        <Image
          src="/logo-asili.png"
          alt="Asili Coffee logo"
          width={80}
          height={40}
          className="object-contain"
        />
      </div>
    </div>
  )
}