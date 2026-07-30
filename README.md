# Linktree da igreja

Página estática em HTML, CSS e JavaScript para usar na bio do Instagram e publicar na Vercel.

## Como editar

Abra `script.js` e troque os dados do objeto `church`:

- `name`: nome da igreja
- `initials`: letras que aparecem no círculo do topo
- `logo`: imagem da logo no topo
- `bio`: frase curta de apresentação
- `address`: endereço
- `services`: horários dos cultos
- `links`: botões principais

Cada link aceita `icon` ou `image`.

Para usar os ícones prontos, deixe `image: ""` e escolha um destes valores em `icon`:

- `whatsapp`
- `map`
- `prayer`
- `pix`
- `youtube`
- `instagram`

Para usar uma imagem própria no botão, coloque a imagem em uma pasta como `assets` e preencha:

```js
image: "assets/minha-imagem.png",
```

Também funciona com URL externa:

```js
image: "https://exemplo.com/imagem.png",
```

Para usar a logo da igreja no topo, coloque o arquivo em `assets` e preencha:

```js
logo: "assets/logo.png",
```

Se `logo` ficar vazio, o site mostra as iniciais em `initials`.

## Como testar

Abra o arquivo `index.html` no navegador.

## Como publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Entre em https://vercel.com.
3. Clique em `Add New...` e depois `Project`.
4. Importe o repositório.
5. Como é um site estático, a Vercel detecta automaticamente. Não precisa configurar build command.
6. Clique em `Deploy`.

Depois do deploy, coloque o link gerado pela Vercel na bio do Instagram.
