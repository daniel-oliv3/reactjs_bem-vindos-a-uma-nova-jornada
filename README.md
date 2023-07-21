##
### ReactJS - Bem-Vindos a Uma Nova Jornada
##


<p align="center">
  <img alt="...." src="./assets/logo.png" width="80%">
</p>





O React (também denominado React.js ou ReactJS) é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.

Criado em 2011 pelo Facebook, com a criação de views declarativas e baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código.

É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.

Em 2015, o Facebook anunciou o módulo React Native, que em conjunto com o React, possibilita o desenvolvimento de aplicativos para Android e iOS utilizando componentes de interface de usuário nativos de ambas plataformas, sem precisar recorrer ao HTML.


- Fonte: https://pt.wikipedia.org/wiki/React_(JavaScript)


### 1 - BEM-VINDOS A UMA NOVA JORNADA

**ReactJS**

- React
    - Site: https://react.dev/


**ViteJS**

- Vite
    - Site: https://vitejs.dev/


**NodeJS**

- Node
    - Site: https://nodejs.org/en


- (**Terminal VSCode**)
- Verifica a versão do node instalado
```
node -v
```

- Criar uma aplicação com o ViteJS
```
npm create vite@latest
```

- Instalar as Dependências (`node_modules`)
```
npm install
```

- Rodar o projeto
```
npm run dev
```


- Exemplo
    - app-reactjs_01



### 2 - O NOSSO PRIMEIRO REACT COMPONENT

    
- Criar uma aplicação com o ViteJS
```
npm create vite@latest
```

- Instalar as Dependências (`node_modules`)
```
npm install
```

- Rodar o projeto
```
npm run dev
```


**Your First Component**

- Site: https://react.dev/learn/your-first-component


- Exemplo
    - app-reactjs_02



### 3 - MAIS DETALHES SOBRE COMPONENTES

- Criar uma aplicação com o ViteJS
```
npm create vite@latest
```

- Instalar as Dependências (`node_modules`)
```
npm install
```

- Rodar o projeto
```
npm run dev
```

- Exemplo
    - app-reactjs_03




### 4 - COMPONENTES DENTRO DE COMPONENTES

- Roda o projeto
```
npm run dev
```

- Exemplo
    - app-reactjs_04


### 5 - APRESENTAR DADOS DE JS NO JSX

- Roda o projeto
```
npm run dev
```

- Exemplo
    - app-reactjs_05




### 6 - COMO APLICAR CSS NOS COMPONENTES

- Roda o projeto
```
npm run dev
```

- Exemplo
    - app-reactjs_06


### 7 - REACT PROPS

- Roda o projeto
```
npm run dev
```

- Exemplo
    - app-reactjs_07



### 8 - MAIS DETALHES SOBRE REACT PROPS

- Roda o projeto
```
npm run dev
```

- Exemplo
    - app-reactjs_08



### 9 - A MULTIPLICAÇÃO DE COMPONENTES

- Roda o projeto
```
npm run dev
```

- **Aviso**: Cada filho em uma lista deve ter um prop "*chave*" (key) exclusivo.


- Exemplo
    - app-reactjs_09




### 10 - INTRODUÇÃO AOS REACT HOOKS USESTATE

- Roda o projeto
```
npm run dev
```

- API Reference
    - Site: https://react.dev/reference/react

- Exemplo
    - app-reactjs_10



### 11 - REORGANIZAÇÃO DO PROJETO E EXEMPLO COM USESTATE

- Roda o projeto
```
npm run dev
```

- Exemplo
    - app-reactjs_11





### 12 - NOVA REORGANIZAÇÃO DO PROJETO E PREPARAÇÃO DO GIT

- Roda o projeto
```
npm run dev
```


- .gitignore
    - node_modules
    - package-lock.json


**Git**

- Verifica se ja tem o git instalado
```
git -v
```

- Inicia o repositório git
```
git init
```

- Verifica o status atual do projeto
```
git status
```

