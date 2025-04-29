import { WhiteCard } from "../../../components";
import { useOsoStore } from "../../../stores";

export const OsosNegro = () => {
  const Ososnegro = useOsoStore((estado) => estado.OsosNegro);
  const IncrementarOsosNegro = useOsoStore(
    (estado) => estado.IncrementarOsosNegro
  );

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => IncrementarOsosNegro(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {Ososnegro} </span>
        <button onClick={() => IncrementarOsosNegro(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};
