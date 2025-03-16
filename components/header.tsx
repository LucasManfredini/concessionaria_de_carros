import Link from "next/link";

function footer(){
    return(
        <>
            <header className = "bg-green-600 text-white">
                <h1 className = "container mx auto text-center text-2xl font-bold uppercase">Concessionária Manfredini</h1>
            <div className = "container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li>    <Link href="/">HOME</Link>                          </li>
                        <li>    <Link href="/exibirLista">LISTA DE CARROS</Link>   </li>
                        <li>    <Link href="/sobre">SOBRE</Link>                    </li>
                        <li>    <Link href="/contato">CONTATO</Link>                </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
};

export default footer;