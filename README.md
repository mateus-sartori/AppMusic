<h3 align="center">Template Mobile Basic MS</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este template tem por objetivo a criação de bases utilizando o React Native para facilitar o processo de desenvolvimento
de criação de Apps ou afins ao gerar uma base inicial, possuindo algumas bibliotecas incluidas.

### Bibliotecas Adicionais

Lista de bibliotecas incluídas neste template:
 - [Bibliotecas Incluidas](https://github.com/iSenaka/BaseMobile) - As bibliotecas incluidas vem da BaseMobile


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

Se por acaso acontecer erro com:

What went wrong: Could not initialize class org.codehaus.groovy.runtime.InvokerHelper Vá até a pasta 

```sh
android/gradle/wrapper/gradle-wrapper.properties e na linha `distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip`
```

substituia por

```sh
distributionUrl=https\://services.gradle.org/distributions/gradle-6.4.1-all.zip
```

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

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

MS Web Developer - [Site](https://mswebdeveloper.com.br/) - **mateus-sartori@hotmail.com**
