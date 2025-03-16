export type Carro = {
    id: number;
    foto: string;
    modelo: string;
    ano: number;
};

export const listaCarros: Carro[] = [
    {id: 1, foto: '/img/CORROLA.png',modelo: 'Corrola',ano: 2025},
    {id: 2, foto: '/img/Civic.png',modelo: 'Civic',ano: 2024},
    {id: 3, foto: '/img/Creta.png',modelo: 'Creta',ano: 2023},
    {id: 4, foto: '/img/equinox.png',modelo: 'Equinox',ano: 2022}
]