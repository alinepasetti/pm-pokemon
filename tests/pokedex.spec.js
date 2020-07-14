describe('Ash', () => {
  let ash;

  beforeEach(() => {
    ash = new Ash();
  });

  describe('collectingPokemons() method', () => {
    it('should be a function', () => {
      expect(typeof ash.collectingPokemons).toBe('function');
    });

    it('should receive 1 argument', () => {
      expect(ash.collectingPokemons.length).toEqual(1);
    });

    it('should return the pokedex property of Ash', () => {
      expect(ash.collectingPokemons('NS')).toEqual(ash.pokedex);
    });

    it('Input: "E", Output: 2', () => {
      expect(ash.collectingPokemons('E')).toEqual(2);
    });
    it('Input: "NESO", Output: 4', () => {
      expect(ash.collectingPokemons('NESO')).toEqual(4);
    });
    it('Input: "NSNSNSNSNS", Output: 2', () => {
      expect(ash.collectingPokemons('NSNSNSNSNS')).toEqual(2);
    });

    it('should throw an error if collectingPokemons() is called without arguments', () => {
      expect(() => ash.collectingPokemons('')).toThrow(
        new Error('You must send coordinates to Ash. Please insert either S, N, E or O')
      );
    });
  });

  describe('movingAsh() method', () => {
    it('should be a function', () => {
      expect(typeof ash.movingAsh).toBe('function');
    });

    it('should receive 1 argument', () => {
      expect(ash.movingAsh.length).toEqual(1);
    });

    it('should allow the input to be inserted in lowercase', () => {
      ash.movingAsh('n');
      expect(ash.currentPosition.y).toEqual(-1);
    });

    it("should throw an error if movingAsh() is called with another argument other than 'S, N, E or O'", () => {
      expect(() => ash.movingAsh('y')).toThrow(
        new Error('Input y is invalid. Please insert either S, N, E or O')
      );
    });
  });

  describe('chekingIfThereIsAPokemon() method', () => {
    it('should be a function', () => {
      expect(typeof ash.chekingIfThereIsAPokemon).toBe('function');
    });

    it("should add a Pokemon to Ash's Pokedex in case the condition is matched", () => {
      ash.chekingIfThereIsAPokemon();
      expect(ash.pokedex).toEqual(1);
    });
  });
});
