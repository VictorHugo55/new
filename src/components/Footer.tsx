import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-6 flex justify-center items-center">
            <div className=" mx-auto text-center">
                <p>{/*&copy;*/} 2024 EcoHome. Todos os direitos reservados.</p>
                <div className="">
                    <Link href="/" className="text-gray-400 hover:text-gray-200 mx-2">Home</Link>
                    <Link href="/sobre" className="text-gray-400 hover:text-gray-200 mx-2">Sobre</Link>
                    <Link href="/contato" className="text-gray-400 hover:text-gray-200 mx-2">Contato</Link>
                </div>
            </div>
        </footer>
    );
}