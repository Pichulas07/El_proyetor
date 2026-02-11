export function Home() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto bg-[#142763] shadow-xl rounded-2xl p-10 text-center">
                
                <h3 className="text-3xl font-bold text-green-400 mb-4">
                    📽️ Bienvenidos a El Proyector
                </h3>

                <p className="text-green-400 mb-8">
                    "El foco siempre en las mejores historias."
                </p>

                <a
                    href="/movies"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold 
                               hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
                >
                    Ver Películas
                </a>

            </div>
        </section>
    );
}
