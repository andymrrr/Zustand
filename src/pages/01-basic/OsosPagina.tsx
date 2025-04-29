import { MostrarOsos } from './Componente/MostrarOsos';
import { OsosNegro } from './Componente/OsosNegro';
import { OsosPanda } from './Componente/OsosPanda';
import { OsosPolar } from './Componente/OsosPolar';

export const OsosPagina = () => {
 
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

       
        <OsosNegro/>
        <OsosPolar/>
        <OsosPanda/>
        <MostrarOsos/>
      </div>

    </>
  );
};