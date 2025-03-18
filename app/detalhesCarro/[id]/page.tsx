import { listaCarros } from "@/data/carrosData";

type detalhesDoCarroProps = {
    params: {
        id: string;
    }
}

function detalhesProduto(props: detalhesDoCarroProps) {
    const produtoID = parseInt(props.params.id);
    const carro = listaCarros.find(function (item) {
        return item.id === produtoID;
    });

    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 min-h-screen">
                <div className="bg-white rounded-lg">
                    <div className="bg-blue-500 p-4">
                        <h2 className="text-white text-xl font-bold">Detalhes {carro?.modelo}</h2>
                    </div>
                    <img src={carro?.foto} width="800px"></img>
                    <p className="text-gray-700"><strong>Ano: </strong>{carro?.ano}</p>
                    <p className="text-gray-700"><strong>Modelo: </strong>{carro?.modelo}</p>


                </div>
            </div>
        </>
    )
}
export default detalhesProduto;