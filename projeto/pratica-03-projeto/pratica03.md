# Introdução ao Desenvolvimento Web

## Roteiro de Prática

> **_Prática 03 - Projeto Final_**
> - Nessa prática, vamos implementar a funcionalidade de busca por filmes, utilizando o componente de bucsa na barra de navegação superior.
> - Vamos precisar criar uma nova página em nossa aplicação para exibir os resultados de busca.
> - Para isso, vocês vão aprender a trabalhar com rotas, utilizando a biblioteca `react-router-dom` para fazer o roteamento de páginas em nossa aplicação.

### 01 - Instalando a biblioteca React Router Dom

> ✅ O **React Router Dom** é uma biblioteca para uso no React, onde é possível realizar o gerenciamento de rotas entre as páginas de um site, 
> sendo capaz de proporcionar alta escalabilidade e simplicidade. Por meio dela, é possível renderizar componentes baseado na rota que 
> for escolhida pelo usuário, além de manipular parâmetros passados via URL.

1. Para instalar a biblioteca React Router Dom em nosso projeto, vamos digitar no terminal:

    ```bash
    npm install react-router-dom
    ```

### 02 - Criando a estrutura de diretórios e arquivos para nossas páginas

1. Teremos duas páginas nessa versão do nosso projeto, a página `Home` e a página de resultados de busca, que iremos chamar de `Search`.

2. Crie uma pasta chamada `pages` dentro da pasta `src`.

3. Crie duas pastas chamadas `Home` e `Search`, dentro da pasta `pages` criada anteriormente.

4. Crie um arquivo `Home.jsx` e um arquivo `Home.css` dentro da pasta `Home`.

5. Da mesma maneira, crie um arquivo `Search.jsx` e um arquivo `Search.css` dentro da pasta `Search`.

6. Certifique-se de que a estrutura das pastas e arquivos criados nos passos anteriores está correta. Veja na imagem abaixo, como deve ficar a hierarquia de pastas.

    ![Estrutura de pastas](./img-instrucoes/estrutura_pastas.png)

### 03 - Estruturando a página Home

> ⚠️ Durante o desenvolvimento dessa parte do roteiro, se você tentar abrir a aplicação no navegador, irão aparecer erros (ou até mesmo nada irá aparecer). É normal, vamos modificar a estrutura do projeto, segue o jogo.

1. Nossa aplicação já tem uma página inicial. Porém, toda a lógia dessa página e a definição de seus componentes está no arquivo `App.jsx`.
    - Essa não é uma boa prática quando temos múltiplas páginas em nossa aplicação.
    - Precisamos então remover a lógica e a definição dos componentes da página inicial do arquivo `App.jsx` para o arquivo `Home.jsx`. Confira a seguir, como você pode fazer isso.

2. Inicialmente crie o código base do componente `Home.jsx`, que será nossa página inicial. Veja o código inicial que você deve criar no arquivo `Home.jsx`:

    ```javascript
    const Home = () => {
        return (
            <h2>Página Home</h2>
        );
    };

    export default Home;
    ```

    - O elemento de título `<h2>Página Home</h2>` é somente demonstrativo, já vamos substituir pelos elementos da página inicial.

3. Agora, precisamos pegar tudo que for lógica ou definição de elementos da página inicial do arquivo `App.jsx` e colocar em `Home.jsx`.
    - O arquivo `Home.jsx` ficará com o seguinte código:

    ```javascript
    import { useFetch } from "./../../hooks/useFetch";
    import Card from "./../../components/Card";

    import "./Home.css";

    const URL_FETCH = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc";

    const Home = () => {
    const { dados: filmes } = useFetch(URL_FETCH);

    return (
        <div id='home'>
        <h2 className='title'>Filmes Populares:</h2>

        <div className='movies-container'>
            {filmes &&
            filmes.results.map((filme) => <Card key={filme.id} filme={filme} />)}
        </div>
        </div>
    );
    };

    export default Home;
    ```
    - Perceba que, agora, toda a lógica para buscar os filmes e apresentá-los em Cards na página inicial está no arquivo `Home.jsx`.
    - Perceba que foi necessário ajustar as importações dos arquivos `useFetch.js` e `Card.jsx`.
    - Perceba também que importamos o arquivo `Home.css`, para aplicar qualquer CSS específico da página inicial.
        - Não teremos nenhum CSS específico para essa página, pois os estilos já estão definidos de forma global. Ou seja, o arquivo `Home.css` ficará vazio mesmo, mas vamso deixar assim mesmo, pois já temos a estrutura pronta para aplicar algum estilo específico futuramente.

4. O arquivo `App.jsx` ficará com o seguinte código após retirar a lógica e a definição dos elementos da página inicial:

    ```javascript
    import './App.css';

    import NavBar from './components/NavBar';
    import Footer from './components/Footer';

    const App = () => {

    return (
        <>
            <NavBar />

            <main>
                <div className="container">

                </div>
            </main>

            <Footer />
        </>
    );
    };

    export default App;
    ```

    - Perceba que agora, nosso componente `App.jsx` será apenas um template para nossas páginas.
    - Agora, sempre que precisarmos apresentar uma página diferente ao usuário, vamos colocá-la dentro da `div` com classe `container`. Dessa forma, todas as páginas vão ter os componentes `NavBar` e `Footer`.
        - Calma, já já vamos ver como fazer isso. Por enquanto só certifique-se de que o arquivo `App.jsx` está dessa forma.

### 04 - Configurando o roteamento de páginas com a biblioteca React Router Dom

> Agora sim, vamos definir como será a navegação entre as páginas de nossa aplicação.

1. Antes de configurar as rotas de nossa aplicação, vamos criar uma estrutura básica para a nossa página de busca, editando o arquivo `Search.jsx`, da seguinte maneira:

    ```javascript
    import "./Search.css";

    const Search = () => {
        return (
            <div id='search'>
                <h2>Página de busca</h2>
            </div>
        );
    };

    export default Search;
    ```

2. Já vamos aproveitar e definir um pequeno estilo CSS que será específico para a página de buscas. Abra o arquivo `Search.css` e insira o seguinte código:

    ```css
    #search .query-text {
        color: var(--primary-color);
    }
    ```