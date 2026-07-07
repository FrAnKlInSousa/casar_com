# Instruções para executar o projeto


## Pré-condições

- node 24.14 [Instruções](https://nodejs.org/en/download)
- npm 11.12.1 (ao instalar o node seguindo as instruções acima, o npm já será instalado junto)

## Instalação das dependências

- No terminal, rode o comando abaixo a partir do diretório `casar_com`:

```shell
  npm install
```

## Rodando os testes cypress

- Pelo terminal sem exibir o navegador:

```shell
  cypress run
```

- Pelo terminal exibindo o navegador:

```shell
  cypress run --headed
```

- Pelo painel do cypress:
```shell
  npx cypress open
``` 

1. Depois marque a opção E2E Testing.
2. Escolha o navegador que deseja usar.
3. Start E2E Testing in `{navegador escolhido}`
4. Clique no arquivo que deseja executar. Atualmente tem os arquivos `cadastrar-usuario` e `encontrar-casamentos`

### Rodando os testes no CI

Para rodar os teste no ci, basta realizar o primeiro push na main (ou rodar manualmente na aba actions) e nas demais vezes poderá executar direto pela aba actions do github.

Planilha os exemplos de casos de teste usados na automação: [Planilha](https://docs.google.com/spreadsheets/d/1IDXNBglR6EJFeYOpR9vXgQtpf4JK8Ufm4VBteJl8_iw/edit?gid=0#gid=0)
