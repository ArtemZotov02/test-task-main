import React from 'react';

interface IPokemon {
  label: string;
  value: number;
}
type ModalProps = {
  team: IPokemon[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ team, setIsModalOpen }) => {
  console.log(team)
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-md">
        <h3 className="text-xl font-semibold">Your Team</h3>
        <div className="flex space-x-4 mt-4">
          {team.map((pokemon, index) => (
            <div key={index}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.value}.png`} alt="pokemon" className="w-20 h-20" />
              <p className="text-center">{pokemon.label}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setIsModalOpen(false)} className="mt-4 p-2 bg-red-500 text-white rounded-md">Close</button>
      </div>
    </div>
  );
};

export default Modal;
