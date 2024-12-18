$w.onReady(function () {
    $w('#dropTipo').onChange(dropTipo_change);
    $w('#dropCategoria').onChange(dropCategoria_change);
    $w('#dropSubCategoria').onChange(dropSubCategoria_change);

    $w('#boxCategoria').collapse();
    $w('#boxSubCategoria').collapse();

    $w('#boxDescricaoTipo').collapse();
    $w('#boxDescricaoCategoria').collapse();

    $w('#tabelaProdutos').collapse();
})

export function dropTipo_change(event) {
    let tipoSelecionado = $w('#dropTipo').value;

    let dropCategoria = $w('#dropCategoria');
    let boxCategoria = $w('#boxCategoria');

    let boxSubCategoria = $w('#boxSubCategoria');

    let boxDescricaoTipo = $w('#boxDescricaoTipo');
    let titulo = $w('#txtTitle');
    let descricao = $w('#txtDesc');

    let tabela = $w('#tabelaProdutos');

    let Tipo = {
        "Núcleo": {
            nome: "Núcleo",
            desc: "Produto que contêm macro e micro mineral, podendo conter ou não vitaminas e aditivos, não podendo ser fornecido diretamente ao animal. Sua associação a outros ingredientes, em proporção adequada, constitui uma dieta completa."
        },
        "Ração": {
            nome: "Ração",
            desc: "Produto composto por ingredientes, macro e micro mineral, podendo conter ou não vitaminas e aditivos, pronto para o fornecimento ao animal, que seja capaz de atender as exigências nutricionais dos animais que se destina."
        },
        "Mineral": {
            nome: "Mineral",
            desc: "Produto que contêm macro e micro mineral, podendo conter ou não Proteína Bruta (PB), vitaminas e aditivos que deve ser fornecido diretamente aos animais ou serem indicadas para diluição em sal comum, para melhorar o balanço nutricional."
        },
        "Concentrado": { 
            nome: "Concentrado",
            desc: "Produto que contêm macro e micro mineral, podendo conter ou não Proteína Bruta (PB), vitaminas e aditivos, que associado a outros ingredientes, em proporções adequadas, constitui uma ração."
        }
    };

    if (tipoSelecionado in Tipo) {
        titulo.text = Tipo[tipoSelecionado].nome;
        descricao.text = Tipo[tipoSelecionado].desc;

        boxDescricaoTipo.expand();
        tabela.expand();
    } else if (tipoSelecionado === "RESET_ALL") {
        boxDescricaoTipo.collapse();
        tabela.expand();
    } else {
        boxDescricaoTipo.collapse();
        tabela.collapse();
    }

    if (tipoSelecionado === "Mineral") {
        boxCategoria.expand();
        dropCategoria.value = null;
        boxDescricaoTipo.expand();
        tabela.expand();
    } else {
        boxCategoria.collapse();
        boxSubCategoria.collapse();
    }
}

export function dropCategoria_change(event) {
    let tipoSelecionado = $w('#dropCategoria').value;

    let dropSubCategoria = $w('#dropSubCategoria');
    let boxSubCategoria = $w('#boxSubCategoria');
    dropSubCategoria.value = null;

    let boxDescricaoTipo = $w('#boxDescricaoTipo');
    let titulo = $w('#txtTitle');
    let descricao = $w('#txtDesc');

    let tabela = $w('#tabelaProdutos');

    let Categoria = {
        "Mistura": {
            nome: "Suplemento Mineral para Mistura",
            desc: "Fazer a inclusão de sal comum, em proporções adequadas, para então ser fornecida ao animal que se destina."
        },
        "Pronto Uso": {
            nome: "Suplemento Mineral de Pronto Uso",
            desc: "Fornecer diretamente ao animal que se destina."
        }
    };

    if (tipoSelecionado in Categoria) {
        titulo.text = Categoria[tipoSelecionado].nome;
        descricao.text = Categoria[tipoSelecionado].desc;

        boxSubCategoria.collapse();
        boxDescricaoTipo.expand();
        tabela.expand();
    } if (tipoSelecionado === "RESET_ALL") {
        titulo.text = "Mineral";
        descricao.text = "Produto que contêm macro e micro mineral, podendo conter ou não Proteína Bruta (PB), vitaminas e aditivos que deve ser fornecido diretamente aos animais ou serem indicadas para diluição em sal comum, para melhorar o balanço nutricional.";
        boxDescricaoTipo.expand();
    }

    if (tipoSelecionado === "Pronto Uso") {
        boxSubCategoria.expand();
        dropSubCategoria.value = null;
        boxDescricaoTipo.expand();
        tabela.expand();
    } else {
        boxSubCategoria.collapse();
    }
}

export function dropSubCategoria_change(event) {
    let tipoSelecionado = $w('#dropSubCategoria').value;

    let boxDescricaoTipo = $w('#boxDescricaoTipo');
    let titulo = $w('#txtTitle');
    let descricao = $w('#txtDesc');

    let boxDescricaoCategoria = $w('#boxDescricaoCategoria');
    let titulo2 = $w('#txtNome2');
    let descricao2 = $w('#txtDesc2');

    let tabela = $w('#tabelaProdutos');

    let SubCategoria = {
        "Linha Branca": {
            nome: "Linha Branca",
            descricao: "Produto que contêm na sua formulação, macro e micro mineral, podendo conter ou não vitaminas, e aditivos."
        },
        "Ureado": {
            nome: "Ureado",
            descricao: "Produto que contêm na sua formulação macro e micro minerais e uréia (Nitrogênio Não Proteico), podendo conter ou não vitaminas e aditivos."
        },
        "Protéico e Energético": {
            nome: "Protéico",
            descricao: "Produto que contém na sua formulação quantidade mínima de 30% de Proteína Bruta, macro e micro minerais, podendo contér ou não vitaminas e aditivos.",
            nome2: "Energético",
            descricao2: "Produto que contêm na sua formulação quantidade máxima de 29% de Proteína Bruta, mínimo de 10% de NDT (nutriente digestivo total), macro e micro minerais, podendo conter ou não vitaminas e aditivos."
        }
    };

    if (tipoSelecionado in SubCategoria) {
        titulo.text = SubCategoria[tipoSelecionado].nome;
        descricao.text = SubCategoria[tipoSelecionado].descricao;
        titulo2.text = SubCategoria[tipoSelecionado].nome2;
        descricao2.text = SubCategoria[tipoSelecionado].descricao2;

        boxDescricaoTipo.expand();
        tabela.expand();
    }
    
    if (tipoSelecionado === "RESET_ALL") {
        titulo.text = "Suplemento Mineral de Pronto Uso"
        descricao.text = "Fornecer diretamente ao animal que se destina.";
    }
    
    if (tipoSelecionado === "Protéico e Energético") {
        boxDescricaoTipo.expand();
        boxDescricaoCategoria.expand();
        tabela.expand();
    } else {
        boxDescricaoCategoria.collapse();
    }
}