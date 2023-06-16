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

- Exemplo
    - app-reactjs_04


### 5 - APRESENTAR DADOS DE JS NO JSX


- Exemplo
    - app-reactjs_05




### 6 - COMO APLICAR CSS NOS COMPONENTES

- Exemplo
    - app-reactjs_06


### 7 - REACT PROPS


- Exemplo
    - app-reactjs_07



### 8 - MAIS DETALHES SOBRE REACT PROPS


- Exemplo
    - app-reactjs_08



### 9 - A MULTIPLICAÇÃO DE COMPONENTES


- **Aviso**: Cada filho em uma lista deve ter um prop "*chave*" (key) exclusivo.


- Exemplo
    - app-reactjs_09




### 10 - INTRODUÇÃO AOS REACT HOOKS USESTATE


- API Reference
    - Site: https://react.dev/reference/react

- Exemplo
    - app-reactjs_10



### 11 - REORGANIZAÇÃO DO PROJETO E EXEMPLO COM USESTATE


- Exemplo
    - app-reactjs_11





### 12 - NOVA REORGANIZAÇÃO DO PROJETO E PREPARAÇÃO DO GIT


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

**Clone**

- Clonar um repositório (Exemplo)
```
git clone https://github.com/sys4soft/react_next_hooks.git
```


- Exemplo
    - app-reactjs_14



### 15 - COMO EXECUTAR FUNÇÃO COM PARÂMETROS ASSOCIADA A UM EVENTO

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

























