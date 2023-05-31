export default function Data(){

    let nome = 'Daniel';
    let cliente = {
        nome: 'Daniel Oliveira',
        email: 'danielsapup3@gmail.com'
    }

    //...

    let a = 5;
    let b = 15;

    function add(a, b){
        return a + b;
    }


    return (
        <>
            <p>Nome: {nome}</p>
            <p>Nome do cliente: {cliente.nome}</p>
            <p>Email do cliente: {cliente.email}</p>
            {/* <p>A soma de 10 + 20 =  {add(10, 20)}</p> */}

            <p>A soma de {a} + {b} =  {add(a, b)}</p>

        </>
    );
}


