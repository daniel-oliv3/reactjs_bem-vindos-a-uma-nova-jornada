//Exemplo 1
// import React from "react";


// export default function Article(props){
//     return (
//         <>
//             <h3>{props.titulo}</h3>
//             <h5>{props.subtitulo}</h5>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eveniet.</p>
//         </>
//     );
// }


//----------------------------------------------------------------------------------


//Exemplo 2
//desestruturação
// import React from "react";


// export default function Article({titulo, subtitulo}){
//     return (
//         <>
//             <h3>{titulo}</h3>
//             <h5>{subtitulo}</h5>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eveniet.</p>
//         </>
//     );
// }



//----------------------------------------------------------------------------------


//Exemplo 3
import React from "react";


export default function Article({titulo, subtitulo}){

    let t = titulo;
    let s = subtitulo;


    return (
        <>
            <h3>{t}</h3>
            <h5>{s}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eveniet.</p>
        </>
    );
}
















