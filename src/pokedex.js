// Criar uma classe para salvar as propriedades e métodos de Ash

class Ash {
  constructor() {
    // a Pokedex tem como valor um número, que se refere aos Pokemons que o Ash coleta com os seus movimentos. Este número será o output final do método collectingPokemons
    this.pokedex = 0;

    // a current position altera conforme o Ash se move, ela sempre carrega apenas um objeto com as coordenadas x e y, que é onde o Ash está posicionado naquele momento
    this.currentPosition = { x: 0, y: 0 };

    // position log vai estocar em uma array todas as posições que o Ash visitou na grid. Esta array será o suporte principal para o método chekingIfThereIsAPokemon, que verifica se há ou não um Pokemon na casa atual em que Ash se encontra
    this.positionLog = [];
  }

  // Método: salva a current position de Ash no positionLog
  savePositionToPositionLog() {
    this.positionLog = [...this.positionLog, { ...this.currentPosition }];
  }

  // Método: recebe uma string como argumento e move a posição do Ash de acordo
  movingAsh(coordinate) {
    // usar o método toUpperCase para garantir que os inputs sejam sempre considerados
    // com o switch case verifica os inputs e move o Ash de acordo com a direção
    switch (coordinate.toUpperCase()) {
      case 'S':
        this.currentPosition.y++;
        break;
      case 'N':
        this.currentPosition.y--;
        break;
      case 'O':
        this.currentPosition.x--;
        break;
      case 'E':
        this.currentPosition.x++;
        break;
      // quando o input utilizado é inválido, pois não se trata de nenhum dos caracteres previstos, um novo erro é thrown
      default:
        throw new Error(`Input ${coordinate} is invalid. Please insert either S, N, E or O`);
    }
  }

  // Método: verifica se há um Pokemon naquele bloco ou não. Ele compara as posições visitadas no positionLog com a current position
  chekingIfThereIsAPokemon() {
    if (
      !this.positionLog.some(
        (position) => position.x === this.currentPosition.x && position.y === this.currentPosition.y
      )
    ) {
      // caso a casa não tenha sido visitada, ele adiciona um Pokemon na pokedex
      this.pokedex++;
    }
  }

  // Método: recebe coordenadas como parâmetros, move o Ash pela grid seguindo as coordenandas e retorna a Pokedéx ao final
  collectingPokemons(coordinates) {
    // quando o user adicionar uma string vazia ou não adicionar nenhum argumento, um novo erro é thrown
    if (!coordinates || !coordinates.length || typeof coordinates !== 'string') {
      throw new Error('You must send coordinates to Ash. Please insert either S, N, E or O');
    } else {
      // chama o método que verifica se aquelas coordenadas já foram visitadas pelo Ash e adiciona o Pokemon à Pokedex, caso faça sentido
      this.chekingIfThereIsAPokemon();

      // chama o método para salvar a current position no log de positions, é chamado antes de alterar a current position do Ash
      this.savePositionToPositionLog();

      // faz um loop nas coordenadas e separadamente chama o método que move o Ash pelas casas de acordo com a coordenada
      coordinates.split('').forEach((coordinate) => {
        this.movingAsh(coordinate);

        // chama o método que verifica se aquelas coordenadas já foram visitadas pelo Ash e adiciona o Pokemon à Pokedex, caso faça sentido
        this.chekingIfThereIsAPokemon();

        // chama o método para salvar a current position no log de positions
        this.savePositionToPositionLog();
      });
    }
    return this.pokedex;
  }
}
const ash = new Ash();
console.log(ash.collectingPokemons('nsnsnsnsns'));
