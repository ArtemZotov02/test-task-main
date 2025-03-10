import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

type PokemonSelectProps = {
  control: any;
  name: string;
  pokemonList: any[];
  rules: any;
};

const PokemonSelect: React.FC<PokemonSelectProps> = ({ control, name, pokemonList, rules }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700">Select Your Pokémon Team (up to 4)</label>
      <Controller
        name={name}
        defaultValue={[]}  
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={pokemonList.map((pokemon, index) => ({ value: index + 1, label: pokemon.name }))}
            isMulti
            maxMenuHeight={200}
            isClearable
            closeMenuOnSelect={false}
            onChange={(selectedOptions) => {
              if (selectedOptions.length <= 4) {
                field.onChange(selectedOptions);
              }
            }}
          />
        )}
        rules={rules}
      />
    </div>
  );
};

export default PokemonSelect;
