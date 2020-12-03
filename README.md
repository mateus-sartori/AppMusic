<h3 align="center">Template Mobile Basic MS</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Bibliotecas Incluidas](#bibliotecas-incluidas)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
    - [Passo Adicional no Android](#passo-adicional-no-android)
  - [Edição](#edi%C3%A7%C3%A3o)
  - [Publicação](#publica%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este template tem por objetivo a criação de bases utilizando o React Native para facilitar o processo de desenvolvimento
de criação de Apps ou afins ao gerar uma base inicial, possuindo algumas bibliotecas incluidas.

### Bibliotecas Incluidas

Lista de bibliotecas incluídas neste template:

- [React Native](http://facebook.github.io/react-native/) - React Native é uma biblioteca Javascript criada pelo Facebook. Usado para criar aplicaçõs mobile Android e iOS de forma nativa.
- [React Navigation](https://reactnavigation.org/) - O React Navigation é composto de alguns utilitários principais e esses são usados ​​pelos navegadores para criar a estrutura de navegação em seu aplicativo.
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - O React Native Gesture Handler fornece APIs de gerenciamento de gestos nativas para criar as melhores experiências possíveis com base no toque no React Native.
- [React Native Async Storage](https://github.com/react-native-async-storage/async-storage/) - AsyncStorage é um sistema de armazenamento de valor-chave não criptografado, assíncrono, persistente e global para o aplicativo. Deve ser usado em vez de LocalStorage.
- [React Native GeoLocation](https://github.com/react-native-geolocation/react-native-geolocation/) - É uma API de geolocalização estende as especificações da web de geolocalização, é necessário usar o pacote de permissões para autorização da coleta da localização.
- [React Native Permissions](https://github.com/zoontek/react-native-permissions/) - Uma API de permissões unificada para React Native no iOS, Android e Windows.
- [React Native Masked View](https://www.npmjs.com/package/@react-native-community/masked-view/) - fornece uma visualização mascarada que exibe apenas os pixels que se sobrepõem à visualização renderizada em seu elemento de máscara.
- [React Native Reanimated](https://www.npmjs.com/package/react-native-reanimated/) - React Native Reanimated fornece uma abstração de baixo nível mais abrangente para a API da biblioteca Animated ser construída e, portanto, permite uma flexibilidade muito maior, especialmente quando se trata de interações baseadas em gestos.
- [React Native Screens](https://github.com/software-mansion/react-native-screens/) - Este projeto tem como objetivo expor componentes de contêiner de navegação nativa para React Native.
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context/) - Uma forma flexível de lidar com área segura, também funciona no Android e na Web!
- [React Native Swiper](https://github.com/leecade/react-native-swiper) - Permite que você crie componentes que habilite função de deslizar(arrastar para o lado).


- [Axios](https://github.com/axios/axios) - Cliente HTTP baseado em promessa para o Navegador e Node.js
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

- [StyledComponents](https://github.com/styled-components/styled-components) - styled-components é o resultado de questionarmos como poderíamos aprimorar CSS para estilizar sistemas de componentes React.

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://reactnative.dev/docs/environment-setup#:~:text=If%20you'd%20like%20to,Android%20Studio%20to%20get%20started.)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
template-mobile-basic-dev
├── routes/api.js
├── src/
│   ├── assets/
│   │   ├── icons
│   │   └── images/
│   │       └── BackgroundNoite.js
│   ├── components/
│   │   └── Home.js
│   │   └── styles.js
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   ├── router/
│   │   └── index.js
│   ├── app.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.json
├── LICENSE
├── metro.config.js
├── package.json
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Métodos de instalação do projeto pelo GIT ou pelo NPM

- **Método 1** - Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init AwesomeExample --template react-native-template-base-mobile
```

- **Método 2** - Para instalar pelo git, basta apenas criar um reposótorio a partir deste template:
  - Você deve criar um repositório a partir deste template e então usar :

  ```sh
  git clone https://github.com/UserGit/NomeRepositorio.git
  ```

2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.


3. Após ter o projeto em sua máquina é necessário instalar `node_modules` para carregar as bibliotecas, dentro da pasta digite: 

  ```sh
  npm install
  ```

---

#### Passo Adicional no Android

Verifique na pasta android o arquivo `local.properties` e indique o caminho da pasta `Sdk`

Exemplo: `sdk.dir = /home/username/Android/Sdk`

Para que os gestos sejam habilitados no Android é necessário um passo a mais, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e comece importando os pacotes como abaixo:

`***Opcional caso não tenha*** package com.nameproject;`
```java
import com.facebook.react.ReactActivity;
// Importações adicionadas
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Feito a importação vamos criar um método novo, logo abaixo do `getMainComponentName()`, ficando:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { 
    return "NameProject";
  }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **routes** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **assets** - Diretório para criar pastas e armazenar imagens que possam ser utilizadas pela aplicação, é possivel guardar todo tipo de arquivo não apenas imagens.

      - **icons** - Diretório que será reservado para importação de icones como por exemplo (nome-do-icone.svg) em geral para utilização no projeto

      - **images** - Esse é o diretório que será propriamente reservado para guardar imagens para a utilização no projeto

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Main** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

- **router** - Este diretório é responsavel por criar as rotas entre componentes da pasta `pages`, é ele que chama o `index.js` do `Main` para a exibição dos componentes, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

    - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

- **app.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `@babel/runtime`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do JavaScript no Editor, ele é o responsável por ativar o Auto Complete de códigos JavaScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

### Publicação

Para publicar um template como esse, o processo é bastante simples e rápido.

1. Crie uma conta no [site do NPM](https://www.npmjs.com/);

2. Com a conta criada execute o comando abaixo e insira suas credenciais;

```sh
npm login
```

3. Basta abrir o arquivo `package.json` e modificar as informações de acordo com o seu template, mas as informações mais importantes são duas, o `name` e o `version`, que são os únicos que tem restrições, seguem abaixo as restrições:

   1. O `name` sempre deve começar com o prefixo `react-native-template-` seguido do nome do seu template;
   2. O template deve ser publicado em uma conta pessoal, pois quando publicado em uma **Organization** é acrescentado o prefixo `@<nome_da_organization>` no nome do pacote;
   3. O `name` deve ser único, não podendo ser igual ao de um template já publicado;
   4. A `version` deve ser atualizada a cada publicação, se o template está na versão **0.0.1** e é preciso publicar uma atualização no mesmo, a `version` deve ser diferente e superior a versão atual, por exemplo, **0.0.2**;

4. Após configurar corretamente o `package.json` basta executar no terminal/prompt o comando `npm publish`;

5. Com a publicação finalizada o template deve ficar disponível através do link `https://www.npmjs.com/package/react-native-template-<nome_do_template>`.

<!-- CONTRIBUTING -->

<!-- ## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request -->

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

MS Web Developer - [Site](https://mswebdeveloper.com.br/) - **mateus-sartori@hotmail.com**
