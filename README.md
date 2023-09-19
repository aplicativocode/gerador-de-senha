# Gerador de senha
Projeto de um gerador de senha com HTML e Javasript 

## Aqui está uma explicação das principais partes do código:

**`function gerarSenha(...):`** Esta é a definição da função `gerarSenha` que gera senhas com base nos critérios especificados. Ela recebe como parâmetros o comprimento da senha e os critérios de inclusão de caracteres maiúsculos, minúsculos, números e especiais.

**`const caracteresMaiusculos, const caracteresMinusculos, etc.:`** Essas variáveis contêm strings de caracteres permitidos para cada categoria (maiúsculas, minúsculas, números, especiais).

**`let caracteresPermitidos = '';`** Esta variável é inicializada como uma string vazia e será usada para construir a lista de caracteres permitidos com base nos critérios selecionados.

A seção que começa com **`if (incluirMaiusculas)`** verifica os critérios selecionados e concatena os conjuntos de caracteres permitidos na variável `caracteresPermitidos` com base nos critérios escolhidos.

**`let senha = '';`** Esta variável é inicializada como uma string vazia e será usada para construir a senha gerada aleatoriamente.

O loop **`for`** gera uma senha aleatória selecionando caracteres da string `caracteresPermitidos` até atingir o comprimento especificado.

O evento de clique é atribuído ao botão **"Gerar Senha"**. Quando o botão é clicado, os valores do formulário são coletados, a função `gerarSenha` é chamada e a senha gerada é exibida no elemento com o id **"senha-gerada"**.
