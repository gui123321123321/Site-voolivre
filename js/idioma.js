"use strict";

/* =========================================================
   VOA RIO! — SISTEMA DE IDIOMAS
   Idiomas: Português (pt), Inglês (en) e Espanhol (es)

   Recursos:
   - Identifica o idioma pela URL atual.
   - Mantém a mesma página ao trocar de idioma.
   - Funciona na raiz e em subdiretórios, incluindo GitHub Pages.
   - Atualiza o idioma ativo no seletor.
   - Mantém os links internos na versão linguística atual.
   - Preserva parâmetros da URL e âncoras.
   - Não modifica links externos, WhatsApp, e-mail ou telefone.
   - Evita dependência de caminhos relativos frágeis.
   ========================================================= */

const IDIOMAS = Object.freeze(["pt", "en", "es"]);

const PAGINAS_DO_SITE = Object.freeze([
    "index.html",
    "asa-delta.html",
    "parapente.html"
]);

const CHAVE_IDIOMA = "idioma";

const IDIOMAS_ALTERNATIVOS = Object.freeze(["en", "es"]);


/* =========================================================
   UTILITÁRIOS DE CAMINHO
   ========================================================= */

function obterSegmentosCaminho() {
    return window.location.pathname
        .split("/")
        .filter(Boolean);
}


function obterIdiomaDoCaminho() {
    const segmentos = obterSegmentosCaminho();

    /*
     * Procura o segmento de idioma em qualquer posição.
     * Isso também funciona quando o site está hospedado
     * dentro de um subdiretório.
     */
    for (const segmento of segmentos) {
        if (IDIOMAS_ALTERNATIVOS.includes(segmento)) {
            return segmento;
        }
    }

    /*
     * A versão em português utiliza a raiz do site.
     */
    return "pt";
}


function obterPaginaAtual() {
    const segmentos = obterSegmentosCaminho();

    const ultimoSegmento = segmentos.length
        ? segmentos[segmentos.length - 1]
        : "";

    /*
     * Se a URL terminar com um arquivo conhecido,
     * mantém essa página ao trocar de idioma.
     */
    if (PAGINAS_DO_SITE.includes(ultimoSegmento)) {
        return ultimoSegmento;
    }

    /*
     * URLs como /, /en/ e /es/ representam a página inicial.
     */
    return "index.html";
}


function obterCaminhoBaseDoSite() {
    const segmentos = obterSegmentosCaminho();

    /*
     * Localiza a pasta de idioma, quando existir.
     * Tudo que estiver antes dela pertence à raiz do site.
     *
     * Exemplo:
     * /Site-voolivre/en/asa-delta.html
     * Base: /Site-voolivre/
     */
    const indiceIdioma = segmentos.findIndex((segmento) =>
        IDIOMAS_ALTERNATIVOS.includes(segmento)
    );

    if (indiceIdioma !== -1) {
        const segmentosBase = segmentos.slice(0, indiceIdioma);

        return segmentosBase.length
            ? `/${segmentosBase.join("/")}/`
            : "/";
    }

    /*
     * Na versão portuguesa, remove o nome do arquivo atual.
     * Se o site estiver em um subdiretório, ele é preservado.
     */
    const ultimoSegmento = segmentos.length
        ? segmentos[segmentos.length - 1]
        : "";

    const segmentosBase = PAGINAS_DO_SITE.includes(ultimoSegmento)
        ? segmentos.slice(0, -1)
        : segmentos;

    return segmentosBase.length
        ? `/${segmentosBase.join("/")}/`
        : "/";
}


/* =========================================================
   ARMAZENAMENTO DA PREFERÊNCIA
   ========================================================= */

function salvarIdioma(idioma) {
    if (!IDIOMAS.includes(idioma)) {
        return;
    }

    /*
     * O site continua funcionando mesmo se o navegador
     * bloquear o armazenamento local.
     */
    try {
        window.localStorage.setItem(CHAVE_IDIOMA, idioma);
    } catch (erro) {
        // A navegação por URL continua funcionando normalmente.
    }
}


function obterIdiomaSalvo() {
    try {
        const idiomaSalvo = window.localStorage.getItem(CHAVE_IDIOMA);

        return IDIOMAS.includes(idiomaSalvo)
            ? idiomaSalvo
            : null;
    } catch (erro) {
        return null;
    }
}


/* =========================================================
   ATUALIZAÇÃO DO SELETOR DE IDIOMAS
   ========================================================= */

function atualizarIdiomaAtivo() {
    /*
     * A URL é a fonte de verdade para o idioma da página.
     * O idioma salvo nunca deve ativar dois botões ao mesmo tempo.
     */
    const idiomaAtual = obterIdiomaDoCaminho();

    const botoesIdioma = document.querySelectorAll("[data-idioma]");

    botoesIdioma.forEach((botao) => {
        const ativo = botao.dataset.idioma === idiomaAtual;

        botao.classList.toggle("idioma-ativo", ativo);

        botao.setAttribute("aria-pressed", String(ativo));

        if (ativo) {
            botao.setAttribute("aria-current", "true");
        } else {
            botao.removeAttribute("aria-current");
        }
    });

    /*
     * Sincroniza a preferência salva com a página realmente aberta.
     */
    salvarIdioma(idiomaAtual);
}


