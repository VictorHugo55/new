import Link from 'next/link';

export default function Menu() {
    return (
        <nav className="bg-green-500 shadow-lg fixed w-full top-0 left-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

                <h1 className="text-white text-2xl font-semibold">EcoHome</h1>
                <div className="space-x-6">
                    <Link className="text-white hover:text-gray-300" href={"/"}>Home</Link>
                    <Link className="text-white hover:text-gray-300" href={""}>Login</Link>
                    <Link className="text-white hover:text-gray-300" href={"/cadastro"}>Cadastro</Link>
                </div>
            </div>
        </nav>
    );
};


