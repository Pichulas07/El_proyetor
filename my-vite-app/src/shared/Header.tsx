export default function Header() {
    return (
        <header className="bg-[#142763] shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* Logo / Marca */}
                <h1 className="text-white text-2xl font-bold tracking-wide">
                    📽️El Proyector
                </h1>

                {/* Navegación */}
                <nav className="flex gap-6">
                    <a 
                        href="/" 
                        className="text-white font-medium hover:text-green-200 transition duration-300"
                    >
                        Inicio
                    </a>
                    <a 
                        href="/profile" 
                        className="text-white font-medium hover:text-green-200 transition duration-300"
                    >
                        Profile
                    </a>
                </nav>
            </div>
        </header>
    );
}
