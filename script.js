// Lista inicial de nomes
let nomes = [
    "João",
    "Maria",
    "Fernanda",
    "Alexandre",
    "Pedro",
    "Beatriz",
    "Gabriela"
];

// Função para exibir a lista no HTML
function mostrarLista(lista = nomes) {
    const ul = document.getElementById("listaNomes");
    ul.innerHTML = "";

    lista.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

// ATV 2 - Adicionar nome ao final
function adicionarFinal() {
    const novoNome = prompt("Digite um nome:");
    if (novoNome) {
        nomes.push(novoNome);
        mostrarLista();
    }
}

// ATV 2 - Adicionar no início
function adicionarInicio() {
    const novoNome = prompt("Digite um nome:");
    if (novoNome) {
        nomes.unshift(novoNome);
        mostrarLista();
    }
}

// ATV 2 - Remover último
function removerUltimo() {
    nomes.pop();
    mostrarLista();
}

// ATV 2 - Remover primeiro
function removerPrimeiro() {
    nomes.shift();
    mostrarLista();
}

// ATV 3 - Contar nomes com mais de 5 letras
function contarNomesLongos() {
    let contador = 0;

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].length > 5) {
            contador++;
        }
    }

    document.getElementById("resultado").textContent =
        `Existem ${contador} nomes com mais de 5 letras.`;
}

// ATV 4 - Reescrever usando forEach e mostrar em maiúsculo
function mostrarMaiusculosForEach() {
    let listaMaiuscula = [];

    nomes.forEach(nome => {
        listaMaiuscula.push(nome.toUpperCase());
    });

    mostrarLista(listaMaiuscula);

    document.getElementById("resultado").textContent =
        "Nomes exibidos em maiúsculo usando forEach.";
}

// ATV 5 - Filter
function filtrarNomesLongos() {
    const filtrados = nomes.filter(nome => nome.length > 5);

    mostrarLista(filtrados);

    document.getElementById("resultado").textContent =
        "Mostrando apenas nomes com mais de 5 letras.";
}

// ATV 5 - Map
function mapearMaiusculos() {
    const maiusculos = nomes.map(nome => nome.toUpperCase());

    mostrarLista(maiusculos);

    document.getElementById("resultado").textContent =
        "Todos os nomes transformados em maiúsculo com map.";
}

// Mostrar lista original
function mostrarListaOriginal() {
    mostrarLista();

    document.getElementById("resultado").textContent =
        "Lista original restaurada.";
}

// Exibe a lista ao carregar a página
mostrarLista();