**Untracked files**

- Adicionar os arquivos Untracked
```
git add .
```

**Commit**

*Author Identity*
- Login (email)
```
git config --global user.email "seuemail@gmail.com"
```

- Nome (User Name)
```
git config --global user.name "John Doe"
```

- Commitar o projeto
```
git commit -m "hook state 01"
```

- Git Log (verifica os commits atuais)
```
git log
```

**Branch**

- Criando uma Branch
```
git branch 01_hooks
```

- Mudar a Branch (para 01_hooks)
```
git checkout 01_hooks
```

- Mudar para a Master
```
git checkout master
```



- Exemplo
    - app-reactjs_12



### 13 - ADICIONAR TODO O PROJETO NO GITHUB COM VÁRIAS BRANCHES

- Roda o projeto
```
npm run dev
```


**Git**

- Remote Origin
```
git remote add origin https://github.com/daniel-oliv3/reactjs_bem-vindos-a-uma-nova-jornada.git
```

- Puchar para o repositório remoto
```
git push -u origin master
```

*Branche*

- Enviar para o repositório remoto
```
git push -u origin 01_hooks
```

- Exemplo
    - app-reactjs_13




### 14 - CLONAR O REPOSITÓRIO DO GITHUB PARA O AMBIENTE LOCAL

- Roda o projeto
```
npm run dev
```


**Clone**

- Clonar um repositório (Exemplo)
```
git clone https://github.com/sys4soft/react_next_hooks.git
```


- Exemplo
    - app-reactjs_14



### 15 - COMO EXECUTAR FUNÇÃO COM PARÂMETROS ASSOCIADA A UM EVENTO

- Roda o projeto
```
npm run dev
```


*Branche*

- Criação da branch
```
git branch 02_hooks
```

- Mudar a branch
```
git checkout 02_hooks
```

**Untracked files**

- Adicionar os arquivos Untracked
```
git add .
```

- Commitar o projeto
```
git commit -m "hook state 02"
```

- Enviar para o repositório remoto
```
git push -u origin 02_hooks
```

- Verifica o status atual do projeto
```
git status
```



- Exemplo
    - app-reactjs_15





### 16 - EXERCÍCIO COM USESTATE

- Roda o projeto
```
npm run dev
```


*Branche*

- Criação da branch
```
git branch 03_hooks
```

- Mudar a branch
```
git checkout 03_hooks
```

- Adicionar os arquivos Untracked
```
git add .
```

- Commitar o projeto
```
git commit -m "hook state 03"
```

- Enviar para o repositório remoto
```
git push -u origin 03_hooks
```

- Verifica o status atual do projeto
```
git status
```

- Exemplo
    - app-reactjs_16




### 17 - EXERCÍCIO 02 COM USESTATE


- Criar um componente que vai apresentar 3 contadores criados a partir do mesmo componente
    - Apresentar esses componentes lado a lado
    - O primeiro componente deve inicrementar e decrementar de 1 em 1
    - O segundo de 5 em 5
    - O terceiro de 10 em 10


- Roda o projeto
```
npm run dev
```


*Branche*

- Criação da branch
```
git branch 04_hooks
```

- Mudar a branch
```
git checkout 04_hooks
```

- Adicionar os arquivos Untracked
```
git add .
```

- Commitar o projeto
```
git commit -m "hook state 04"
```

- Enviar para o repositório remoto
```
git push -u origin 04_hooks
```

- Verifica o status atual do projeto
```
git status
```



- Exemplo
    - app-reactjs_17




### 18 - EXERCÍCIO 03 COM USESTATE

- Criar um componente que vai apresentar um UseState (valor)
- Criar outro componente, a ser apresentado dentro do componente anterior, que vai ter
    - um botão que vai atualizar o useState do componente "pai"

- Roda o projeto
```
npm run dev
```


*Branche*

- Criação da branch
```
git branch 05_hooks
```

- Mudar a branch
```
git checkout 05_hooks
```

