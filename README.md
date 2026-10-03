# Mãos que Ajudam

## Apresentação

O Mãos que Ajudam é um projeto acadêmico de um site para uma ONG fictícia.
O objetivo é apresentar uma interface de participação e cadastro de pessoas interessadas em contribuir com a organização.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)
- LocalStorage
- Vite
- Git e GitHub

O projeto utiliza o Vite como ferramenta de bundler e build.
Não foram utilizadas bibliotecas ou frameworks externos para a aplicação.

## Estrutura do projeto

- `html/` — páginas HTML do projeto.
- `css/` — arquivo de estilos.
- `js/` — arquivos JavaScript.
- `imagens/` — imagens utilizadas no site.
- `vite.config.js` — configuração do Vite.
- `package.json` — configuração do projeto e scripts.
- `package-lock.json` — registro das dependências instaladas.
- `dist/` — arquivos gerados pelo build do Vite.

## Cadastro

O formulário coleta dados pessoais, endereço, forma de participação e preferência de contato.

Os dados preenchidos são armazenados no `localStorage` do navegador para permitir sua recuperação posteriormente.

## Instalação e execução

1. Clonar o repositório:

   git clone https://github.com/cauadecastro/projeto-ong

2. Abrir a pasta `projeto-ong` no Visual Studio Code.

3. Instalar as dependências:

   npm install

4. Iniciar o projeto em modo de desenvolvimento:

   npm run dev

5. Para gerar a versão otimizada do projeto:

   npm run build

O comando `npm run build` gera os arquivos otimizados na pasta `dist/`.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão.

Foi utilizada uma organização baseada em GitFlow, com as branches:

- `main` — versão principal.
- `develop` — desenvolvimento.
- `feature/formulario` — alterações do formulário.
- `feature/localstorage` — persistência dos dados.
- `feature/estilo` — alterações de estilo e cores.

As mensagens de commit seguem o padrão Conventional Commits, utilizando tipos como `fix` para correções.

## Issues, Milestones e Pull Requests

Foi criada a Issue `Revisar formulário e acessibilidade #1` para registrar a tarefa de revisão do formulário e acessibilidade.

Foi criado o Milestone `Versão inicial do projeto` para organizar as tarefas da etapa.

Também foi criado o Pull Request `#2` para integrar as alterações da `feature/formulario` à branch `develop`.
