import { listaCarros } from "@/data/carrosData";

type detalhesDoCarroProps = {
    params: {
        id: string;
    }
}

function detalhesDoCarro(props: detalhesDoCarroProps) {
    const carroID = parseInt(props.params.id);
    const carro = listaCarros.find(function (item) {
        return item.id === carroID;
    });

    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 min-h-screen">
                <div className="bg-white rounded-lg p-4">
                    <div className="bg-gray-400 p-4 rounded-xl">
                        <h2 className="text-white text-xl font-bold ">Detalhes {carro?.modelo}</h2>
                    </div>
                    <img src={carro?.foto} width="800px"></img>
                    <p className="text-gray-700"><strong>Ano: </strong>{carro?.ano}</p>
                    <p className="text-gray-700"><strong>Modelo: </strong>{carro?.modelo}</p>
                    <p className="text-gray-700"><strong>Detalhes: </strong>{carro?.detalhes}</p>
                </div>
            </div>
        </>
    )
}
export default detalhesDoCarro;