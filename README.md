
# Projeto Cypress

## Descrição
Este projeto utiliza o Cypress para testes end-to-end no site Orange, onde foram criados diversos cenarios de testes. O Cypress é uma ferramenta poderosa para automação de testes de interface de usuário.

## Índice
1. [Instalação](#instalação)
2. [Configuração](#configuração)
3. [Como Usar](#como-usar)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Comandos Úteis](#comandos-úteis)
6. [Contribuição](#contribuição)
7. [Licença](#licença)

## Instalação
Para instalar o Cypress no seu projeto, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Instale o Cypress:
    ```bash
    npm install cypress --save-dev
    ```

## Configuração
Adicione o seguinte script no seu `package.json` para facilitar a execução do Cypress:
```json
"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
}
```

## Como Usar
Para abrir a interface do Cypress, use o comando:
```bash
npm cypress open
```

Para rodar os testes em modo headless, use:
```bash
npm run cypress:run
```

## Estrutura do Projeto
A estrutura básica do projeto Cypress é a seguinte:
```
cypress/
  ├── fixtures/
  ├── pages/
  ├── config/
  └── support/
cypress.json
```

- `fixtures`: Contém dados estáticos usados nos testes.
- `pages`: Contém as paginas do teste.
- `config`: Arquivos de configuração de plugins.
- `support`: Arquivos de suporte e comandos customizados.

## Comandos Úteis
- `cy.visit(url)`: Navega para a URL especificada.
- `cy.get(selector)`: Seleciona um elemento na página.
- `cy.contains(text)`: Seleciona um elemento que contém o texto especificado.
- `cy.click()`: Clica em um elemento.

## Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça suas alterações e commit:
    ```bash
    git commit -m 'Adiciona minha feature'
    ```
4. Envie para o repositório original:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request.

