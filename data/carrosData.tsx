export type Carro = {
    id: number;
    foto: string;
    modelo: string;
    ano: number;
    alt: string;
    detalhes: string;
};

export const listaCarros: Carro[] = [
    { id: 1, foto: '/img/COROLLA.png', modelo: 'Corolla', ano: 2025, alt: 'Imagem de um Corolla', detalhes: 'O Corolla é um carro estremamente confiavel  e nunca da problema'},
    { id: 2, foto: '/img/Civic.png', modelo: 'Civic', ano: 2024, alt: 'Imagem de um Civic', detalhes: 'O Civic é um carro fenomenal conforto sem igual'},
    { id: 3, foto: '/img/Creta.png', modelo: 'Creta', ano: 2023, alt: 'Imagem de um Creta', detalhes: 'O Creta é um carro estremamente confiavel'},
    { id: 4, foto: '/img/equinox.png', modelo: 'Equinox', ano: 2022, alt: 'Imagem de um Equinox', detalhes: 'O Equinox é um carro onde o conforto vem em primeiro lugar'}
]