import Link from "next/link";

export default function Menu() {

    return (
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <div className="ml-0 mr-auto flex justify-between items-center p-4">

                <h1 className="text-white text-2xl font-semibold">EcoHome</h1>
            </div>
            <div >
                <ul className="flex gap-6 links">
                    <li><Link className="text-white hover:text-gray-300" href={"/"}>Home</Link></li>
                    <li><Link className="text-white hover:text-gray-300" href={"/login"}>Login</Link></li>
                    <li><Link className="text-white hover:text-gray-300" href={"/cadastro"}>Cadastro</Link></li>
                </ul>
            </div>
        </nav>

    );
}