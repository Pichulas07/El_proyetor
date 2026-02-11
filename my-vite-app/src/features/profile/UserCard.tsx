import type { User } from "../../models/User.Model";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-[2rem] overflow-hidden border border-white flex flex-col md:flex-row">
        
        <div className="md:w-2/5 relative h-80 md:h-auto">
          <img
            src={user.img}
            alt={user.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Badge de Verificado o Rol */}
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
            Crítico Premium
          </div>
        </div>

        
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-4xl font-black text-gray-900 mb-2">
              {user.name}
            </h2>
            <div className="h-1.5 w-20 bg-blue-500 rounded-full"></div>
          </div>

          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Edad</p>
              <p className="text-xl font-bold text-gray-800">{user.age} años</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Redes</p>
              <p className="text-xl font-bold text-blue-600 truncate">{user.socialMedia}</p>
            </div>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Sobre el usuario</h4>
            <p className="text-gray-600 leading-relaxed">
              Apasionado por el cine de animación y los videojuegos. Usuario activo de 
              <strong> El Proyector</strong> desde 2024. Siempre en busca de la mejor 
              tasa de frames y las historias más profundas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}