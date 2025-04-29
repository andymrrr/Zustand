import { useShallow } from 'zustand/shallow'
import { WhiteCard } from '../../../components'
import { useOsoStore } from '../../../stores'

export const MostrarOsos = () => {
    const osos = useOsoStore(estado => estado.osos)
    const noHacerNada = useOsoStore(useShallow(estado => estado.NoHacerNada))
    const AgregarOso = useOsoStore(useShallow(estado => estado.AgregarOso))
    const BorrarOsos = useOsoStore(useShallow(estado => estado.BorrarOsos))
  return (
    <WhiteCard>
        <h1>Osos</h1>
        <div className="flex flex-col md:flex-row">
        <pre>
            {JSON.stringify(osos,null,2)}
        </pre>
       
        </div>
        <button className='mt-2' onClick={noHacerNada}>No Hacer Nada</button>
        <button className='mt-2' onClick={AgregarOso}>Agregar Oso</button>
        <button className='mt-2' onClick={BorrarOsos}>Borrar Osos</button>
    </WhiteCard>
  )
}
