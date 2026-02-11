export function Footer() {
    return (
        <footer className="bg-[#081a41] text-white py-8 mt-10">
            <div className="max-w-6xl mx-auto px-6">
                
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                   
                    <div>
                        <h2 className="text-2xl font-bold tracking-wide">
                            📽️El Proyector
                        </h2>
                        <p className="text-sm text-green-100 mt-2">
                            Tu mejor catálogo de películas.
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-green-200 transition">
                            Contacto
                        </a>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-green-400 my-6"></div>

                {/* Derechos reservados */}
                <div className="text-center text-sm text-green-100">
                    © {new Date().getFullYear()} MovieApp. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
