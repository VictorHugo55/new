import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; 2024 EcoHome. Todos os direitos reservados.</p>
                <div className="mt-4">
                    <Link href="/" className="text-gray-400 hover:text-gray-200 mx-2">Home</Link>
                    <Link href="/sobre" className="text-gray-400 hover:text-gray-200 mx-2">Sobre</Link>
                    <Link href="/contato" className="text-gray-400 hover:text-gray-200 mx-2">Contato</Link>
                </div>
            </div>
        </footer>
    );
}