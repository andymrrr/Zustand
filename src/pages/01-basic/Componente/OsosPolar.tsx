import { WhiteCard } from "../../../components";
import { useOsoStore } from "../../../stores";

export const OsosPolar = () => {
  const OsosPolar = useOsoStore((estado) => estado.OsosPolar);
  const Incrementar = useOsoStore(
    (estado) => estado.IncrementarOsosPolar
  );

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => Incrementar(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {OsosPolar} </span>
        <button onClick={() => Incrementar(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};
