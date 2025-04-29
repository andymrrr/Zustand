import { WhiteCard } from "../../../components";
import { useOsoStore } from "../../../stores";

export const OsosPanda = () => {
  const OsosPanda = useOsoStore((estado) => estado.OsosPanda);
  const Incrementar = useOsoStore(
    (estado) => estado.IncrementarOsosPanda
  );

  return (
    <WhiteCard centered>
      <h2>Osos Panda</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => Incrementar(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {OsosPanda} </span>
        <button onClick={() => Incrementar(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};
