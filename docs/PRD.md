# PRD — Site Seja Nutrição (v1)

> Documento de requisitos do site institucional + catálogo da loja Seja Nutrição.
> Base para a v1 entregue neste projeto.

## 1. Contexto e objetivo

A **Seja Nutrição** é uma loja de suplementos e produtos naturais em Águas Lindas de
Goiás (GO). A loja já atende clientes pelo Instagram e pelo WhatsApp, mas não possui
site próprio.

**Objetivo da v1:** criar um site institucional com catálogo de produtos que
**gere atendimento via WhatsApp**, funcionando como cartão de visita digital e vitrine
buscável — sem checkout.

**Modelo de venda (v1):** catálogo + WhatsApp. O cliente navega, busca, confere as
opções e fala com a loja para fechar. Não há carrinho, pagamento ou cálculo de frete.

## 2. Público e canais

- Público local: moradores de Águas Lindas e região que compram suplementos, vitaminas,
  chás e produtos naturais.
- Canais oficiais usados pelo site:
  - WhatsApp: `https://wa.me/message/U7FNIRAZKTBQB1` (link mensagem, sem texto pré-preenchido)
  - Telefone: (61) 99527-1886
  - Instagram: instagram.com/sejanutrition
- Dados da loja extraídos dos canais oficiais (Instagram e ficha do Google):
  - Endereço: Quadra 09, lote 20, Loja 01 — Camping Club, Águas Lindas de Goiás — GO, CEP 72914-012
  - Horários: seg a sáb 08:00–20:00; dom 08:00–14:00

## 3. Identidade visual

- **Azul-marinho** (institucional, confiança) + **laranja vibrante** (energia, destaque).
- Tom de voz: próximo, prático, sem promessas milagrosas.
- Mobile-first: a experiência principal é o celular.

## 4. Páginas e requisitos

### 4.1 Home (`index.html`)

1. **Cabeçalho fixo**: logo, navegação, campo/busca de produtos e CTA WhatsApp.
2. **Hero**: proposta de valor + CTA "Falar com a loja" + foto da loja.
3. **Categorias**: cards com as categorias do catálogo.
4. **Produtos em destaque**: grade de destaques (editável via catálogo).
5. **Faixa de aviso editável**: campanha/novidade da semana com CTA WhatsApp
   (área comentada no HTML para a loja editar).
6. **Por que comprar na Seja**: diferenciais reais (atendimento, seleção, retirada/
   delivery, informação sem promessas).
7. **Sobre a loja**: texto institucional + foto.
8. **Avaliações**: notas e depoimentos reais (Google: 5,0).
9. **Rodapé**: navegação, categorias, contato, redes, privacidade.

### 4.2 Catálogo (`produtos.html`)

- Busca por nome/marca.
- Filtro por categoria (chips).
- Filtro por faixa de preço — **exibido somente quando houver preços confirmados**.
- Ordenação: relevância, novidades, menor e maior preço.
- Contador de resultados e botão "limpar filtros".
- Estado vazio amigável quando nenhum produto corresponde aos filtros.

### 4.3 Detalhe do produto (`produto.html?id=...`)

- Fotos, nome, marca, categoria, descrição e lista de detalhes.
- Opções (ex.: apresentação) quando o produto tiver variações.
- CTA WhatsApp por produto.
- Aviso legal: preços/estoque/entrega confirmados no atendimento; fotos ilustrativas.
- Produtos relacionados da mesma categoria.
- Estado de "produto não encontrado" com sugestões.

### 4.4 Contato (`contato.html`)

- Endereço completo + mapa embutido (Google Maps).
- Horários de funcionamento (dia atual destacado).
- Telefone/WhatsApp e link para o Instagram.
- **Formulário simples**: nome, contato, assunto e mensagem — valida os campos e
  abre o WhatsApp com a mensagem pronta (sem backend/e-mail na v1).

### 4.5 Páginas institucionais

- `sobre.html`: história, fotos da loja, horários, CTA.
- `privacidade.html`: política básica de privacidade e uso de dados do formulário.

## 5. Regras de conteúdo (obrigatórias)

1. **Nenhuma alegação de saúde**: não prometer emagrecimento, cura, ganho muscular etc.
   Textos descrevem o produto e o atendimento.
2. **Nada de preço/desconto/condição inventado**: só o que a loja confirmar. Enquanto
   não houver preços confirmados, o site exibe "Consulte o preço" e leva ao WhatsApp.
3. Fotos e textos identificando a loja só de fontes oficiais/públicas da própria loja.

## 6. Requisitos não funcionais

- **Responsividade**: mobile-first, testado de ~360 px a desktop (>1200 px), sem
  rolagem horizontal.
- **Acessibilidade (AA)**: contraste ≥ 4,5:1 em texto, hierarquia de títulos correta,
  texto alternativo em imagens, navegação por teclado com foco visível, skip link,
  labels em todos os campos.
- **SEO básico**: title e meta description únicos por página, Open Graph,
  `sitemap.xml`/`robots.txt` quando publicado, headings semânticos.
- **Performance**: site estático leve (sem frameworks), imagens otimizadas (JPEG ≤
  ~1200 px), carregamento assíncrono dos scripts.
- **Manutenção**: dados de produtos e categorias em um único arquivo
  (`js/catalogo.js`), editável sem tocar no HTML.

## 7. Fora do escopo da v1

- Checkout, pagamento, carrinho e cálculo de frete.
- Área do cliente, login e histórico de pedidos.
- Blog/conteúdo e newsletter.
- Backend/API (o formulário encaminha ao WhatsApp).
- Aplicativo.

## 8. Critérios de aceite

- Todos os fluxos de catálogo (busca, filtros, ordenação, detalhe, relacionados,
  estados vazios/erro) funcionam sem servidor de aplicação.
- Todo CTA de contato chega ao WhatsApp oficial da loja.
- Lighthouse ≥ 95 (entregue: **100/100/100** em acessibilidade, boas práticas e SEO
  em todas as páginas).
- Nenhum texto de saúde não comprovado e nenhum preço/desconto não confirmado.

## 9. Pendências a confirmar com a loja

1. Preços e formas de pagamento.
2. Logotipo oficial (símbolo atual é recriação provisória em SVG).
3. Fotos oficiais de fachada e produtos (hoje: acervo público).
4. Políticas de delivery/retirada e taxas.
