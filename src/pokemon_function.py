def ash_function(coordinates):
  pokedex = 0
  current_position = {'x' : 0 , 'y' : 0} 
  position_log = []

  if {"x": current_position['x'], "y": current_position['y']} not in position_log:
    pokedex += 1
  position_log.append(current_position.copy())

  for coordinate in coordinates:
    coordinate = coordinate.upper()
    if coordinate == "S":
      current_position['y'] += 1
    elif coordinate == "N":
      current_position['y'] -= 1
    elif coordinate == "O":
      current_position['x'] -= 1
    elif coordinate == "E":
      current_position['x'] += 1
    else:
      raise ValueError('Input ' + coordinate + ' is invalid. Please insert either S, N, E or O')
    new_object = current_position.copy()

    if new_object not in position_log:
      pokedex += 1

    position_log.append(new_object)
  
  return pokedex


print(ash_function("E"))
print(ash_function("NESO"))
print(ash_function("NSNSNSNSNS"))