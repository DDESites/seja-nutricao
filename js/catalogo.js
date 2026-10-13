/* =========================================================
   SEJA NUTRIÇÃO — catálogo (arquivo editável)
   Para atualizar produtos, edite apenas este arquivo.

   Campos:
   - preco: número em reais ou null (exibir "Consulte o preço")
   - precoDe: preço anterior de um item em condição especial, ou null
   - selo: "novo" | "oferta" | null
   - destaque: true exibe o produto na página inicial
   - foto: caminho da imagem (ex.: "img/prod-creatina.jpg")
           null => placeholder com o símbolo da marca
   - opcoes: { rotulo: "Sabor", itens: ["Chocolate", ...] }
   ========================================================= */

/* ---------- Contato oficial da loja ---------- */
const ZAP_LINK = "https://wa.me/message/U7FNIRAZKTBQB1";   // link oficial da loja
const ZAP_NUMERO = "5561995271886";                        // (61) 99527-1886
const LOJA = "Seja Nutrição";

/* ---------- Categorias ---------- */
const CATEGORIAS = [
  {
    id: "proteinas",
    nome: "Proteínas",
    desc: "Whey, barras e pastas",
    foto: "img/prod-drpeanut.jpg",
    icone: '<path d="M6 9h12l-1 11H7L6 9z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>'
  },
  {
    id: "creatina",
    nome: "Creatina",
    desc: "Monoidratada em pó",
    foto: "img/prod-creatina.jpg",
    icone: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'
  },
  {
    id: "vitaminas",
    nome: "Vitaminas e minerais",
    desc: "Cápsulas e comprimidos",
    foto: "img/prod-q10.jpg",
    icone: '<circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/>'
  },
  {
    id: "pre-treino",
    nome: "Pré-treino",
    desc: "Cafés e fórmulas em pó",
    foto: "img/prod-supercoffee.jpg",
    icone: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'
  },
  {
    id: "chas-graneis",
    nome: "Chás e granéis",
    desc: "Do dia a dia",
    foto: "img/loja-interno.jpg",
    icone: '<path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M17 9h2a2 2 0 0 1 0 4h-2"/><path d="M8 3v2M12 3v2"/>'
  },
  {
    id: "naturais",
    nome: "Produtos naturais",
    desc: "Colágeno, snacks e mais",
    foto: "img/prod-colageno.jpg",
    icone: '<path d="M12 21c-4-3-7-6-7-10a7 7 0 0 1 14 0c0 4-3 7-7 10z"/><path d="M12 11v6"/>'
  },
  {
    id: "acessorios",
    nome: "Acessórios",
    desc: "Coqueteleiras e potes",
    foto: null,
    icone: '<path d="M7 3h10l-1 4H8L7 3z"/><path d="M8 7h8v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7z"/><path d="M8 12h8"/>'
  }
];

