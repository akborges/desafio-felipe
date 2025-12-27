// Definindo a classe genérica Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idada = idade;
        this.tipo = tipo.toLowerCase(); // Normaliza para facilitar a comparação
    }

    // Método para definir a lógica do ataque
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        // Saída final conforme o requisito
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- Testando a implementação ---

// Criando uma lista (array) de heróis para demonstrar laços de repetição
const heroisParaAventura = [
    new Heroi("Gandalf", 2000, "mago"),
    new Heroi("Aragorn", 87, "guerreiro"),
    new Heroi("Lee", 30, "monge"),
    new Heroi("Hanzo", 25, "ninja")
];

// Usando um laço de repetição para percorrer os heróis e realizar os ataques
console.log("--- Início da Batalha ---");
for (let i = 0; i < heroisParaAventura.length; i++) {
    heroisParaAventura[i].atacar();
}