/* =========================================================
   CONSTRUÇÃO DO DESTINO
   ========================================================= */

function construirDestinoIdioma(idioma) {
    if (!IDIOMAS.includes(idioma)) {
        return null;
    }

    const base = obterCaminhoBaseDoSite();
    const pagina = obterPaginaAtual();

    const pastaIdioma = idioma === "pt"
        ? ""
        : `${idioma}/`;

    const caminhoDestino = `${base}${pastaIdioma}${pagina}`;

    /*
     * Constrói uma URL a partir da origem atual.
     * Também preserva os parâmetros e a âncora existentes.
     */
    const destino = new URL(
        caminhoDestino,
        window.location.origin
    );

    destino.search = window.location.search;
    destino.hash = window.location.hash;

    return destino;
}


/* =========================================================
   TROCA DE IDIOMA
   ========================================================= */

function trocarIdioma(idioma) {
    if (!IDIOMAS.includes(idioma)) {
        return;
    }

    salvarIdioma(idioma);

    const destino = construirDestinoIdioma(idioma);

    if (!destino) {
        return;
    }

    /*
     * Evita recarregar a página se o destino já for a URL atual.
     */
    if (destino.href === window.location.href) {
        atualizarIdiomaAtivo();
        return;
    }

    window.location.assign(destino.href);
}


/* =========================================================
   AJUSTE DOS LINKS INTERNOS
   ========================================================= */

function ajustarLinksIdioma() {
    const idiomaAtual = obterIdiomaDoCaminho();
    const base = obterCaminhoBaseDoSite();

    const links = document.querySelectorAll("a[href]");

    links.forEach((link) => {
        const hrefOriginal = link.getAttribute("href");

        if (!hrefOriginal) {
            return;
        }

        const href = hrefOriginal.trim();

        /*
         * Não altera:
         * - âncoras;
         * - URLs externas;
         * - WhatsApp;
         * - e-mail;
         * - telefone;
         * - links especiais;
         * - arquivos que não sejam páginas conhecidas.
         */
        if (
            href.startsWith("#") ||
            href.startsWith("//") ||
            /^(https?:|mailto:|tel:|javascript:|data:|blob:)/i.test(href)
        ) {
            return;
        }

        let urlDoLink;

        try {
            urlDoLink = new URL(href, window.location.href);
        } catch (erro) {
            return;
        }

        /*
         * Só adapta links que apontam para páginas conhecidas
         * do próprio site.
         */
        const nomeArquivo = urlDoLink.pathname
            .split("/")
            .filter(Boolean)
            .pop();

        if (!PAGINAS_DO_SITE.includes(nomeArquivo)) {
            return;
        }

        /*
         * Evita modificar links para outro domínio ou origem.
         */
        if (urlDoLink.origin !== window.location.origin) {
            return;
        }

        /*
         * Links relativos simples, como "asa-delta.html",
         * são mantidos na pasta do idioma atual.
         *
         * Links que já contêm uma pasta de idioma ou a raiz
         * do projeto são normalizados para o idioma atual.
         */
        const segmentos = urlDoLink.pathname
            .split("/")
            .filter(Boolean);

        const indiceIdioma = segmentos.findIndex((segmento) =>
            IDIOMAS_ALTERNATIVOS.includes(segmento)
        );

        const caminhoBase = obterCaminhoBaseDoSite();

        const caminhoJaNaBase = urlDoLink.pathname.startsWith(caminhoBase);

        if (indiceIdioma !== -1 || caminhoJaNaBase) {
            const pastaIdioma = idiomaAtual === "pt"
                ? ""
                : `${idiomaAtual}/`;

            const caminhoCorrigido =
                `${caminhoBase}${pastaIdioma}${nomeArquivo}`;

            urlDoLink.pathname = caminhoCorrigido;
        } else {
            /*
             * Um link relativo simples já acompanha a pasta
             * atual do idioma e não precisa ser alterado.
             */
            return;
        }

        /*
         * Preserva query string e hash originais do link.
         */
        link.setAttribute(
            "href",
            `${urlDoLink.pathname}${urlDoLink.search}${urlDoLink.hash}`
        );
    });
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

function inicializarSistemaIdiomas() {
    atualizarIdiomaAtivo();

    ajustarLinksIdioma();

    document.querySelectorAll("[data-idioma]").forEach((botao) => {
        /*
         * Evita que um botão sem tipo explícito envie um formulário.
         */
        if (botao.tagName === "BUTTON" && !botao.hasAttribute("type")) {
            botao.setAttribute("type", "button");
        }

        botao.addEventListener("click", () => {
            trocarIdioma(botao.dataset.idioma);
        });
    });
}


/*
 * Funciona tanto quando o script carrega antes do HTML
 * quanto quando é carregado depois que o documento está pronto.
 */
if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        inicializarSistemaIdiomas,
        { once: true }
    );
} else {
    inicializarSistemaIdiomas();
}