/* ---------- Produtos ---------- */
const CATALOGO = [
  {
    id: "creatina-eat-clean",
    nome: "Creatina Monoidratada 300 g",
    marca: "Eat Clean",
    categoria: "creatina",
    preco: null,
    precoDe: null,
    selo: "novo",
    destaque: true,
    foto: "img/prod-creatina.jpg",
    descricao: "Creatina monoidratada em pó, pote de 300 g. Informações nutricionais e modo de uso no rótulo do fabricante.",
    detalhes: ["Apresentação: pote de 300 g", "Uso: siga a recomendação do rótulo ou de um profissional", "Consulte sabores e marcas disponíveis na loja"],
    opcoes: { rotulo: "Apresentação", itens: ["300 g", "Outras marcas"] }
  },
  {
    id: "creatina-varias-marcas",
    nome: "Creatina — outras marcas e tamanhos",
    marca: "Várias marcas",
    categoria: "creatina",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: null,
    descricao: "Creatina monoidratada de diferentes marcas e gramaturas. Chame no WhatsApp para conferir as opções em estoque.",
    detalhes: ["Potes de 100 g a 1 kg", "Consulta de estoque pelo WhatsApp"],
    opcoes: null
  },
  {
    id: "whey-concentrado",
    nome: "Whey Protein Concentrado",
    marca: "Várias marcas",
    categoria: "proteinas",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: true,
    foto: null,
    descricao: "Proteína em pó de diferentes marcas, com opções de sabor e gramatura. Veja os rótulos e as informações do fabricante na loja.",
    detalhes: ["Sabores: chocolate, baunilha, morango e outros", "Gramaturas variadas", "Consulte a tabela do produto no rótulo"],
    opcoes: { rotulo: "Sabor", itens: ["Chocolate", "Baunilha", "Morango", "Consultar outros"] }
  },
  {
    id: "whey-isolado",
    nome: "Whey Protein Isolado",
    marca: "Várias marcas",
    categoria: "proteinas",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: null,
    descricao: "Linhas isoladas de proteína em pó, conforme marca e disponibilidade. Estoque confirmado pelo atendimento.",
    detalhes: ["Apresentações conforme marca", "Informações completas no rótulo"],
    opcoes: { rotulo: "Sabor", itens: ["Chocolate", "Baunilha", "Consultar outros"] }
  },
  {
    id: "dr-peanut",
    nome: "Pasta de amendoim com whey 600 g",
    marca: "Dr. Peanut",
    categoria: "proteinas",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: true,
    foto: "img/prod-drpeanut.jpg",
    descricao: "Pasta de amendoim com whey protein, pote de 600 g, com vários sabores. Zero adição de açúcar, conforme rótulo do fabricante.",
    detalhes: ["Pote de 600 g", "Sabores: Cookies & Cream, Chocotine, Brownie, Avelã, Bombom Italiano", "Zero adição de açúcar, segundo o fabricante"],
    opcoes: { rotulo: "Sabor", itens: ["Cookies & Cream", "Chocotine", "Brownie", "Avelã", "Bombom Italiano"] }
  },
  {
    id: "barras-proteina",
    nome: "Barras de proteína (unidade)",
    marca: "Várias marcas",
    categoria: "proteinas",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: null,
    descricao: "Barras de proteína avulsas para o dia a dia. Marcas e sabores conforme disponibilidade.",
    detalhes: ["Venda por unidade", "Consulte sabores e valores na loja"],
    opcoes: null
  },
  {
    id: "collagen-renew",
    nome: "Colágeno hidrolisado 100% — Collagen Renew",
    marca: "Nutrify Real Foods",
    categoria: "naturais",
    preco: null,
    precoDe: null,
    selo: "novo",
    destaque: true,
    foto: "img/prod-colageno.jpg",
    descricao: "Colágeno hidrolisado em pó com sabor laranja. Informações nutricionais e modo de preparo no rótulo.",
    detalhes: ["Pó para dissolver em água ou bebida preferida", "Sabor laranja", "Confira o peso e o lote no rótulo"],
    opcoes: { rotulo: "Sabor", itens: ["Laranja", "Consultar outros"] }
  },
  {
    id: "collagen-ii",
    nome: "Colágeno tipo II — Collagen II",
    marca: "Nutrify Real Foods",
    categoria: "naturais",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: "img/prod-colageno.jpg",
    descricao: "Colágeno tipo II em apresentação de cápsulas. Descrição completa e demais informações no rótulo do fabricante.",
    detalhes: ["Apresentação conforme rótulo", "Consulte disponibilidade pelo WhatsApp"],
    opcoes: null
  },
  {
    id: "super-coffee",
    nome: "Super Coffee 3.0 — 300 g",
    marca: "Caffeine Army",
    categoria: "pre-treino",
    preco: null,
    precoDe: null,
    selo: "novo",
    destaque: true,
    foto: "img/prod-supercoffee.jpg",
    descricao: "Café em pó com cafeína, pote de 300 g, em diferentes sabores. Contém cafeína — veja a recomendação de uso no rótulo.",
    detalhes: ["Pote de 300 g", "Sabores: Vanilla Latte, Rocky Choco, Mocha, Decaf e White Choco", "Contém cafeína"],
    opcoes: { rotulo: "Sabor", itens: ["Vanilla Latte", "Rocky Choco", "Mocha", "Decaf", "White Choco"] }
  },
  {
    id: "pre-treino-varios",
    nome: "Pré-treino — fórmulas em pó",
    marca: "Várias marcas",
    categoria: "pre-treino",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: null,
    descricao: "Fórmulas de pré-treino em pó, conforme marca e disponibilidade. Leia o rótulo quanto à porção e ao teor de cafeína.",
    detalhes: ["Consulte sabores e marcas em estoque", "Contém cafeína em geral — confira o rótulo"],
    opcoes: null
  },
  {
    id: "coenzima-q10-nutrata",
    nome: "Coenzima Q10 200 mg — 30 cápsulas",
    marca: "Nutrata",
    categoria: "vitaminas",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: true,
    foto: "img/prod-q10.jpg",
    descricao: "Coenzima Q10 em cápsulas com vitamina E e TCM, frasco com 30 cápsulas. Informações completas no rótulo.",
    detalhes: ["Frasco com 30 cápsulas", "Suplemento alimentar", "Confira a recomendação de uso no rótulo"],
    opcoes: null
  },
  {
    id: "coenzima-q10-puravida",
    nome: "Coenzima Q10 — 60 cápsulas",
    marca: "PuraVida",
    categoria: "vitaminas",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: "img/prod-q10.jpg",
    descricao: "Coenzima Q10 com vitamina E, caixa com 60 cápsulas. Suplemento alimentar — veja o rótulo.",
    detalhes: ["Caixa com 60 cápsulas", "Nova fórmula, segundo o fabricante"],
    opcoes: null
  },
  {
    id: "coenzima-q10-omix",
    nome: "Coenzima Q10 com astaxantina",
    marca: "Omix Health",
    categoria: "vitaminas",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: "img/prod-q10.jpg",
    descricao: "Coenzima Q10 com astaxantina e vitamina E em cápsulas. Informações nutricionais no rótulo.",
    detalhes: ["Frasco com 60 cápsulas", "Suplemento alimentar"],
    opcoes: null
  },
  {
    id: "vitaminas-minerais",
    nome: "Vitaminas e minerais — linha completa",
    marca: "Várias marcas",
    categoria: "vitaminas",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: null,
    descricao: "Vitamina D, complexo B, ômega 3, minerais e outras apresentações. A equipe ajuda você a localizar a informação no rótulo.",
    detalhes: ["Diversas marcas e apresentações", "Orientação de localização do rótulo na loja — não substitui aconselhamento profissional"],
    opcoes: null
  },
  {
    id: "chas",
    nome: "Chás — seleção da loja",
    marca: "Várias marcas",
    categoria: "chas-graneis",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: true,
    foto: "img/loja-interno.jpg",
    descricao: "Chás em folha, saquinhos e blends para o dia a dia. Confira as opções disponíveis na prateleira de chás.",
    detalhes: ["Mate, verde, erva-cidreira e blends", "Confeitaria e folha conforme marca"],
    opcoes: null
  },
  {
    id: "graneis",
    nome: "Granéis e snacks",
    marca: "Várias marcas",
    categoria: "chas-graneis",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: null,
    descricao: "Granola, castanhas, frutas desidratadas e snacks para lanches. Estoque variado conforme a semana.",
    detalhes: ["Consulte itens e pesos na loja", "Retirada ou delivery conforme disponibilidade"],
    opcoes: null
  },
  {
    id: "coqueteleira",
    nome: "Coqueteleira",
    marca: "Várias marcas",
    categoria: "acessorios",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: null,
    descricao: "Coqueteleiras em diferentes tamanhos e cores. Confira capacidades e modelos disponíveis.",
    detalhes: ["Tamanhos variados", "Cores conforme estoque"],
    opcoes: { rotulo: "Tamanho", itens: ["500 ml", "700 ml", "Consultar outros"] }
  },
  {
    id: "potes-medidores",
    nome: "Potes e medidores",
    marca: "Várias marcas",
    categoria: "acessorios",
    preco: null,
    precoDe: null,
    selo: null,
    destaque: false,
    foto: null,
    descricao: "Potes organizadores, medidores e acessórios para a rotina de suplementação.",
    detalhes: ["Acessórios avulsos", "Consulte modelos em estoque"],
    opcoes: null
  },
  {
    id: "importados",
    nome: "Produtos importados — novidades",
    marca: "Seleção da loja",
    categoria: "naturais",
    preco: null,
    precoDe: null,
    selo: "novo",
    destaque: false,
    foto: null,
    descricao: "Itens importados que chegam conforme lote de importação. Novidades toda semana no Instagram @sejanutrition.",
    detalhes: ["Lançamentos conforme disponibilidade", "Siga @sejanutrition para novidades"],
    opcoes: null
  }
];

