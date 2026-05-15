export default function AutoSegLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="px-6 py-10 text-center">
        <h1 className="text-5xl font-black text-white">AUTO SEG</h1>
        <p className="text-yellow-500 mt-2">LEILÕES PREMIUM</p>

        <h2 className="text-3xl mt-10 font-bold">
          OS MELHORES VEÍCULOS
          <span className="block text-yellow-500">EM UM CLIQUE</span>
        </h2>

        <p className="text-zinc-300 mt-6">
          Baixe nosso aplicativo e tenha acesso aos melhores leilões.
        </p>

        <a
          href="/app.apk"
          className="mt-10 inline-block bg-yellow-500 text-black px-6 py-4 rounded-2xl font-bold"
        >
          BAIXAR APP
        </a>

        <div className="mt-6">
          <a
            href="https://wa.me/5517982159410"
            className="text-green-400 font-bold"
          >
            FALAR NO WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
}
