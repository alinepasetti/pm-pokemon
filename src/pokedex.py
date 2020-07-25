class Ash:
  # a Pokedex tem como valor um número, que se refere aos Pokemons que o Ash coleta com os seus movimentos. Este número será o output final do método collecting_pokemons
  pokedex = 0

  # a current position altera conforme o Ash se move, ela sempre carrega apenas um objeto com as coordenadas x e y, que é onde o Ash está posicionado naquele momento
  current_position = {'x' : 0 , 'y' : 0} 

  # position log vai estocar em uma lista todas as posições que o Ash visitou na grid. Esta lista será o suporte principal para o método cheking_if_there_is_a_pokemon, que verifica se há ou não um Pokemon na casa atual em que Ash se encontra
  position_log = []

  # Método: salva a current position de Ash no position_log
  def save_position_to_position(self, object):
    self.position_log.append(object)

  # Método: recebe uma string como argumento e move a posição do Ash de acordo
  def moving_ash(self, coordinate):
    # usar o método .upper para garantir que os inputs sejam sempre considerados
    coordinate = coordinate.upper()
    # com o if conditions verifica os inputs e move o Ash de acordo com a direção
    if coordinate == "S":
      self.current_position['y'] += 1
    elif coordinate == "N":
      self.current_position['y'] -= 1
    elif coordinate == "O":
      self.current_position['x'] -= 1
    elif coordinate == "E":
      self.current_position['x'] += 1

    # quando o input utilizado é inválido, pois não se trata de nenhum dos caracteres previstos, um novo erro é raised
    else:
      raise ValueError('Input ' + coordinate + ' is invalid. Please insert either S, N, E or O')

    position = self.current_position.copy()
    return position


  # Método: verifica se há um Pokemon naquele bloco ou não. Ele compara as posições visitadas no position_log com a current position
  def cheking_if_there_is_a_pokemon(self, object):
    if object not in self.position_log: 
      # caso a casa não tenha sido visitada, ele adiciona um Pokemon na pokedex
      self.pokedex += 1

  # Método: recebe coordenadas como parâmetros, move o Ash pela grid seguindo as coordenandas e retorna a Pokedéx ao final
  def collecting_pokemons(self, coordinates):
    # quando o user adicionar uma string vazia, um novo erro é raised
    if not len(coordinates):
      raise ValueError('You must send coordinates to Ash. Please insert either S, N, E or O')
    else:
      # chama o método que verifica se aquelas coordenadas já foram visitadas pelo Ash e adiciona o Pokemon à Pokedex, caso faça sentido
      self.cheking_if_there_is_a_pokemon(self.current_position.copy())
      # chama o método para salvar a current position no log de positions, é chamado antes de alterar a current position do Ash
      self.save_position_to_position(self.current_position.copy())

    for coordinate in coordinates:
      position = self.moving_ash(coordinate)
      # chama o método que verifica se aquelas coordenadas já foram visitadas pelo Ash e adiciona o Pokemon à Pokedex, caso faça sentido
      self.cheking_if_there_is_a_pokemon(position)
      # chama o método para salvar a current position no log de positions, é chamado antes de alterar a current position do Ash
      self.save_position_to_position(position)
     
    return self.pokedex


#ash_one = Ash()
ash_two = Ash()
#ash_three = Ash()

#print(ash_one.collecting_pokemons("E"))
print(ash_two.collecting_pokemons("NESO"))
#print(ash_three.collecting_pokemons("NSNSNSNSNS"))