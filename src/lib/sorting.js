

function sortEventsByDateAndUpdateIds(events) {
    return events
        .sort((a, b) => {
            const dateA = new Date(a.date.split('-').reverse().join('-')); // Convert "dd-mm-yyyy" to "yyyy-mm-dd"
            const dateB = new Date(b.date.split('-').reverse().join('-'));
            return dateA - dateB; // Sort by ascending order
        })
        .map((event, index) => ({
            ...event, // Keep all existing properties
            id: index + 1 // Update ID to the new order (starting from 1)
        }));
}
const yourArray = [
    {
        "id": 1,
        "title": "4º Encontro de Cordas Do Sol",
        "date": "07-09-2024",
        "from": "15:00",
        "to": "18:00",
        "location": "Parque das Conchas",
        "description": "Explore o prazer de tocar em conjunto e aprender novas canções tradicionais com outros tocadores de Cordas.",
        "content": "<p>Olá a todos!<br><br>Preparados para o 4° Encontro de Cordas Do Sol, no dia 7 de Setembro 2024, no Parque das Conchas (Lisboa)?</p><p><br>Para quem ainda não sabe o que é, aqui vai a ideia e o convite:<br>Tens um ukulele ou um cavaquinho?<br>Tens uma guitarra ou uma viola campaniça?<br>Tens algum outro instrumento de cordas ou de percussão?<br>Gostas de cantar?<br>Gostas de música, natureza e de alegre convívio?</p><p><br>Então vem experimentar a energia DO SOL num parque extraordinário (Parque das Conchas em Lisboa), enquanto tocas e cantas as nossas canções tradicionais com apenas os acordes de DO e SOL e traz a tua família ou amigos.</p><p><br>Não percas esta oportunidade de participar no 4º Encontro de Cordas Do Sol, num ambiente acolhedor e amigável e passar assim, uma tarde divertida e descontraída, entre pessoas incríveis!</p><p><br>Este encontro será uma oportunidade para celebrarmos a nossa música tradicional.<br>A participação é gratuita e para tal deverás enviar um email para ukeinparque@gmail.com indicando a vontade em participar e qual o instrumento que tocas ou se apenas gostas de cantar, o número de telemóvel e o nome do grupo caso pertençam a algum.<br>Caso pertençam a algum grupo combinem entre vós 1 ou 2 temas para nos apresentarem.<br>Receberás de volta o acesso à Drive onde estarão as cerca de 15 canções para que as possas imprimir.<br>Caso não tenhas essa possibilidade diz, que se há-de encontrar uma solução.</p><p><br>Tal como combinado no último encontro, desta vez vamos fazer um lanche no final das cantigas e para tal será necessário que tragas o que achares melhor para partilhar por todos.<br>Pode ser aquele bolo especial que sabes fazer, uns salgados, ou uns aperitivos e bebidas. O que achares melhor!<br>Será necessário também para além dos habituais banquinhos, trazer algumas mesas para que possamos colocar a comida e bebida.</p><p><br>Fico assim a aguardar o vosso feedback por email, indicando se levam mesa pois não será necessário todos nós levarmos uma e assim poderemos combinar.</p>",
        "image": "/eventos/4 Encontro de Cordas DO SOL.jpeg",
        "past": true
    },
    {
        "id": 2,
        "title": "3º Encontro de Cordas Do Sol",
        "date": "11-05-2024",
        "from": "15:00",
        "to": "18:00",
        "location": "Parque das Conchas",
        "description": "Celebre a riqueza das canções tradicionais ao som dos acordes de Dó e Sol no nosso Encontro de Cordas Do Sol.",
        "content": "<p>Olá a todos!<br><br>Preparados para o 3° Encontro de Cordas Do Sol, no dia 11 de Maio 2024, no Parque das Conchas (Lisboa)?</p><p><br>Para quem ainda não sabe o que é, aqui vai a ideia e o convite:<br>Tens um ukulele ou um cavaquinho?<br>Tens uma guitarra ou uma viola campaniça?<br>Tens algum outro instrumento de cordas ou de percussão?<br>Gostas de cantar?<br>Gostas de música, natureza e de alegre convívio?</p><p><br>Então vem experimentar a energia DO SOL num parque extraordinário (Parque das Conchas em Lisboa), enquanto tocas e cantas as nossas canções tradicionais com apenas os acordes de DO e SOL.</p><p><br>Não percas esta oportunidade de participar no 3º Encontro de Cordas Do Sol, num ambiente acolhedor e amigável e passar assim, uma tarde divertida e descontraída, entre pessoas incríveis!</p><p><br>Este encontro será uma oportunidade para celebrarmos a nossa música tradicional.<br>A participação é gratuita e para tal deverás enviar um email para ukeinparque@gmail.com indicando a vontade em participar e qual o instrumento que tocas ou se apenas gostas de cantar, o número de telemóvel e o nome do grupo caso pertençam a algum.<br>Caso pertençam a algum grupo combinem entre vós 1 ou 2 temas para nos apresentarem.<br>Receberás de volta o acesso à Drive onde estarão as cerca de 15 canções para que as possas imprimir.<br>Caso não tenhas essa possibilidade diz, que se há-de encontrar uma solução.</p><p><br>No dia do evento deverás trazer um banquinho e uma estante para a colocação das cifras e não esquecer a garrafa de água.<br>Caso não tenhas banquinho e/ou estante, há sempre alguém que empresta.</p>",
        "image": "/eventos/3 Encontro de Cordas DO SOL.jpeg",
        "past": true
    },
    {
        "id": 3,
        "title": "Encontro de Ukulele ao Ar Livre",
        "date": "14-04-2024",
        "from": "16:00",
        "to": "18:00",
        "location": "Parque das Conchas",
        "description": "Junte-se a nós para um encontro ao ar livre de ukuleles, onde a música e a natureza se unem em perfeita harmonia.",
        "content": "<p>Junta-te a nós para uma tarde mágica de música e harmonia. Traz o teu ukulele e compartilha acordes, sorrisos e boas vibrações sob o céu aberto.</p><br><p>Não importa se és um iniciante ou um virtuoso do ukulele. Todos são bem-vindos!</p><br><p>Vamos fazer deste encontro uma sinfonia de alegria! 🎵🌟</p><br><p>Não te esqueças do banquinho, da estante e das cifras. Da alegria já sei que nunca te esqueces!</p>",
        "image": "/eventos/Encontro Ukulele 14 Abril.png",
        "past": true
    },
    {
        "id": 4,
        "title": "2º Encontro de Cordas Do Sol",
        "date": "14-10-2023",
        "from": "16:00",
        "to": "19:00",
        "location": "Parque das Conchas",
        "description": "Explore o prazer de tocar em conjunto e aprender novas canções tradicionais com outros tocadores de Cordas.",
        "content": "<p>Olá a todos!<br />Preparados para o 2° Encontro de Cordas Do Sol?<br />Tal como fizemos no 1° Encontro peço aos elementos dos vários grupos de cavaquinhos que combinem entre vocês 1 ou 2 canções para nos apresentarem.<br />Enviem a confirmação de participação para o mesmo email e desta vez coloquem o número de telemóvel e o nome do vosso grupo.</p><p>Para quem ainda não sabe o que é, aqui vai a ideia e o convite:<br />Tens um ukulele ou um cavaquinho?<br />Tens uma guitarra ou uma viola campaniça?<br />Tens algum outro instrumento de cordas?<br />Gostas de cantar?<br />Gostas de música, natureza e de alegre convívio?</p><p>Então vem experimentar a energia DO SOL num parque extraordinário (Parque das Conchas em Lisboa), enquanto tocas e cantas as nossas canções tradicionais com apenas os acordes de DO e SOL.</p><p>Não percas esta oportunidade de participar no 2º Encontro de Cordas Do Sol, num ambiente acolhedor e amigável e passar assim um final de tarde divertido e descontraído, entre pessoas incríveis!</p><p>Este encontro será uma oportunidade para celebrarmos a nossa música tradicional.<br />A participação é gratuita e para tal deverás enviar um email para ukeinparque@gmail.com indicando a vontade em participar e qual o instrumento que tocas ou se apenas gostas de cantar, o número de telemóvel e o nome do grupo caso pertençam a algum. Receberás de volta o acesso à Drive onde estarão as cerca de 12 canções para que as possas imprimir. Caso não tenhas essa possibilidade diz, que se há-de encontrar uma solução.</p><p>No dia do evento deverás trazer um banquinho e uma estante para a colocação das cifras e não esquecer a garrafa de água. Caso não tenhas banquinho e/ou estante, há sempre alguém que empresta.</p>",
        "image": "/eventos/2 Encontro de Cordas DO SOL.jpeg",
        "past": true
    },
    {
        "id": 5,
        "title": "1º Encontro de Cordas Do Sol",
        "date": "17-06-2023",
        "from": "17:00",
        "to": "20:00",
        "location": "Parque das Conchas",
        "description": "Celebre a riqueza das canções tradicionais ao som dos acordes de Dó e Sol no nosso Encontro de Cordas Do Sol.",
        "content": "<p>Olá!</p><br><p>Tens um ukulele ou um cavaquinho?</p><br><p>Tens uma guitarra ou uma viola campaniça?</p><br><p>Tens algum outro instrumento de cordas?</p><br><p>Gostas de cantar?</p><br><p>Gostas de música, natureza e de alegre convívio?</p><br><p>Então vem experimentar a energia DO SOL num parque extraordinário (Parque das Conchas em Lisboa), enquanto tocas e cantas as nossas canções tradicionais com apenas os acordes de DO e SOL.</p><br><p>Não percas esta oportunidade de participar no 1º Encontro de Cordas Do Sol, num ambiente acolhedor e amigável e passar assim um final de tarde divertido e descontraído, entre pessoas incríveis!</p><br><p>Este encontro será uma oportunidade para celebrarmos a nossa música tradicional.</p><br><p>A participação é gratuita e para tal deverás enviar um email para <a href='mailto:ukeinparque@gmail.com'>ukeinparque@gmail.com</a> indicando a vontade em participar e qual o instrumento que tocas ou se apenas gostas de cantar. Receberás de volta o acesso à Drive onde estarão as cerca de 10 canções para que as possas imprimir. Caso não tenhas essa possibilidade diz, que se há-de encontrar uma solução.</p><br><p>No dia do evento deverás trazer um banquinho e uma estante para a colocação das cifras e não esquecer a garrafa de água. Caso não tenhas banquinho e/ou estante, há sempre alguém que empresta.</p><br><p>Fico a aguardar o teu email!</p>",
        "image": "/eventos/1EncontrodeCordasDoSol.png",
        "past": true
    },
    {
        "id": 6,
        "title": "Encontro de Ukulele",
        "date": "12-11-2022",
        "from": "15:00",
        "to": "17:00",
        "location": "Parque das Conchas",
        "description": "Experimente a alegria de tocar e cantar juntos vários tipos de canções, num parque encantador.",
        "content": "<p>Tens o ukulele fechado no saco há demasiado tempo? Está então na hora de o levar a passear até um lindo jardim em Lisboa e deixar as suas cordas vibrarem e encantarem quem por lá passar.</p><p><br>Os ukuleles que tocam regularmente obviamente também serão bem vindos!<br>Bora?</p>",
        "image": "/eventos/Encontro de Ukulele 12 Nov.png",
        "past": true
    },
    {
        "id": 7,
        "title": "Encontro de Ukulele ao Ar Livre",
        "date": "13-08-2022",
        "from": "17:00",
        "to": "20:00",
        "location": "Parque das Conchas",
        "description": "Experimente a alegria de tocar e cantar juntos vários tipos de canções, num parque encantador.",
        "content": "<p>Junta-te a nós para uma tarde mágica de música e harmonia. Traz o teu ukulele e compartilha acordes, sorrisos e boas vibrações sob o céu aberto.</p><br><p>Não importa se és um iniciante ou um virtuoso do ukulele. Todos são bem-vindos!</p><br><p>Vamos fazer deste encontro uma sinfonia de alegria! 🎵🌟</p><br><p>Não te esqueças do banquinho, da estante e das cifras. Da alegria já sei que nunca te esqueces!</p>",
        "image": "/eventos/Encontro Ukulele 13 Ago.png",
        "past": true
    },
    {
        "id": 8,
        "title": "Workshop de Ukulele",
        "date": "17-02-2024",
        "from": "15:00",
        "to": "17:30",
        "location": "Rua Andrade Corvo, 9",
        "description": "Vem conhecer a história, as caraterísticas e a versatilidade deste divertido instrumento musical.",
        "content": "<p>Já ouviram falar deste pequeno e fantástico instrumento musical?</p><p>Sabiam que é um dos instrumentos musicais mais vendidos no mundo inteiro e que tem a sua origem num instrumento português?</p><p>Venham conhecer a sua história, as suas caraterísticas, a sua versatilidade e aprender algumas noções básicas para tocar alguns temas musicais simples.</p><p><br></p><p>Para descobrir e aprender mais sobre o Ukulele inscrevam-se neste workshop gratuito no Clube PT</p><strong><br>PROGRAMA:</strong><ul style=\"list-style-type: disc; padding-left: 40px;\"><li>História do instrumento e os vários tipos de Ukuleles.</li><li>Demonstração da versatilidade do instrumento com temas diversos.</li><li>Afinação do Ukulele e tipos de afinadores.</li><li>Como segurar o Ukulele / Posição das mãos e dedos.</li><li>Noção de Cifra e de Tablatura.</li><li>Alguns Acordes e Ritmos básicos.</li><li>Aprendizagem de algumas canções e melodias simples.</li></ul>",
        "image": "/eventos/Workshop Ukulele 17 Fev 2024.jpeg",
        "past": true
    },
    {
        "id": 9,
        "title": "Workshop de Ukulele",
        "date": "12-09-2023",
        "from": "12:30",
        "to": "14:00",
        "location": "Rua Andrade Corvo, 9",
        "description": "Vem conhecer a história, as caraterísticas e a versatilidade deste divertido instrumento musical.",
        "content": "<p>Já ouviram falar deste pequeno e fantástico instrumento musical?</p><p>Sabiam que é um dos instrumentos musicais mais vendidos no mundo inteiro e que tem a sua origem num instrumento português?</p><p>Venham conhecer a sua história, as suas caraterísticas, a sua versatilidade e aprender algumas noções básicas para tocar alguns temas musicais simples.</p><p><br></p><p>Para descobrir e aprender mais sobre o Ukulele inscrevam-se neste workshop gratuito no Clube PT</p><strong><br>PROGRAMA:</strong><ul style=\"list-style-type: disc; padding-left: 40px;\"><li>História do instrumento e os vários tipos de Ukuleles.</li><li>Demonstração da versatilidade do instrumento com temas diversos.</li><li>Afinação do Ukulele e tipos de afinadores.</li><li>Como segurar o Ukulele / Posição das mãos e dedos.</li><li>Noção de Cifra e de Tablatura.</li><li>Alguns Acordes e Ritmos básicos.</li><li>Aprendizagem de algumas canções e melodias simples.</li></ul>",
        "image": "/eventos/Workshop Ukulele.png",
        "past": true
    },
    {
        "id": 10,
        "title": "Workshop de Ukulele",
        "date": "16-11-2024",
        "from": "15:00",
        "to": "17:00",
        "location": "Rua Andrade Corvo, 9",
        "description": "Vem conhecer a história, as caraterísticas e a versatilidade deste divertido instrumento musical. No final vais saber tocar alguns temas musicais simples.",
        "content": "<p>Já ouviram falar deste pequeno e fantástico instrumento musical?</p><p>Sabiam que é um dos instrumentos musicais mais vendidos no mundo inteiro e que tem a sua origem num instrumento português?</p><p>Venham conhecer a sua história, as suas caraterísticas, a sua versatilidade e aprender algumas noções básicas para tocar alguns temas musicais simples.</p><p><br></p><p>Para descobrir e aprender mais sobre o Ukulele inscrevam-se neste workshop gratuito no Clube PT</p><strong><br>PROGRAMA:</strong><ul style=\"list-style-type: disc; padding-left: 40px;\"><li>História do instrumento e os vários tipos de Ukuleles.</li><li>Demonstração da versatilidade do instrumento com temas diversos.</li><li>Afinação do Ukulele e tipos de afinadores.</li><li>Como segurar o Ukulele / Posição das mãos e dedos.</li><li>Noção de Cifra e de Tablatura.</li><li>Alguns Acordes e Ritmos básicos.</li><li>Aprendizagem de algumas canções e melodias simples.</li></ul><br><strong>Inscrições limitadas e até ao dia 10 de Novembro ou até ao preenchimento das vagas.</strong>",
        "image": "/eventos/workshop nov 2024 1.png",
        "past": true
    },
    {
        "id": 11,
        "title": "Workshop de Ukulele",
        "date": "25-01-2025",
        "from": "15:00",
        "to": "17:00",
        "location": "Rua da Sociedade Farmacêutica, 12",
        "description": "Vem conhecer a história, as caraterísticas e a versatilidade deste divertido instrumento musical. No final vais saber tocar alguns temas musicais simples.",
        "content": "<p>Já ouviram falar deste pequeno e fantástico instrumento musical?</p><p>Sabiam que é um dos instrumentos musicais mais vendidos no mundo inteiro e que tem a sua origem num instrumento português?</p><p>Venham conhecer a sua história, as suas caraterísticas, a sua versatilidade e aprender algumas noções básicas para tocar alguns temas musicais simples.</p><p><br></p><p>Para descobrir e aprender mais sobre o Ukulele inscrevam-se neste workshop gratuito no Clube PT</p><strong><br>PROGRAMA:</strong><ul style=\"list-style-type: disc; padding-left: 40px;\"><li>História do instrumento e os vários tipos de Ukuleles.</li><li>Demonstração da versatilidade do instrumento com temas diversos.</li><li>Afinação do Ukulele e tipos de afinadores.</li><li>Como segurar o Ukulele / Posição das mãos e dedos.</li><li>Noção de Cifra e de Tablatura.</li><li>Alguns Acordes e Ritmos básicos.</li><li>Aprendizagem de algumas canções e melodias simples.</li></ul><br><strong>Inscrições limitadas e até ao dia 15 de Janeiro ou até ao preenchimento das vagas.</strong>",
        "image": "/eventos/Workshop 25 Jan 2025.png",
        "past": false
    }
];


const sortedEvents = sortEventsByDateAndUpdateIds(yourArray);
console.log(JSON.stringify(sortedEvents, null, 2));
