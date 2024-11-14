
export default function Home() {
  return (
    <div className="bg-gray-50">
      <main className="pt-20 px-6"> {/* Aumenta o padding superior para não sobrepor o menu */}
        <h2 className="text-4xl text-center text-gray-800 font-semibold">Bem-vindo ao EcoHome!</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Monitore o consumo de energia da sua casa e contribua para um futuro mais sustentável.
        </p>
        <div className="flex justify-center mt-10">
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg mr-4">
            Cadastre-se
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg">
            Já tem uma conta? Faça Login
          </button>
        </div>
      </main>
    </div>
  );
}
