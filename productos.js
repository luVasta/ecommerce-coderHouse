class Producto {
    constructor (codigo, nombre, varietal, descripcion, precio, stock, imagen){
        this.codigo = codigo;
        this.nombre = nombre;
        this.varietal = varietal;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.vendido = false;    
    };
    vender() {
        if (this.stock > 0) {
            this.stock--;
            this.vendido = true;
        };
    };
};

let productos = [];

let producto1 = new Producto(
    1, 
    "Alma Mora",
    "Cabernet Sauvignon", 
    "De color violáceo intenso. Sabor a frutas negras como moras, cassis y notas a eucalipto. Textura suave y final especiado.", 
    1900, 
    60,
    "https://www.espaciovino.com.ar/media/default/0001/55/thumb_54030_default_big.jpeg"
);

let producto2 = new Producto(
    2, 
    "Emilia", 
    "Red Blend", 
    "Amable con una estructura entregada por la delicadeza de sus taninos.", 
    2300, 
    54,
    "https://inspiravinoteca.com/web/image/product.template/4967/image_1024?unique=6e529dc"
);

let producto3 = new Producto(
    3, 
    "El Enemigo", 
    "Malbec", 
    "Elegante. En vista un rojo rubí de alta intensidad y destellos violáceos. En nariz mucha madera. Tarda en abrirse en copa y luego del agite aparece fruta roja madura.",
    8500,
    30,
    "https://acdn.mitiendanube.com/stores/001/211/660/products/enemigo-mal-21-15038ea6a73501dabc16800231118621-640-0.png"
);

let producto4 = new Producto(
    4,
    "Trumpeter",
    "Cabernet Franc",
    "En nariz, expresa aromas a frutas rojas maduras y suaves notas mentoladas, finamente mezclados con otros aportados por el roble (cacao, tabaco, vainilla). Su manifiesta tipicidad deja percibir sabores que evocan ciruelas y especias como pimienta rosa, aguaribay.",
    5500,
    48,
    "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62976_default_big.jpeg"
);

let producto5 = new Producto(
    5,
    "Aguijon de Abeja Reina",
    "Malbec",
    "De origen protagónico proviene de San Patricio del Chañar, Neuquén y ofrece buena estructura y concentración. Con aromas a frutos rojos propios del sur como cassis, guinda y arándanos, también combina tabaco y chocolate blanco, con taninos persistentes que armonizan con la acidez y permite un paso en boca aterciopelado.",
    4900,
    54,
    "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63735_default_medium.jpeg"
);

let producto6 = new Producto(
    6,
    "Toro Viejo",
    "Borgoña",
    "Un clasico argentino y bien baratito.",
    900,
    120,
    "https://www.supermercadoacuario.com.ar/app/files/company_35/products/62134_7790314000966.jpg"
);

let producto7 = new Producto(
    7,
    "Santa Julia",
    "Cosecha Tardia",
    "De color amarillo dorado de intensidad media. En nariz fragante con aromas a flores y frutas maduras como pera, durazno, damasco y notas de miel y piel de naranja.",
    2200,
    72,
    "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61639_default_medium.jpeg"
);

let producto8 = new Producto(
    8,
    "Durigutti",
    "Petit Verdot",
    "Con origen en Barrancas, Maipú, combina color, aroma y un perfil dulce en boca, buenos taninos, volumen y mineralidad. Duerme 8 meses en barricas americanas.",
    7600,
    48,
    "https://http2.mlstatic.com/D_NQ_NP_600683-MLA47052565860_082021-O.webp"
);

let producto9 = new Producto(
    9,
    "Las Perdices",
    "Malbec Rosé",
    "A la vista de color rosa tenue, muy atractivo y brillante. En boca tiene una entrada agradable y con buen volumen. Provoca cierta sensación cítrica debido a su equilibrada acidez. También se destacan notas de cereza, guinda y frutilla. Ideal como aperitivo, para acompañar quesos blandos y diversas entradas, también sushi o pescados a la parrilla.",
    5900,
    24,
    "https://www.lasperdices.com/img/product/40-exploracion-malbec-rose.jpg"
);

let producto10 = new Producto(
    10,
    "La Poderosa",
    "Extra Brut",
    "A la vista tiene un aspecto brillante con destellos cobrizos, dando origen a un elegante Extra Brut de finas burbujas que se reflejan en una corona persistente. Posee un aroma a flores blancas y cítricos, con delicadas notas a pan tostado. El efecto en boca es refrescante y su acidez representa la tipicidad de los espumantes patagónicos.",
    3900,
    60,
    "https://borrachines.com.ar/wp-content/uploads/2022/09/La-Poderosa-Vino-Espumante-Extra-Brut-01-Mercado.png"
);

productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10);