- Adicionar os arquivos Untracked
```
git add .
```

- Commitar o projeto
```
git commit -m "hook state 05"
```

- Enviar para o repositório remoto
```
git push -u origin 05_hooks
```

- Verifica o status atual do projeto
```
git status
```

- Exemplo
    - app-reactjs_18




### 19 - EXERCÍCIO 04 COM USESTATE

- Um componente PAI vai receber atualização de valores de dois componentes FILHOS.
- Esses componentes filhos são instâncias do mesmo componente contador (Inc, Dec)
- Um dos componentes incrementa e decrementa de 5 em 5 e o outro de 10 em 10.
- No componente pai, vai ser apresentado o resultado da adição dos valores controlados pelos dois componentes filhos

```html
<!-- 
----- Execício 04 -----

- (pai)
valor: 1000

- Filhos
<b- b+> (5 em 5)
<b- b+> (10 em 10)

-->
```


- Roda o projeto
```
npm run dev
```

- Exemplo
    - app-reactjs_19







### 20 - EXERCÍCIO 05 COM USESTATE

- Um componente PAI tem 3 componentes de inc e dec (a mesma instância)
- O componente pai tem um state que é um array de valores númericos
- Cada componente vai comtrolar um valor desse array
- Os três valores do array devem ser apresentados no componente pai

- Exemplo
    - app-reactjs_20


### 21 - EXERCÍCIO 06 COM USESTATE

- Criar um componente que contem um objeto clientes coom as seguintes propriedades:
{
    Nome
    Apelido
    Cidade
    Email
}

- O componente tem que ter 4 botões
- Cada botão altera o valor de cada uma das propriedades individualmente
- SEM EXECUTAR FUNÇÕES INDIRETAS
- Os valores devem ser apresentados


- Exemplo
    - app-reactjs_21







### 22 - EXERCÍCIO 07 COM USESTATE

- Apresentar um parágrafo com "Usuario logado"
- Um botão vai controlar se o usuario está logado ou nçao (fake)
- alterando o valor de um state.


- Exemplo
    - app-reactjs_22





### 23 - EXERCÍCIO 08 COM USESTATE

- Selecionar uma opção num select (com 3 opções)
- Apresentar o componente correspondente


- Exemplo
    - app-reactjs_23




### 24 - EXERCÍCIO 09 COM USESTATE

- Temos um botão e um parágrafo
- O parágrafo tem uma classe de CSS (paragrafo)
- Adicionamente tem outra classe (classUm ou classDois)
- A ideia é o botão alternar entre classUm e classDois, mantendo a classe parágrafo

- NOTA: Obviamente, o resultado da alternancia de classes deve refletir-se no aspecto visual do elemento



- Exemplo
    - app-reactjs_24







###  25 - EXERCÍCIO 10 COM USESTATE

- Vamos criar um componente que vai apresentar condicionalmente um componente A ou B no seu interior.
- A apresentação do componente A ou B dever ser controlada pelo click de um botão


- Exemplo
    - app-reactjs_25



###  26 - EXERCÍCIO 11 COM USESTATE

- Como obter dados a partir de um input e apresentar no browser

- Exemplo
    - app-reactjs_26


###  27 - EXERCÍCIO 12 COM USESTATE

-

- Exemplo
    - app-reactjs_27




###  28 - INTRODUÇÃO AO USEREF


- Exemplo
    - app-reactjs_28



### 29 - INTRODUÇÃO AO USEEFFECT

- Exemplo
    - app-reactjs_29



### 30 - EXERCÍCIO 01 COM USEEFFECT

- Exemplo
    - app-reactjs_30



### 31 - EXERCÍCIO 02 COM USEEFFECT

- Exemplo
    - app-reactjs_31



### 32 - EXERCÍCIO 03 COM USEEFFECT

**REST Countrie**

- REST Countrie
    - Site: https://restcountries.com/
    - All: https://restcountries.com/v3.1/all

- Exemplo
    - app-reactjs_32
























