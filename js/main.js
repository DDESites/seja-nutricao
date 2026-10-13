/* =========================================================
   SEJA NUTRIÇÃO — main.js
   Menu mobile, busca, formulário, galeria e animações
   ========================================================= */
(function () {
  'use strict';

  var ZAP_LINK = 'https://wa.me/message/U7FNIRAZKTBQB1';

  /* -------------------------------------------------
     1. Menu mobile
     ------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function fecharMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var aberto = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!aberto));
      nav.classList.toggle('is-open', !aberto);
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fecharMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fecharMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 980) fecharMenu();
    });
  }

  /* -------------------------------------------------
     2. Sombra do cabeçalho ao rolar
     ------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var aoRolar = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
  }

  /* -------------------------------------------------
     3. Busca do cabeçalho → página de produtos
     ------------------------------------------------- */
  var btnBusca = document.getElementById('btn-busca');
  if (btnBusca) {
    btnBusca.addEventListener('click', function (e) {
      var campo = document.getElementById('busca');
      if (campo) {
        /* Já estamos na página do catálogo: apenas foca o campo. */
        e.preventDefault();
        campo.focus();
        campo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      /* Caso contrário, o href leva para produtos.html#busca normalmente. */
    });
  }

  /* -------------------------------------------------
     4. Destaque de hoje na tabela de horários
     ------------------------------------------------- */
  var dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
              'quinta-feira', 'sexta-feira', 'sábado'];
  var hoje = dias[new Date().getDay()];

  document.querySelectorAll('.horarios li').forEach(function (li) {
    var diasDoItem = (li.dataset.dia || '').split('|');
    if (diasDoItem.indexOf(hoje) > -1) {
      li.classList.add('hoje');
      li.setAttribute('aria-current', 'date');
    }
  });

  /* -------------------------------------------------
     5. Botões com mensagem personalizada (produtos)
     ------------------------------------------------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-zap-produto]');
    if (!el) return;
    /* Mantém o link oficial da loja; o produto fica identificado no botão. */
    el.setAttribute('href', ZAP_LINK);
  });

  /* -------------------------------------------------
     6. Galeria com lightbox
     ------------------------------------------------- */
  var galeria = document.querySelector('.galeria');
  if (galeria) {
    var figuras = Array.prototype.slice.call(galeria.querySelectorAll('figure'));

    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Visualização da foto');
    box.innerHTML =
      '<button class="lb-close" type="button" aria-label="Fechar imagem">&#10005;</button>' +
      '<button class="lb-prev" type="button" aria-label="Foto anterior">&#8249;</button>' +
      '<img alt=""> ' +
      '<button class="lb-next" type="button" aria-label="Próxima foto">&#8250;</button>';
    document.body.appendChild(box);

    var boxImg = box.querySelector('img');
    var gatilho = null;
    var atual = 0;

    function mostrar(i) {
      atual = (i + figuras.length) % figuras.length;
      var img = figuras[atual].querySelector('img');
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt;
    }

    function abrir(i, origem) {
      gatilho = origem;
      mostrar(i);
      box.classList.add('is-open');
      box.querySelector('.lb-close').focus();
      document.body.style.overflow = 'hidden';
    }

    function fechar() {
      box.classList.remove('is-open');
      document.body.style.overflow = '';
      if (gatilho) gatilho.focus();
    }

    figuras.forEach(function (fig, i) {
      fig.setAttribute('tabindex', '0');
      fig.setAttribute('role', 'button');
      fig.setAttribute('aria-label', 'Ampliar foto: ' + (fig.querySelector('img').alt || ''));
      fig.addEventListener('click', function () { abrir(i, fig); });
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          abrir(i, fig);
        }
      });
    });

    box.querySelector('.lb-close').addEventListener('click', fechar);
    box.querySelector('.lb-prev').addEventListener('click', function () { mostrar(atual - 1); });
    box.querySelector('.lb-next').addEventListener('click', function () { mostrar(atual + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) fechar(); });

    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape') fechar();
      if (e.key === 'ArrowLeft') mostrar(atual - 1);
      if (e.key === 'ArrowRight') mostrar(atual + 1);
    });
  }

  /* -------------------------------------------------
     7. Formulário de contato
     ------------------------------------------------- */
  var form = document.getElementById('form-contato');

  if (form) {
    var sucesso = document.getElementById('form-success');

    function marcarErro(campo, mensagem) {
      var box = campo.closest('.form-field') || campo.closest('.checkbox-wrap');
      var err = box ? box.querySelector('.error') : null;
      if (err) err.textContent = mensagem || '';
      campo.setAttribute('aria-invalid', mensagem ? 'true' : 'false');
      return !mensagem;
    }

    function validar(campo) {
      var valor = (campo.value || '').trim();

      switch (campo.id) {
        case 'nome':
          return marcarErro(campo, valor.length >= 2 ? '' : 'Informe seu nome.');

        case 'contato': {
          if (!valor) return marcarErro(campo, 'Informe um WhatsApp ou e-mail.');
          if (valor.indexOf('@') > -1) {
            var okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor);
            return marcarErro(campo, okEmail ? '' : 'E-mail inválido.');
          }
          var digitos = valor.replace(/\D/g, '');
          return marcarErro(campo, digitos.length >= 10 && digitos.length <= 14
            ? '' : 'Telefone incompleto (DDD + número).');
        }

        case 'assunto':
          return marcarErro(campo, valor ? '' : 'Escolha um assunto.');

        case 'mensagem':
          return marcarErro(campo, valor.length >= 5
            ? (valor.length <= 800 ? '' : 'Mensagem muito longa (máx. 800 caracteres).')
            : 'Escreva uma mensagem.');

        case 'consentimento':
          return marcarErro(campo, campo.checked ? '' : 'Precisamos do seu consentimento para responder.');

        default:
          return true;
      }
    }

    var campos = Array.prototype.slice.call(
      form.querySelectorAll('#nome, #contato, #assunto, #mensagem, #consentimento')
    );

    campos.forEach(function (campo) {
      var evt = (campo.type === 'checkbox' || campo.tagName === 'SELECT') ? 'change' : 'blur';
      campo.addEventListener(evt, function () { validar(campo); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var primeiroInvalido = null;
      campos.forEach(function (campo) {
        var ok = validar(campo);
        if (!ok && !primeiroInvalido) primeiroInvalido = campo;
      });

      if (primeiroInvalido) {
        if (sucesso) sucesso.classList.remove('is-visible');
        primeiroInvalido.focus();
        return;
      }

      var dados = new FormData(form);
      var linhas = [
        'Olá! Vim pelo site da Seja Nutrição.',
        '',
        'Nome: ' + dados.get('nome'),
        'Contato: ' + dados.get('contato'),
        'Assunto: ' + dados.get('assunto'),
        '',
        String(dados.get('mensagem') || '')
      ];
      var texto = linhas.join('\n');

      /* Copia a mensagem e abre o WhatsApp oficial da loja. */
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto)['catch'](function () { /* sem permissão */ });
      }

      window.open(ZAP_LINK, '_blank', 'noopener');

      if (sucesso) {
        sucesso.innerHTML =
          '<strong>Tudo certo!</strong> Sua mensagem foi copiada e abrimos o WhatsApp da loja — ' +
          'basta colar (<kbd>Ctrl</kbd>+<kbd>V</kbd>) e enviar. Se a janela não abriu, ' +
          '<a href="' + ZAP_LINK + '" target="_blank" rel="noopener">clique aqui</a>.' +
          '<textarea class="copia-msg" readonly aria-label="Mensagem pronta para copiar"></textarea>';
        sucesso.querySelector('textarea').value = texto;
        sucesso.classList.add('is-visible');
        sucesso.focus();
      }

      form.reset();
      campos.forEach(function (campo) { campo.setAttribute('aria-invalid', 'false'); });
    });
  }

  /* -------------------------------------------------
     8. Animação de entrada suave
     ------------------------------------------------- */
  var itens = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function revelarTodos() {
    itens.forEach(function (el) { el.classList.add('is-in'); });
  }

  if (itens.length &&
      'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    document.documentElement.classList.add('js-reveal');

    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-in');
          io.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    itens.forEach(function (el) { io.observe(el); });

    /* Segurança: nada fica oculto por mais de 2,5 s. */
    window.setTimeout(revelarTodos, 2500);

    /* Expõe para os elementos renderizados depois pelo catálogo. */
    window.__revealObserver = function (el) {
      if (el && !el.classList.contains('is-in')) io.observe(el);
    };
  } else {
    revelarTodos();
  }

  /* -------------------------------------------------
     9. Ano no rodapé
     ------------------------------------------------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