/* =========================================================
   Utilidades
   ========================================================= */
function formatarPreco(valor) {
  return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function linkZap() {
  return ZAP_LINK;
}

function mensagemZap(texto) {
  /* O link oficial da loja não aceita texto pré-preenchido.
     Mantemos o texto para uso futuro caso a loja informe o número de WhatsApp. */
  return linkZap(texto);
}

function categoriaPorId(id) {
  return CATEGORIAS.find(function (c) { return c.id === id; }) || null;
}

function produtoPorId(id) {
  return CATALOGO.find(function (p) { return p.id === id; }) || null;
}

function placeholder(categoria) {
  return (
    '<div class="ph" role="img" aria-label="Imagem não disponível para este produto">' +
      '<svg class="ph__mark" viewBox="0 0 64 64" aria-hidden="true">' +
        '<rect width="64" height="64" rx="16" fill="#0C1B33"/>' +
        '<path d="M44 22 A12 12 0 1 0 32 34 A12 12 0 1 1 20 46" fill="none" stroke="#F26522" stroke-width="10" stroke-linecap="round"/>' +
      '</svg>' +
      '<span class="ph__txt">' + (categoria || "Seja") + '</span>' +
    '</div>'
  );
}

function bloquecoPreco(p) {
  if (p.preco !== null && p.preco !== undefined) {
    return (
      '<div class="preco">' +
        '<span class="preco__valor">' + formatarPreco(p.preco) + '</span>' +
        (p.precoDe ? '<span class="preco__de">' + formatarPreco(p.precoDe) + '</span>' : '') +
      '</div>'
    );
  }
  return '<div class="preco"><span class="preco__consulta">Consulte o preço</span></div>';
}

function seloHtml(p) {
  if (p.selo === "novo") return '<span class="selo selo--novo">Novidade</span>';
  if (p.selo === "oferta") return '<span class="selo selo--oferta">Oferta</span>';
  return "";
}

function midiaHtml(p, grande) {
  var cat = categoriaPorId(p.categoria);
  if (p.foto) {
    return '<img src="' + p.foto + '" alt="' + p.nome + ' — ' + (p.marca || '') + '" loading="' + (grande ? 'eager' : 'lazy') + '">';
  }
  return placeholder(cat ? cat.nome : "");
}

/* =========================================================
   Card de produto
   ========================================================= */
function criarCardProduto(p) {
  var cat = categoriaPorId(p.categoria);
  var artigo = document.createElement("article");
  artigo.className = "prod-card reveal";

  artigo.innerHTML =
    seloHtml(p) +
    '<a class="prod-card__media" href="produto.html?id=' + encodeURIComponent(p.id) + '" ' +
      'aria-label="Ver produto: ' + p.nome + '">' + midiaHtml(p) + '</a>' +
    '<div class="prod-card__body">' +
      '<span class="prod-card__cat">' + (cat ? cat.nome : '') + '</span>' +
      '<h3 class="prod-card__nome"><a href="produto.html?id=' + encodeURIComponent(p.id) + '">' + p.nome + '</a></h3>' +
      '<p class="prod-card__marca">' + (p.marca || "") + '</p>' +
      bloquecoPreco(p) +
      '<div class="prod-card__acoes">' +
        '<a class="btn btn--primary btn--sm" href="produto.html?id=' + encodeURIComponent(p.id) + '">Ver produto</a>' +
        '<a class="btn btn--ghost btn--sm" href="' + linkZap() + '" target="_blank" rel="noopener" ' +
          'data-zap-produto="' + p.nome + '">Consultar no WhatsApp</a>' +
      '</div>' +
    '</div>';

  return artigo;
}

function renderizarGrade(alvo, lista) {
  var caixa = document.getElementById(alvo);
  if (!caixa) return;

  if (!lista.length) {
    caixa.innerHTML =
      '<div class="estado-vazio">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">' +
          '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>' +
        '<h3>Nenhum produto encontrado</h3>' +
        '<p>Tente outra palavra ou escolha outra categoria. Se você procura um item específico, chame a loja no WhatsApp — a equipe confere o estoque para você.</p>' +
        '<a class="btn btn--primary" href="' + linkZap() + '" target="_blank" rel="noopener">Chamar no WhatsApp</a>' +
      '</div>';
    return;
  }

  caixa.innerHTML = "";
  lista.forEach(function (p) { caixa.appendChild(criarCardProduto(p)); });
  observarReveal(caixa);
}

/* =========================================================
   Página inicial — categorias e destaques
   ========================================================= */
function renderizarCategorias() {
  var caixa = document.getElementById("grade-categorias");
  if (!caixa) return;

  caixa.innerHTML = CATEGORIAS.map(function (c) {
    var img = c.foto
      ? '<img class="cat-card__img" src="' + c.foto + '" alt="" loading="lazy">'
      : '';
    return (
      '<a class="cat-card reveal" href="produtos.html?categoria=' + encodeURIComponent(c.id) + '">' +
        img +
        '<span class="cat-card__icone" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          c.icone + '</svg>' +
        '</span>' +
        '<span>' +
          '<span class="cat-card__nome">' + c.nome + '</span>' +
          '<span class="cat-card__desc">' + c.desc + '</span>' +
        '</span>' +
        '<span class="cat-card__arrow" aria-hidden="true">&rarr;</span>' +
      '</a>'
    );
  }).join("");

  observarReveal(caixa);
}

function renderizarDestaques() {
  var caixa = document.getElementById("grade-destaques");
  if (!caixa) return;

  var limite = parseInt(caixa.dataset.limite || "6", 10);
  var lista = CATALOGO.filter(function (p) { return p.destaque; }).slice(0, limite);

  caixa.innerHTML = "";
  lista.forEach(function (p) { caixa.appendChild(criarCardProduto(p)); });
  observarReveal(caixa);
}

/* =========================================================
   Página de catálogo — busca, filtros e ordenação
   ========================================================= */
function iniciarCatalogo() {
  var grade = document.getElementById("grade-produtos");
  if (!grade) return;

  var inputBusca = document.getElementById("busca");
  var contador = document.getElementById("contador");
  var selOrdenacao = document.getElementById("ordenacao");
  var selPreco = document.getElementById("faixa-preco");
  var blocoPreco = document.getElementById("bloco-preco");
  var btnLimpar = document.getElementById("limpar-filtros");
  var chips = Array.prototype.slice.call(document.querySelectorAll(".filtro"));

  var filtroCategoria = "todos";
  var temPrecos = CATALOGO.some(function (p) { return typeof p.preco === "number"; });

  /* Faixa de preço só aparece quando há preços cadastrados */
  if (blocoPreco) blocoPreco.hidden = !temPrecos;

  /* Categoria vinda da home: produtos.html?categoria=creatina */
  var params = new URLSearchParams(location.search);
  var catParam = params.get("categoria");
  if (catParam && categoriaPorId(catParam)) {
    filtroCategoria = catParam;
    chips.forEach(function (c) {
      c.setAttribute("aria-pressed", String(c.dataset.valor === catParam));
    });
  }

  function aplicar() {
    var termo = ((inputBusca && inputBusca.value) || "").trim().toLowerCase();
    var lista = CATALOGO.slice();

    if (filtroCategoria !== "todos") {
      lista = lista.filter(function (p) { return p.categoria === filtroCategoria; });
    }

    if (termo) {
      lista = lista.filter(function (p) {
        var cat = categoriaPorId(p.categoria);
        return (
          p.nome.toLowerCase().indexOf(termo) > -1 ||
          (p.marca || "").toLowerCase().indexOf(termo) > -1 ||
          p.descricao.toLowerCase().indexOf(termo) > -1 ||
          (cat ? cat.nome.toLowerCase().indexOf(termo) > -1 : false)
        );
      });
    }

    if (selPreco && temPrecos && selPreco.value !== "todos") {
      var faixa = selPreco.value.split("-");
      var min = Number(faixa[0]);
      var max = faixa[1] === "" ? Infinity : Number(faixa[1]);
      lista = lista.filter(function (p) {
        return typeof p.preco === "number" && p.preco >= min && p.preco <= max;
      });
    }

    var ordem = selOrdenacao ? selOrdenacao.value : "relevancia";
    if (ordem === "preco-asc") {
      lista.sort(function (a, b) { return (a.preco || Infinity) - (b.preco || Infinity); });
    } else if (ordem === "preco-desc") {
      lista.sort(function (a, b) { return (b.preco || -1) - (a.preco || -1); });
    } else if (ordem === "novidades") {
      lista.sort(function (a, b) { return (b.selo === "novo" ? 1 : 0) - (a.selo === "novo" ? 1 : 0); });
    } else {
      lista.sort(function (a, b) { return (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0); });
    }

    renderizarGrade("grade-produtos", lista);

    if (contador) {
      contador.textContent =
        lista.length === 1 ? "1 produto encontrado" : lista.length + " produtos encontrados";
    }

    if (btnLimpar) {
      var filtrando = termo || filtroCategoria !== "todos" ||
        (selPreco && selPreco.value !== "todos") ||
        (ordem !== "relevancia");
      btnLimpar.hidden = !filtrando;
    }
  }

  if (inputBusca) inputBusca.addEventListener("input", aplicar);

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      filtroCategoria = chip.dataset.valor;
      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", String(c === chip));
      });
      aplicar();
    });
  });

  if (selOrdenacao) selOrdenacao.addEventListener("change", aplicar);
  if (selPreco) selPreco.addEventListener("change", aplicar);

  if (btnLimpar) {
    btnLimpar.addEventListener("click", function () {
      filtroCategoria = "todos";
      if (inputBusca) inputBusca.value = "";
      if (selPreco) selPreco.value = "todos";
      if (selOrdenacao) selOrdenacao.value = "relevancia";
      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", String(c.dataset.valor === "todos"));
      });
      aplicar();
      if (inputBusca) inputBusca.focus();
    });
  }

  aplicar();
}

