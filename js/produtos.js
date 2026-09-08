// ⚙️ MENU MOBILE — Página de Produtos

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

menuToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', String(isHidden));
});


// 🛍️ PRODUTOS
//
// PARA ADICIONAR UM NOVO PRODUTO:
// Basta copiar um dos blocos { ... } abaixo e colar antes do "];" no final da lista,
// preenchendo com os dados do novo item. Nada mais precisa ser alterado —
// o card é criado automaticamente pela função criarCardProduto() logo em seguida.
//
// Campos:
// - nome:      nome do produto (texto)
// - preco:     preço já formatado, ex: "R$ 89,90"
// - categoria: rótulo curto mostrado no card, ex: "Camiseta", "Boné", "Acessório"
// - imagem:    caminho/URL da imagem do produto (deixe "" para usar um bloco de cor no lugar da foto)
// - cor:       cor de destaque do card, uma de: "laranja", "roxo", "verde", "amarelo"
// - link:      link do produto individual (opcional, use "#" se ainda não existir)

const products = [
    {
        nome: "Camiseta Todas as Cores",
        preco: "R$ 89,90",
        categoria: "Camiseta",
        imagem: "",
        cor: "laranja",
        link: "#"
    },
    {
        nome: "Boné Orgulho Bordado",
        preco: "R$ 69,90",
        categoria: "Boné",
        imagem: "",
        cor: "roxo",
        link: "#"
    },
    {
        nome: "Tote Bag Manifesto",
        preco: "R$ 54,90",
        categoria: "Acessório",
        imagem: "",
        cor: "verde",
        link: "#"
    },
    {
        nome: "Camiseta Corpo Livre",
        preco: "R$ 89,90",
        categoria: "Camiseta",
        imagem: "",
        cor: "amarelo",
        link: "#"
    },
    {
        nome: "Pin Set Identidade",
        preco: "R$ 39,90",
        categoria: "Acessório",
        imagem: "",
        cor: "laranja",
        link: "#"
    },
    {
        nome: "Moletom Todas as Mentes",
        preco: "R$ 159,90",
        categoria: "Moletom",
        imagem: "",
        cor: "roxo",
        link: "#"
    }
    // 👆 Adicione novos produtos aqui, seguindo o mesmo formato
];

// Cores de destaque disponíveis para os cards (tons sólidos, sem gradiente)
const paletas = {
    laranja: { texto: "text-[#FF8B6B]", borda: "hover:border-[#FF5A3C]", fundo: "bg-[#FF5A3C]" },
    roxo: { texto: "text-[#8B5CF6]", borda: "hover:border-[#8B5CF6]", fundo: "bg-[#8B5CF6]" },
    verde: { texto: "text-[#14B8A6]", borda: "hover:border-[#14B8A6]", fundo: "bg-[#14B8A6]" },
    amarelo: { texto: "text-[#FFC145]", borda: "hover:border-[#FFC145]", fundo: "bg-[#FFC145]" }
};

function criarCardProduto(produto) {
    const paleta = paletas[produto.cor] || paletas.laranja;

    const imagemHtml = produto.imagem
        ? `<img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-full object-cover">`
        : `<div class="w-full h-full ${paleta.fundo} flex items-center justify-center">
               <span class="text-white font-black uppercase text-xs tracking-widest opacity-70">Foto do produto</span>
           </div>`;

    const card = document.createElement('a');
    card.href = produto.link || "#";
    card.className = `group bg-white rounded-3xl border-2 border-stone-200 ${paleta.borda} overflow-hidden flex flex-col transition-colors duration-300`;

    card.innerHTML = `
        <div class="w-full aspect-square overflow-hidden">
            ${imagemHtml}
        </div>
        <div class="p-6 flex flex-col gap-2 flex-1">
            <p class="text-[10px] font-mono uppercase tracking-widest ${paleta.texto}">${produto.categoria}</p>
            <h3 class="text-lg font-black uppercase tracking-tight leading-snug">${produto.nome}</h3>
            <div class="mt-auto flex items-center justify-between pt-4">
                <span class="font-bold text-base">${produto.preco}</span>
                <span class="text-xs font-bold uppercase tracking-wider border-b-2 border-transparent group-hover:border-black pb-1 transition-colors">
                    Ver produto
                </span>
            </div>
        </div>
    `;

    return card;
}

const grid = document.getElementById('produtos-grid');
products.forEach(produto => {
    grid.appendChild(criarCardProduto(produto));
});