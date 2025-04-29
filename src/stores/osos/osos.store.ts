import { create } from 'zustand'
interface Oso{
    id: number;
    nombre: string;
}
interface OsoEstado {
    OsosPanda: number,
    OsosPolar: number,
    OsosNegro: number,

    osos: Oso[],
    computadas:{
        TotalOsos: number
    }
    //Funciones
    IncrementarOsosNegro: (por: number) => void,
    IncrementarOsosPanda: (por: number) => void,
    IncrementarOsosPolar: (por: number) => void,
    NoHacerNada:() => void,
    AgregarOso: ()=> void,
    BorrarOsos: ()=> void
}
export const useOsoStore = create<OsoEstado>()((set,get) => ({
  OsosNegro: 10,
  OsosPanda: 5,
  OsosPolar: 1,
 osos: [{id:1, nombre:"Oso #1"}],
 computadas:{
   get TotalOsos(){
        return get().OsosNegro + get().OsosPanda + get().OsosPolar + get().osos.length;
   }
 },
 IncrementarOsosNegro: (por) => set((estado) => ({OsosNegro: estado.OsosNegro + por})),
 IncrementarOsosPanda: (por) => set((estado) => ({OsosPanda: estado.OsosPanda + por})),
 IncrementarOsosPolar: (por) => set((estado) => ({OsosPolar: estado.OsosPolar + por})),
 NoHacerNada: () => set(estado=> ({osos: [...estado.osos]})),
 AgregarOso: () => set(estado=> ({
    osos: [...estado.osos,{
        id: estado.osos.length + 1,
        nombre:`Oso #${estado.osos.length + 1}`
    }]
})),
 BorrarOsos: () => set({osos: []})
}))
