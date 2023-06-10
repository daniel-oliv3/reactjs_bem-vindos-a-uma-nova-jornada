
import React from "react";

//components
import Article from './components/Article';


export default function App(){

    //exemplo 4
    let artigos = [
        { id: 1, titulo: "Um", subtitulo: 'Sub Um'},
        { id: 2, titulo: "Dois", subtitulo: 'Sub Dois'},
        { id: 3, titulo: "Três", subtitulo: 'Sub Três'},
        { id: 4, titulo: "Quatro", subtitulo: 'Sub Quatro'},
        { id: 5, titulo: "Cinco", subtitulo: 'Sub Cinco'},
        { id: 6, titulo: "Seis", subtitulo: 'Sub Seis'},
        { id: 7, titulo: "Sete", subtitulo: 'Sub Sete'},
        { id: 8, titulo: "Oito", subtitulo: 'Sub Oito'},
    ];


    let conteudo = artigos.map(art => <Article key={art.id} titulo={art.titulo} subtitulo={art.subtitulo} />)


    return (
        <>
            <h1>A MULTIPLICAÇÃO DE COMPONENTES</h1>

            {conteudo}

        </>
    );
}



//----------------------------------------------------------------------------------






/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    10/06/2023
*/






