const IDIOMAS = ["pt", "en", "es"];
const PAGINAS_DO_SITE = ["index.html", "asa-delta.html", "parapente.html"];
const CHAVE_IDIOMA = "idioma";

function salvarIdioma(idioma) {
    if (IDIOMAS.includes(idioma)) {
        localStorage.setItem(CHAVE_IDIOMA, idioma);
    }
}

function idiomaDaPagina() {
    const partes = window.location.pathname.split("/").filter(Boolean);
    const possivelIdioma = partes.length >= 2 ? partes[partes.length - 2] : "pt";

    return IDIOMAS.includes(possivelIdioma) ? possivelIdioma : "pt";
}

function atualizarIdiomaAtivo() {
    const idiomaAtual = idiomaDaPagina();

    document.querySelectorAll("[data-idioma]").forEach((botao) => {
        botao.classList.remove("idioma-ativo");
    });

    const botaoAtual = document.querySelector(
        `[data-idioma="${idiomaAtual}"]`
    );

    if (botaoAtual) {
        botaoAtual.classList.add("idioma-ativo");
    }
}

function paginaAtual() {
    const nome = window.location.pathname.split("/").pop();
    return PAGINAS_DO_SITE.includes(nome) ? nome : "index.html";
}

function trocarIdioma(idioma) {
    if (!IDIOMAS.includes(idioma)) {
        return;
    }

    salvarIdioma(idioma);

    const pagina = paginaAtual();
    const destino = idioma === "pt"
        ? pagina
        : `${idioma}/${pagina}`;

    window.location.href = destino;
}

function ajustarLinksIdioma() {
    document.querySelectorAll("a[href]").forEach((link) => {
        const destinoOriginal = link.getAttribute("href");

        if (!destinoOriginal) {
            return;
        }

        if (
            destinoOriginal.startsWith("#") ||
            destinoOriginal.startsWith("http://") ||
            destinoOriginal.startsWith("https://") ||
            destinoOriginal.startsWith("//") ||
            destinoOriginal.startsWith("mailto:") ||
            destinoOriginal.startsWith("tel:")
        ) {
            return;
        }

        const [caminhoOriginal, sufixo = ""] =
            destinoOriginal.split(/(?=[?#])/);

        const pagina = caminhoOriginal.split("/").pop();

        if (!PAGINAS_DO_SITE.includes(pagina)) {
            return;
        }

        link.setAttribute("href", pagina + sufixo);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarIdiomaAtivo();
    ajustarLinksIdioma();

    document.querySelectorAll("[data-idioma]").forEach((botao) => {
        botao.addEventListener("click", () => {
            trocarIdioma(botao.dataset.idioma);
        });
    });
});