/* =========================================================
   Página do produto
   ========================================================= */
function iniciarProduto() {
  var raiz = document.getElementById("pagina-produto");
  if (!raiz) return;

  var params = new URLSearchParams(location.search);
  var p = produtoPorId(params.get("id") || "");

  var caixaErr = document.getElementById("produto-nao-encontrado");

  if (!p) {
    raiz.hidden = true;
    if (caixaErr) caixaErr.hidden = false;
    var secRel = document.getElementById('sec-relacionados');
    if (secRel) secRel.hidden = true;
    var bcErr = document.getElementById('bc-produto');
    if (bcErr) bcErr.insertAdjacentHTML('beforeend', '<span>Produto não encontrado</span>');
    return;
  }

  var cat = categoriaPorId(p.categoria);

  document.title = p.nome + " — " + LOJA;

  var desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute("content", p.nome + (p.marca ? " — " + p.marca : "") + " na " + LOJA + ". Consulte preço e disponibilidade pelo WhatsApp.");
  }

  /* Mídia */
  var media = document.getElementById("produto-media");
  if (media) media.innerHTML = midiaHtml(p, true);

  /* Selos */
  var selo = document.getElementById("produto-selo");
  if (selo) {
    var rotulo = p.selo === "novo" ? "Novidade" : p.selo === "oferta" ? "Oferta" : "";
    selo.textContent = rotulo;
    selo.hidden = !rotulo;
    selo.className = "selo" + (p.selo === "novo" ? " selo--novo" : " selo--oferta");
  }

  /* Cabeçalho */
  var el;
  el = document.getElementById("produto-categoria");
  if (el) el.textContent = cat ? cat.nome : "";

  el = document.getElementById("produto-nome");
  if (el) el.textContent = p.nome;

  el = document.getElementById("produto-marca");
  if (el) el.textContent = p.marca || "";

  el = document.getElementById("produto-descricao");
  if (el) el.textContent = p.descricao;

  /* Preço */
  var precoBox = document.getElementById("produto-preco");
  if (precoBox) precoBox.innerHTML =
    (typeof p.preco === "number"
      ? '<span class="preco__valor">' + formatarPreco(p.preco) + '</span>' +
        (p.precoDe ? ' <span class="preco__de">' + formatarPreco(p.precoDe) + '</span>' : '')
      : '<span class="preco__consulta">Consulte o preço</span>') +
    '<span class="disp">Preço e estoque confirmados pelo atendimento no momento da compra.</span>';

  /* Detalhes */
  var listaDet = document.getElementById("produto-detalhes");
  if (listaDet) {
    listaDet.innerHTML = (p.detalhes || []).map(function (d) {
      return "<li>" + d + "</li>";
    }).join("");
    listaDet.parentElement.hidden = !(p.detalhes && p.detalhes.length);
  }

  /* Opções (sabor/tamanho) */
  var blocoOp = document.getElementById("produto-opcoes");
  if (blocoOp) {
    if (p.opcoes && p.opcoes.itens && p.opcoes.itens.length) {
      document.getElementById("opcoes-rotulo").textContent = p.opcoes.rotulo;
      var lista = document.getElementById("opcoes-lista");
      lista.innerHTML = p.opcoes.itens.map(function (item, i) {
        return '<button class="opcao" type="button" aria-pressed="' + (i === 0) + '">' + item + '</button>';
      }).join("");
      lista.addEventListener("click", function (e) {
        var btn = e.target.closest(".opcao");
        if (!btn) return;
        lista.querySelectorAll(".opcao").forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
        });
      });
    } else {
      blocoOp.hidden = true;
    }
  }

  /* Breadcrumb */
  var bc = document.getElementById("bc-produto");
  if (bc && cat) {
    bc.insertAdjacentHTML("beforeend",
      '<a href="produtos.html?categoria=' + encodeURIComponent(cat.id) + '">' + cat.nome + '</a> ' +
      '<span aria-hidden="true">›</span> <span>' + p.nome + '</span>');
  }

  /* Produtos relacionados */
  var rel = document.getElementById("grade-relacionados");
  if (rel) {
    var outros = CATALOGO.filter(function (x) {
      return x.categoria === p.categoria && x.id !== p.id;
    }).slice(0, 3);

    if (outros.length < 3) {
      CATALOGO.forEach(function (x) {
        if (outros.length < 3 && x.id !== p.id && outros.indexOf(x) === -1) outros.push(x);
      });
    }

    outros.forEach(function (x) { rel.appendChild(criarCardProduto(x)); });
    observarReveal(rel);
  }
}

/* =========================================================
   Revelação suave (compartilhada com main.js)
   ========================================================= */
function observarReveal(raiz) {
  if (typeof window.__revealObserver === "function") {
    (raiz || document).querySelectorAll(".reveal:not(.is-in)").forEach(window.__revealObserver);
  } else {
    (raiz || document).querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-in");
    });
  }
}

/* ---------- Boot do catálogo ---------- */
document.addEventListener("DOMContentLoaded", function () {
  renderizarCategorias();
  renderizarDestaques();
  iniciarCatalogo();
  iniciarProduto();
});
