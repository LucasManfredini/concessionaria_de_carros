import { listaCarros } from "@/data/carrosData";
import Link from "next/link";

function exibirListaCarros() {
    return (
        <>
            
            <table className="min-w-full">
                <thead className="bg-gray-400">
                    <tr>
                        <td className="uppercase">Ano</td>
                        <td className="uppercase">Modelo</td>
                        <td className="uppercase">Foto</td>
                        <td className="uppercase">Detalhes</td>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-400">
                    {listaCarros.map(function (carro) {
                        return (
                            <tr key={carro.id} >
                                <td>{carro.ano}</td>
                                <td>{carro.modelo}</td>
                                <td><img src={carro.foto} width='400px' alt={carro.alt}></img></td>
                                <td className="text-sm text-blue-600">
                                    <Link href={'/detalhesDoCarro/' + carro.id}>Ver Detalhes</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default exibirListaCarros;