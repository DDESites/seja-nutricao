# Seja Nutrição — Site institucional + catálogo

Site estático (HTML/CSS/JS puro, sem build) da loja **Seja Nutrição** — suplementos e
produtos naturais em Águas Lindas de Goiás (GO). O site funciona como **vitrine de
catálogo com atendimento via WhatsApp**: não há carrinho nem checkout na v1.

## Como rodar

```powershell
.\server.ps1
```

Depois abra <http://localhost:8761/>. O servidor é um `HttpListener` simples do PowerShell
que serve a pasta do projeto na porta **8761** (mude a variável `$port` no topo do arquivo
se precisar de outra porta).

> Os HTMLs também abrem direto pelo duplo clique (`file://`), mas o `server.ps1` evita
> problemas de caminho e de CORS ao testar.

## Estrutura

```
seja-nutricao/
├── index.html          # Home
├── produtos.html       # Catálogo com busca, filtros e ordenação
├── produto.html        # Detalhe do produto (?id=... lido do catálogo)
├── sobre.html          # Sobre a loja
├── contato.html        # Endereço, mapa, horários, WhatsApp e formulário
├── privacidade.html    # Política de privacidade
├── css/styles.css      # Todo o estilo (mobile-first, tokens em :root)
├── js/catalogo.js      # ⭐ Dados editáveis: categorias e produtos
├── js/main.js          # Comportamento global: menu, busca, formulário, lightbox
├── img/                # Fotos da loja e dos produtos (SVG da marca incluído)
├── server.ps1          # Servidor local de desenvolvimento
└── docs/PRD.md         # Requisitos do projeto
```

## O que costuma ser editado

### 1. Produtos e categorias → `js/catalogo.js`

Tudo o que aparece no catálogo vem desse arquivo. Exemplo de produto:

```js
{
  id: "creatina-eat-clean",          // usado no link produto.html?id=...
  nome: "Creatina Monoidratada 300 g",
  marca: "Eat Clean",
  categoria: "creatina",             // id de CATEGORIAS
  preco: null,                       // null => mostra "Consulte o preço"
  precoDe: null,                     // preço riscado (só se houver promo real)
  selo: "novo",                      // "novo" | "oferta" | null
  destaque: true,                    // aparece na home
  foto: "img/prod-creatina.jpg",     // null => usa a arte padrão "Consulte a loja"
  descricao: "...",
  detalhes: ["...", "..."],
  opcoes: { rotulo: "Apresentação", itens: ["300 g", "Outras marcas"] }
}
```

- **Preços**: hoje todos são `null` e o site mostra *"Consulte o preço"* — é proposital,
  enquanto a loja não confirma valores publicamente. Quando confirmarem, basta preencher
  `preco: 129.9`. O filtro de faixa de preço aparece automaticamente assim que existir
  ao menos um preço no catálogo.
- **Categorias**: a lista `CATEGORIAS` gera os chips de filtro, os cards da home e os
  links do rodapé. Para esconder uma categoria sem apagá-la, use `ativa: false` se
  disponível, ou remova o objeto da lista.

### 2. Link do WhatsApp

O link oficial da loja é `https://wa.me/message/U7FNIRAZKTBQB1` (link "mensagem" do
WhatsApp Business — não aceita texto pré-preenchido). Ele aparece em:

- `js/catalogo.js` → constante `ZAP_LINK` (botões dos cards e do produto)
- `js/main.js` → constante `ZAP_LINK` (formulário de contato → envia a mensagem via WhatsApp)
- Cada página `.html` → botões do cabeçalho, seções de CTA, rodapé e botão flutuante
  (busque por `wa.me` no arquivo para trocar todos)

### 3. Faixa de aviso/campanha da home

Em `index.html`, procure `<!-- ÁREA EDITÁVEL -->` acima da faixa laranja
(`section.promo`). Troque o texto do título e do parágrafo conforme a campanha da
semana. Não há botão de desconto com valor fixo — o CTA leva ao WhatsApp.

### 4. Fotos e textos institucionais

- `img/` — fotos atuais são do acervo público da loja (Google/Instagram), já otimizadas.
  Para trocar, mantenha nomes ou atualize os caminhos em `catalogo.js` e nos HTMLs.
- Endereço, horários e telefone estão nos HTMLs (cabeçalho, seção "Visite a loja",
  página de contato e rodapé). Mantenha-os sincronizados.

## Identidade e acessibilidade

- Paleta: azul-marinho `#0C1B33` + laranja `#F26522` (tokens em `:root` no CSS).
  Os tons `--orange-600` e `--orange-text` existem para **texto/botões com contraste AA**
  (≥ 4,5:1 com branco) — o laranja puro é usado só em grandes áreas e textos grandes.
- Todos os textos e botões foram auditados com Lighthouse: **100 acessibilidade /
  100 boas práticas / 100 SEO** em todas as páginas.
- Navegação por teclado com foco visível, skip link, `alt` em todas as imagens,
  hierarquia de títulos correta (h1 → h2 → h3).

## Regras de conteúdo (v1)

- **Sem alegações de saúde** — os textos descrevem produtos e atendimento, nunca
  prometem efeitos terapêuticos.
- **Sem descontos, preços ou condições inventados** — tudo que não é confirmado pela
  loja exibe "Consulte" e leva ao WhatsApp.
- Formulário de contato **não envia e-mail**: valida os campos e abre o WhatsApp com a
  mensagem formatada (sem backend).

## Pendências / a confirmar com a loja

1. Preços e formas de pagamento (hoje: "Consulte o preço").
2. Logotipo oficial (o símbolo atual é uma recriação em SVG para uso temporário).
3. Fotos oficiais de produtos e fachada (hoje: acervo público do Google/Instagram).
4. Confirmação de delivery/retirada e taxas por bairro.
5. Se no futuro houver checkout, será uma v2 com backend — a estrutura de dados do
   `catalogo.js` já é compatível com a inclusão de preços reais.
