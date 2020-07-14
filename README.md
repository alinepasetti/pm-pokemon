# Pokemon: apanhá-los todos

O programa recebe um input, que contém uma sequência de movimentos. Cada movimento é descrito por uma letra N, S, E ou O(respetivamente: norte, sul, este, oeste).

O programa retorna um número: quantos pokémons o Ash apanhou?

## Testes

Para verificar os testes, é preciso correr o documento SpecRunner.html no browser.

## Pontos

Ash é uma classe que possui 3 propriedades:

- pokedex: guarda quantos Pokemons ele apanha pelo seu caminho;
- currentPosition: armazena as coordenadas atuais de Ash, iniciando por x: 0 e y:0 e se atualiza o seu valor a cada movimento;
- positionLog: uma array que salva o log de todas as posições visitadas por Ash.

e 4 métodos:

- savePositionToPositionLog: salva a currentPosition no log de posições antes que o Ash se mova para uma nova casa;
- movingAsh: recebe como parâmetro uma sting de length 1 e move o Ash pela grid infinita;
- chekingIfThereIsAPokemon: verifica o positionLog de Ash e salva um novo Pokemon na Pokedex caso a casa em específico não tenha sido visitada;
- collectingPokemons: é o principal método de Ash. Espera coordenadas como parâmetro para realizar os movimentos de Ash na grid e fazer a coleta de Pokemons.

## Casos bicudos

- O método collectingPokemons() é chamado sem argumentos.
- O método movingAsh() é chamado com um input inválido.
- O método movingAsh() é chamado com um input válido, no entando com lowercase.
