const INITIAL_STATE = [
  {
    name: 'Filé de Peito de Frango',
    quantity: 7,
  },
  {
    name: 'Alcátra',
    quantity: 4,
  },
  {
    name: 'Carne Moída',
    quantity: 15,
  },
];

const meatReducer = (state = INITIAL_STATE, action) => state;

export default meatReducer;
