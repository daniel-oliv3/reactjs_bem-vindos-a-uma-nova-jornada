//Exemplo de 1 a 3
// import React from "react";

// //components
// import Article from './components/Article';


// export default function App(){
//     return (
//         <>
//             <h1>MAIS DETALHES SOBRE REACT PROPS</h1>

//             <Article 
//                 titulo="Noticia dois" 
//                 subtitulo="Subtitulo da noticia 1"
//             />
//             <Article titulo="Noticia três" subtitulo="Subtitulo da noticia 2"/>
//         </>
//     );
// }




//----------------------------------------------------------------------------------





import React from "react";

//components
import Article from './components/Article';


export default function App(){

    //exemplo 4
    let artigos = [
        { titulo: "Um", subtitulo: 'Sub Um'},
        { titulo: "Dois", subtitulo: 'Sub Dois'},
    ];


    return (
        <>
            <h1>MAIS DETALHES SOBRE REACT PROPS</h1>

            <Article 
                titulo={artigos[0].titulo}
                subtitulo={artigos[0].subtitulo}
            />
            <Article 
                titulo={artigos[1].titulo}
                subtitulo={artigos[1].subtitulo}
            />
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






