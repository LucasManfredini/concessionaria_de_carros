import { listaCarros } from "@/data/carrosData";
import Link from "next/link";

function exibirListaCarros() {
    return (
        <>
            <h1 className="font-bold text-center">Lista de produtos em tabela</h1>
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <td className="uppercase">Ano</td>
                        <td className="uppercase">Modelo</td>
                        <td className="uppercase">Foto</td>
                        <td className="uppercase">Detalhes</td>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-400">
                    {listaCarros.map(function (item) {
                        return (
                            <tr key={item.id} >
                                <td>{item.ano}</td>
                                <td>{item.modelo}</td>
                                <td><img src={item.foto} width='400px' alt=""></img></td>
                                <td className="text-sm text-blue-600">
                                    <Link href={'/detalhesDoCarro/' + item.id}>Ver Detalhes</Link>
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