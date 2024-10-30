import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#8B4513] text-white py-2">
            <nav className="flex justify-center space-x-8 mt-12">
                <Link
                    href="/"
                    className="font-light underline hover:text-[#FF5722] transition duration-300"
                >
                    Home
                </Link>
                <Link
                    href="/competition"
                    className="font-light underline hover:text-[#FF5722] transition duration-300"
                >
                    Competition
                </Link>
                <Link
                    href="/social-media"
                    className="font-light underline hover:text-[#FF5722] transition duration-300"
                >
                    Social Media
                </Link>
            </nav>
            <div className="container mx-auto px-4 py-3">
                <p className="text-center flex flex-col items-center">
                    Terms and Conditions © beanyou.com 2024 | product of:{" "}
                    <Image
                        src="/logo-asili.png"
                        alt="Asili Coffee"
                        width={80}
                        height={60}
                        className="inline"
                    />
                </p>
            </div>
        </footer>
    );
}
