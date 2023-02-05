export interface Pokelist {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: { type: { name: string } }[];
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}
