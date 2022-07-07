import { ObjectId } from 'mongodb';

const categories = [
  { name: 'Notebooks & Acessórios', icon: 'notebook' },
  { name: 'Gamer', icon: 'gamer' },
  { name: 'Acessórios Gerais', icon: 'acessories' },
  { name: 'Celulares & Acessórios', icon: 'cellphone' },
  { name: 'Câmera e Foto', icon: 'camera' },
  { name: 'Televisão e Acessórios', icon: 'television' },
];

const products = [
  {
    name: 'Xiaomi Redmi Note 11 (cinza grafite)',
    description:
      'A série Redmi Note 11 chega com desempenho de campeão e pronto para qualquer desafio. O processador Qualcomm Snapdragon 680 Octa-core é rápido, poderoso e gerencia a eficiência energética para aprimorar a vida útil da bateria de 5000mAh, O design industrial moderno com textura agradável ao toque, garante uma pegada confortável e muito estilo. Leve, minimalista e com moldura plana você carrega o seu Redmi Note 11 no bolso sem notar o peso.',
    price: 1410.9,
    image: 'https://m.media-amazon.com/images/I/51e3KdrHuCL._AC_SX522_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5')],
    tags: ['celular', 'xiaomi', 'redmi'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Suporte de mesa para celular ajustável e articulado (preto)',
    description:
      'O porta-telefone para mesa mantém seu dispositivo convenientemente posicionado em pé em uma variedade de superfície. Perfeito para o trabalho em casa, cozinha e ao redor da casa. Basta uma rápida olhada e você pode facilmente verificar mensagens, atender chamadas, navegar na web e até mesmo ler receitas.',
    price: 21.9,
    image: 'https://m.media-amazon.com/images/I/51SCGooIhDL._AC_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5'), new ObjectId('62c6b6cb60a53700fdb64bd4')],
    tags: ['celular', 'suporte'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Carregador de tomada c/2 saídas USB bivolt Geonav (branco) ',
    description:
      'Cabo que conecta seu smartphone, tablet à porta USB do computador para recarga e sincronização de forma eficiente. Pode ser conectado ao Carregador Veicular e de Parede Universal ELG para recarregas práticas e rápidas. Conta com duas saídas: uma USB-C Power Delivery 20 W e outra USB Quick Charge 18W para carregamento rápido.',
    price: 75.9,
    image: 'https://m.media-amazon.com/images/I/61Beu3N5XfL._AC_SX522_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5'), new ObjectId('62c6b6cb60a53700fdb64bd4')],
    tags: ['celular', 'carregador'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Apple iPhone 13 128 GB (meia-noite)',
    description:
      'Conta com o sistema de câmera dupla mais avançado em um iPhone, um chip A15 Bionic com velocidade impressionante, além de um grande salto em bateria, design resistente e 5G ultrarrápido.',
    price: 5290.9,
    image: 'https://m.media-amazon.com/images/I/61H-DMmO+SL._AC_SX679_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5')],
    tags: ['celular', 'iphone', 'apple'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Xiaomi Redmi Note 11S (cinza grafite)',
    description:
      'O Redmi Note 11S traz pra nova série de smartphones da Xiaomi o S de superioridade. O conjunto de 4 câmeras IA tem como protagonista a câmera de 108MP equipada com um sensor de imagem de 1/1,52 para imagens ultra nítidas impressionantes, além do ISO nativo que reduz ruídos e pixel 9 em 1 que garante excelentes imagens em qualquer iluminação.',
    price: 1511.9,
    image: 'https://th.bing.com/th/id/OIP.vJsPRdqFGnwG4aKKuFJhKQHaHa?pid=ImgDet&rs=1',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5')],
    tags: ['celular', 'xiaomi', 'redmi'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Xiaomi Smartphone Poco F3 (preto)',
    description:
      'O smartphone Xiaomi Poco F3 traz o novo Snapdragon 870 ao lado de outras especificações potentes para entregar um bom custo-benefício na categoria topo de linha, oferecendo ainda outros diferenciais como tela AMOLED de 120 Hz e câmera tripla de 48 megapixels.',
    price: 1590.9,
    image: 'https://th.bing.com/th/id/R.1171a89fcc72da35ac5494e579ff5c8d?rik=4IrE%2ftVWuxuxNQ&pid=ImgRaw&r=0',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5')],
    tags: ['celular', 'xiaomi', 'poco'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Smartphone Samsung Galaxy A22 (branco)',
    description:
      'O smartphone Samsung Galaxy A22 5G conta com processador de alta performance, 128GB 4GB RAM + até 4GB RAM Plus.',
    price: 1290.9,
    image: 'https://th.bing.com/th/id/OIP.kuXsprZO2SjsjqpQ-79JDgHaHa?pid=ImgDet&rs=1',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5')],
    tags: ['celular', 'samsung', 'galaxy'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Xiaomi Smart Mi Band 6',
    description:
      'O display AMOLED, 49% maior que a tela da Mi Smart Band 5, aliado à alta resolução de 326 PPI, oferece mais espaço para visualizar seus dados, mensagens de texto, ligações, notificações no alcance do seu pulso.',
    price: 258.9,
    image: 'https://th.bing.com/th/id/OIP.VAzWFFL0gMT7dJtxk8isrgHaK5?pid=ImgDet&rs=1',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5'), new ObjectId('62c6b6cb60a53700fdb64bd4')],
    tags: ['celular', 'acessorio', 'xiaomi', 'smartband', 'miband'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Apple Watch Series 3 (GPS) (branca)',
    description:
      'Monitore sua frequência cardíaca e receba notificações se ela estiver muito alta ou baixa. Calcule seus exercícios, acompanhe e compartilhe suas atividades com os amigos. Atenda ligações, envie e receba mensagens e escute suas músicas favoritas no Apple Music. Com o Apple Watch Series 3, você faz tudo direto do seu pulso.',
    price: 1687.9,
    image: 'https://m.media-amazon.com/images/I/511KyqqmhsL._AC_SX679_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5'), new ObjectId('62c6b6cb60a53700fdb64bd4')],
    tags: ['celular', 'acessorio', 'apple', 'watch'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Xiaomi Redmi 9A (cinza)',
    description:
      'Tenha em suas mãos um smartphone que ofereça mais tela e mais bateria! O Redmi 9A da Xiaomi produz fotos com alta qualidade, pois oferece uma câmera de 13 megapixels na parte de trás do aparelho, permitindo que você eternize qualquer momento especial.',
    price: 671.9,
    image: 'https://th.bing.com/th/id/OIP.F6inmNqZCYlErv7K8p34EQHaHa?pid=ImgDet&rs=1',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd5')],
    tags: ['celular', 'xiaomi', 'redmi'],
    initialStock: 5,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Canon EOS Rebel T7 Ef-S 18-55 F/3.5-5.6 Is II (preta)',
    description:
      'Dê os seus primeiros passos na fotografia e comece a contar suas histórias com a DSLR EOS Rebel T7+ e a lente zoom compacta EF-S 18-55mm IS II. Esta câmera de utilização fácil e intuitiva é indicada para principiantes e entusiastas.',
    price: 4382.9,
    image: 'https://m.media-amazon.com/images/I/712DNWFqmyL._AC_SX679_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd6')],
    tags: ['câmera', 'canon'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Câmera Instantânea Instax Mini 9, Fujifilm (branco gelo)',
    description:
      'Uma câmera instantânea divertida e fácil de manusear. Compartilhe emoções, carregue na bolsa ou mochila e mostre a todos que a vida é cheia de momentos felizes. Ideal para festas, eventos de família, casamentos, eventos escolares, férias e scrapbook.',
    price: 559.9,
    image: 'https://m.media-amazon.com/images/I/91higCtCSyL._AC_SX679_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd6')],
    tags: ['câmera', 'fujifilm'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Xiaomi Mijia Wifi 360 Versão 2K',
    description:
      'Saiba o que acontece em sua casa, mesmo quando você não está. A Mi Home Security 360° com resolução de 1080p, possui motor duplo silencioso que atinge um campo de visão horizontal de 360° e vertical de 96°, assim você tem a sua casa inteira protegida o tempo todo.',
    price: 341.9,
    image: 'https://th.bing.com/th/id/OIP.j8GXjws6rojC04NnsGC0NwHaHa?pid=ImgDet&rs=1',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd6')],
    tags: ['câmera', 'mijia', 'segurança'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Nikon Câmera D3500 24MP AF-P 18-55 VR (preta)',
    description:
      'A câmera D3500 da Nikon foi projetada para ser o mais flexível e intuitiva possível, ao mesmo tempo que oferece os recursos de imagem que você espera de uma dslr.',
    price: 6120.9,
    image:
      'https://pcstock.com.py/shop/wp-content/uploads/2018/12/CAMARA-NIKON-D3500-24MP-AF-P-18-55-VR-BLACK-1024x1024.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd6')],
    tags: ['câmera', 'nikon'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'ELSYS Câmera de Segurança Wifi Rotacional Interna ESC-WR2',
    description:
      'A câmera de segurança Wi-Fi rotacional interna Elsys permite um monitoramento fácil e descomplicado. Já pensou saber tudo o que seu PET faz quando você está fora? Também é ideal para uso como babá eletrônica, pois ela envia notificação de movimento e você poderá ver e ouvir o ambiente. Com um design elegante e compacto, ela irá ajudá-lo a capturar a imagem certa que você está procurando!',
    price: 453.9,
    image: 'https://m.media-amazon.com/images/I/51i3-9xGZPL._AC_SX679_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd6')],
    tags: ['câmera', 'elsys', 'segurança'],
    initialStock: 5,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Smart TV LED 32 HD AOC ROKU',
    description:
      'A AOC Roku TV disponibiliza muitos filmes, seriados e programas em uma interface simples e intuitiva a partir do momento em que você liga a sua TV, direto na tela inicial!',
    price: 1256.9,
    image: 'https://th.bing.com/th/id/OIP.coFWUTRYkpqK0TAA5QDZFAHaHa?pid=ImgDet&rs=1',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd7')],
    tags: ['tv', 'televisão', 'smart', 'aoc'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Samsung Smart TV 50 Uhd 4K',
    description:
      'Se você procura uma TV para assistir filmes, séries, novelas e até mesmo jogar seus games favoritos com a melhor qualidade possível, a Smart TV UN50AU7700GXZD da Samsung é o modelo ideal para a sua casa! Ela possui tela de 50 Crystal 4K com painel VA, oferecendo cores vivas e imagens impressionantes de qualquer ângulo.',
    price: 2478.9,
    image:
      'https://www.wayfaith.com/wp-content/uploads/2019/01/SAMSUNG-5022-Class-4K-2160P-UHD-Smart-LED-TV-UN50NU6900-2018-Model-p5.jpeg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd7')],
    tags: ['tv', 'televisão', 'smart', 'samsung'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Samsung Smart TV 43 Crystal UHD 4K',
    description:
      'Desfrute de uma imagem mais natural e detalhada com essa tecnologia inovadora, que analisa as regiões da tela e ajusta automaticamente o contraste.',
    price: 2700.9,
    image:
      'https://lojaibyte.vteximg.com.br/arquivos/ids/219345-1200-1200/smart-tv-samsung-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-01-min.jpg?v=637598793723870000',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd7')],
    tags: ['tv', 'televisão', 'smart', 'samsung'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Fire TV Stick Lite | Streaming em Full HD com Alexa',
    description:
      'O novo adaptador de streaming de video da Amazon está vindo com tudo, este Amazon fire Stick Lite é perfeito para você que deseja desfrutar de uma série em Full HD com qualidade de cinema, este Fire Stick Lite possui alexa com comandos por voz.',
    price: 278.9,
    image: 'https://m.media-amazon.com/images/I/41yI07Cs9UL._AC_SX679_.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd7'), new ObjectId('62c6b6cb60a53700fdb64bd4')],
    tags: ['tv', 'televisão', 'acessorio', 'streaming'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Roku Express | Streaming em Full HD',
    description:
      'Roku Express é um dispositivo fácil de usar e com acesso a milhares de canais para você curtir streaming em Full HD. A configuração é descomplicada e ainda inclui um cabo HDMI de alta velocidade. Com este dispositivo compacto e avançado você fará streaming do seu conteúdo favorito com facilidade.',
    price: 234.9,
    image:
      'https://img.kalunga.com.br/fotosdeprodutos/608947z_3.jpg?_ga=2.39412963.1501899417.1657100897-1102162185.1657100897',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd7'), new ObjectId('62c6b6cb60a53700fdb64bd4')],
    tags: ['tv', 'televisão', 'acessorio', 'streaming'],
    initialStock: 5,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook Asus Vivobook 15 X513A',
    description:
      'Notebook Asus 15 X513A conta com um processador Intel Core i5 de 11ª geração, tela de 15,6 FHD nível IPS, 8 GB de RAM e 512 GB SSD. Sistema operacional: Windows 11 Home.',
    price: 3779.99,
    image:
      'https://br.store.asus.com/media/catalog/product/cache/80ca4d3b08020b5abcd9abd5d305c273/v/i/vivobook15_x513_black_13__2.png',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2')],
    tags: ['notebook', 'asus', 'vivobook'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook ROG Zephyrus G14 GA401',
    description:
      'Notebook ROG Zephyrus G14 é recomendado para aqueles que procuram alto desempenho nos games e tarefas do dia-a-dia. Equipado com a GeForce RTX™ 2060 e o processador AMD Ryzen™ 9 4900HS 3.0 GHz.',
    price: 11690.1,
    image:
      'https://br.store.asus.com/media/catalog/product/cache/80ca4d3b08020b5abcd9abd5d305c273/r/o/rog-g14_black_34.png',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['notebook', 'asus', 'rog', 'zephyrus', 'amd', 'gamer'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook Gamer Aspire Nitro 5 i5 8GB 512GB',
    description:
      'O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Windows 10 Home, GeForce® GTX 1650, tela 17.3 IPS FHD.',
    price: 5490.99,
    image:
      'https://acerstore.vtexassets.com/arquivos/ids/159229-800-auto?v=637684482896000000&width=800&height=auto&aspect=true',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['notebook', 'gamer', 'acer', 'aspire', 'nitro'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook Gamer Predator Helios 300',
    description:
      'O notebook gamer Predator Helios 300 carrega linhas agressivas e uma configuração que impõe respeito em qualquer competição. Windows 11 Home, i7-11800H, 16 GB RAM, 512 GB SSD, Nvidia® GeForce® RTX 3070.',
    price: 10569.55,
    image:
      'https://acerstore.vtexassets.com/arquivos/ids/160630-800-auto?v=637878021379500000&width=800&height=auto&aspect=true',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['notebook', 'gamer', 'acer', 'predator', 'helios'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook Acer Aspire 5',
    description:
      'Os notebooks da linha Aspire 5 são convenientemente portáteis e elegantes para acompanhar suas tarefas do dia a dia. Windows 11 Home, Intel® Core™ i5 de 11ª geração, 512 GB SSD, 8GB RAM.',
    price: 3599.9,
    image:
      'https://acerstore.vtexassets.com/arquivos/ids/159855-800-auto?v=637735690062130000&width=800&height=auto&aspect=true',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2')],
    tags: ['notebook', 'acer', 'aspire'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook Acer Aspire 3',
    description:
      'Desenvolvido para não deixar você parar, o Aspire 3 tem a tecnologia que acompanha seu estilo de vida. Equipado com o processador Intel® Celeron® N4020 Serie N, estudar, trabalhar e se divertir ficam mais fáceis. Windows 10 Home, 128 GB SSD, 4GB RAM.',
    price: 2999.0,
    image:
      'https://acerstore.vtexassets.com/arquivos/ids/160550-800-auto?v=637874646050100000&width=800&height=auto&aspect=true',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2')],
    tags: ['notebook', 'acer', 'aspire'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook ASUS Zenbook Pro Duo 15 OLED Azul Celestial',
    description:
      'O Zenbook Pro Duo 15 OLED permite que você faça as coisas com estilo: com calma, eficiência e sem complicações. É o seu companheiro poderoso e elegante para produtividade e criatividade em todos os momentos, com uma incrível tela OLED FHD HDR sensível ao toque. Windows 11 Pro, Intel® Core™ i9, NVIDIA® GeForce RTX™ 3060, 1TB SSD, 32GB RAM.',
    price: 24599.89,
    image:
      'https://br.store.asus.com/media/catalog/product/cache/9203b9106e33cf1dfd4f8b3fbee86935/_/y/_y95ugcglv2wd2rdx.png',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2')],
    tags: ['notebook', 'asus', 'zenbook'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook ASUS E510MA',
    description:
      'A vida é encontrar o equilíbrio certo e o ASUS E510 oferece exatamente isso. Leve e compacto, ele apresenta um novo visual elegante que se adapta perfeitamente ao seu estilo de vida dinâmico. Projetado para suas tarefas do dia a dia e produtividade.  Intel® Celeron®, 500 GB HD, 4 GB RAM.',
    price: 1899.99,
    image:
      'https://br.store.asus.com/media/catalog/product/cache/9203b9106e33cf1dfd4f8b3fbee86935/a/s/asus-e510_product-photo_1b_peacock-blue-_13_1_1.png',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2')],
    tags: ['notebook', 'asus'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook HP 256 G8',
    description:
      'O laptop HP 256 acompanha os estilos de trabalho móveis com um design fino e leve. A bela tela com seu design de borda estreita e grande relação tela-corpo oferece amplo espaço para trabalho ou transmissão de conteúdo. Windows 10 Home, 256 GB SSD,  4GB RAM, Intel® Core™ i3 de 10ª geração.',
    price: 1679.79,
    image:
      'https://d1x5sfejm3zc3e.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/5/R/5R5B5LA-1_T1643971813.png',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2')],
    tags: ['notebook', 'hp'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Notebook IdeaPad Gaming 3i (15 Intel)',
    description:
      'Equipado com Processador Intel® Core™ de 10ª Geração, placa gráfica dedicada NVIDIA® é ideal para gamers e usuários que precisam de alta performance. Esteja pronto para enfrentar qualquer batalha!',
    price: 5399.9,
    image:
      'https://www.lenovo.com/medias/IdeaPad-Gaming-3i-1.jpg?context=bWFzdGVyfHJvb3R8MzY4MTQzfGltYWdlL2pwZWd8aDc0L2hmMy8xMjkzNDUzMjIwMjUyNi5qcGd8NWE5YzMyZDQxNmY1OGI5Mjg5YTI5Y2UwZWU3NGFmNTc1ZTE1ZDk1NmQzMGQ4MTY4ZmVhODJjOWI3MTg3NmUzZQ',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd2'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['notebook', 'gamer', 'lenovo', 'ideapad'],
    initialStock: 5,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'PC Gamer Completo AMD 6-Core 8GB Radeon R5 SSD 120GB',
    description:
      'Elaborado para quem que deseja iniciar a sua jornada gamer, mas não dispõe do orçamento necessário para adquirir um PC Gamer de alto custo agora. O processador multi core da AMD A6 7480 conta com nada mais que 6 núcleos computacionais, além ae placa de vídeo Radeon R5 de até 2GB. Com o excelente clock de 3.8Ghz, você está com o desempenho que precisa garantido para as suas partidas.',
    price: 3099.79,
    image:
      'https://images-americanas.b2w.io/produtos/2448929408/imagens/pc-gamer-completo-amd-6-core-cpu-3-8ghz-8gb-placa-de-video-radeon-r5-2gb-ssd-120gb-kit-gamer-skill-monitor-hdmi-led-19-5/2448929441_1_xlarge.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['desktop', 'gamer', 'kit', 'teclado', 'mouse', 'monitor', 'amd'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'PC Gamer Skull 3000 i3 8GB RAM SSD 128GB RX 550',
    description:
      'O PC Gamer Skul 3000 conta com um processador i3 de 10ª Geração. Com componentes potentes, desde a fonte até o processador e a placa de vídeo RX 550 4GB, esse sem dúvida é o arsenal que você precisa para conquistar o universo dos games.',
    price: 3549.9,
    image:
      'https://images.kabum.com.br/produtos/fotos/309501/pc-gamer-skul-3000-intel-quad-core-i3-10100f-rgb-amd-radeon-rx-550-8gb-ddr4-ssd-240gb-linux-preto-g4704-120630_1644605124_original.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['desktop', 'gamer', 'skull'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'PC Gamer Concórdia Core i7-10700F Geforce RTX3060 12GB 16GB RAM SSD 500GB',
    description:
      'Cuidadosamente pensado para jogadores de alto nível, o PC Gamer Concórdia possui uma RTX 3060 de 12GB, desempenho além do limite para qualquer tarefa ou jogos mais recentes.',
    price: 7999.9,
    image:
      'https://images.kabum.com.br/produtos/fotos/317876/pc-gamer-concordia-core-i7-10700f-rtx3060-12gb-16gb-ram-ssd-500-branco-32736_1647864173_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['desktop', 'gamer', 'concordia'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Mouse Gamer sem fio Alienware Tri-Mode –AW720M',
    description:
      'Enfrente os campos de batalha usando um mouse gamer sem fio pronto para competir, com 26.000 DPI, design compacto e carregamento rápido com engate magnético.',
    price: 1260.99,
    image:
      'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-trimode-720m-wireless-mouse/assets/mouse-aw720m-bk-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=4291&hei=3022&qlt=100,0&resMode=sharp2&size=4291,3022',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['acessório', 'gamer', 'mouse', 'alienware'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Teclado Gamer mecânico Alienware low profile RGB AW510K',
    description:
      'Um teclado para jogos repleto de recursos e com belíssimo design que oferece teclas programáveis e controle dedicado de volume. Feito para proporcionar o melhor desempenho.',
    price: 1090.99,
    image:
      'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/aw510k/gray/ng/keyboard-alienware-aw510k-campaign-hero-504x350-ng.psd?fmt=jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['acessório', 'gamer', 'teclado', 'alienware'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Mouse Gamer Redragon Nothosaur, 3200DPI, Com LED, Preto - M606',
    description:
      'Um mouse de entrada que atende bem suas necessidades: alie uma pegada confortável, boa performance para jogos e uma bela iluminação em 4 diferentes cores para estilo extra.',
    price: 399.9,
    image: 'https://images.kabum.com.br/produtos/fotos/94007/94007_1513599653_index_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['acessório', 'gamer', 'mouse', 'redragon'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Mouse Gamer Redragon 7200DPI, RGB, Griffin - M607',
    description:
      'O mouse de jogo vai oferecer a você a possibilidade de fazer a diferença e tirar proveito dos seus jogos. Sua conectividade e sensor suave ajudarão a você se mover rapidamente pela tela.',
    price: 299.99,
    image: 'https://images.kabum.com.br/produtos/fotos/97199/97199_1529939904_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['acessório', 'gamer', 'mouse', 'redragon'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Combo Teclado e Mouse sem fio Logitech MK220 com Design Compacto',
    description:
      'O teclado é cerca de 36% menor do que os teclados padrão, e ainda assim possui layout ABNT2. Possui conexão sem fio confiável de até 10 metros de distância, praticamente sem atrasos ou interrupções. O MK220 combina perfeitamente com a sua decoração graças ao seu design minimalista.',
    price: 111.9,
    image:
      'https://images.kabum.com.br/produtos/fotos/35799/teclado-e-mouse-logitech-mk220-sem-fio-compacto-preto-abnt2-920-004431_1613650361_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4')],
    tags: ['acessório', 'mouse', 'logitech'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Kit Gamer Redragon - Teclado Mecânico Kumara + Mouse Cobra M711',
    description:
      'Teclado Mecânico Kumara, RGB, Switch Outemu Blue, PT, Branco + Mouse Cobra M711 Redragon Kumara RGB, a linha de Teclados Mecânicos mais vendida em todo o Brasil. Uma união fantástica de Design, Performance e Durabilidade para seu Setup, com o Estilo Redragon que você já ama e conhece.',
    price: 319.9,
    image:
      'https://images.kabum.com.br/produtos/fotos/128031/kit-gamer-redragon-teclado-mecanico-kumara-rgb-switch-outemu-blue-pt-branco-mouse-cobra-m711-chroma-10000dpi-branco-s118w_1600804255_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['acessório', 'gamer', 'kit', 'teclado', 'mouse', 'redragon'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Mousepad Gamer Husky Gaming Storm',
    description:
      'Com o Mousepad Gamer Husky Fire Storm, Speed, Extra Grande, você possui um amplo espaço de ação de 900x290mm que permite a completa fluidez de movimentos e muito mais velocidade para seu mouse.',
    price: 39.9,
    image:
      'https://images.kabum.com.br/produtos/fotos/99472/mousepad-gamer-husky-gaming-storm-fire-speed-extra-grande-900x290mm-mp-hst-fr_1636035454_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['acessório', 'gamer', 'mousepad', 'husky'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Mousepad Fortrek BAP102',
    description:
      'Mouse pad básico com base em E.V.A e superfície em tecido de microfibra para maior durabilidade e melhor contato com a pele sem impedir a rápida a movimentação do mouse.',
    price: 5.9,
    image: 'https://images.kabum.com.br/produtos/fotos/47777/47777_index_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4')],
    tags: ['acessório', 'mousepad', 'fortrek'],
    initialStock: 50,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Kit Gamer Motospeed White Storm Teclado + Mouse + Headset',
    description:
      'Kit Gamer Motospeed White Storm - Teclado Mecânico CK82 RGB Switch Blue ANSI + Headset G750 RGB 7.1 USB + Mouse V50 4000DPI RGB.',
    price: 399.9,
    image:
      'https://images.kabum.com.br/produtos/fotos/143199/kit-gamer-motospeed-branco-teclado-mecanico-ck82-rgb-switch-blue-ansi-headset-g750-rgb-7-1-usb-mouse-v50-4000dpi-rgb-fmscb0110bro_1611866530_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['acessório', 'gamer', 'kit', 'teclado', 'mouse', 'headset', 'motospeed'],
    initialStock: 5,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
  {
    name: 'Kit Headset Gamer Corsair Void Elite Wireless + Óculos de Proteção Contra Raio de Luz Azul Xiaomi',
    description:
      'Mergulhe na ação com o CORSAIR VOID RGB ELITE sem fio, que apresenta drivers de áudio em neodímio de 50mm e ajuste personalizado, auriculares confortáveis de malha de microfibra e viscoelástico e uma conexão sem fio de 2,4GHz; em relção aos óculos, as lentes de nanômetro bloqueiam os raios azuis nocivos aos olhos e garantem a passagem de luz segura. Além da função anti raios, os óculos oferecem bloqueio de 40% da luz azul prejudicial e proteção contra raios UV400.',
    price: 759.99,
    image:
      'https://images.kabum.com.br/produtos/fotos/308679/kit-headset-gamer-corsair-void-elite-wireless-branco-ca-9011202-na-oculos-de-protecao-contra-raio-de-luz-azul-xiaomi-preto-xm450pre_1644606709_gg.jpg',
    categories: [new ObjectId('62c6b6cb60a53700fdb64bd4'), new ObjectId('62c6b6cb60a53700fdb64bd3')],
    tags: ['acessório', 'gamer', 'kit', 'headset', 'óculos', 'xiaomi'],
    initialStock: 5,
    numberOfPurchases: 0,
    numberOfCarts: 0,
  },
];

export { categories, products };
