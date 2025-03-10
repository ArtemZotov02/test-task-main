import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "./Modal";
import PokemonSelect from "./Select";
import InputField from "./InputField";

const Form = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      pokemon: [],
    },
  });
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => console.error("Error fetching Pokémon data:", error));
  }, []);

  const onSubmit = (data: any) => {
    setIsModalOpen(true);
    setSelectedPokemon(data.pokemon);
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 shadow-md rounded-md"
      >
        <InputField
          label="First Name"
          type="text"
          register={control.register}
          name="firstName"
          errors={errors}
          validation={{
            required: "First name is required",
            minLength: { value: 2, message: "Minimum length is 2" },
            maxLength: { value: 12, message: "Maximum length is 12" },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Only letters are allowed",
            },
          }}
        />

        <InputField
          label="Last Name"
          type="text"
          register={control.register}
          name="lastName"
          errors={errors}
          validation={{
            required: "Last name is required",
            minLength: { value: 2, message: "Minimum length is 2" },
            maxLength: { value: 12, message: "Maximum length is 12" },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Only letters are allowed",
            },
          }}
        />

        <PokemonSelect
          control={control}
          name="pokemon"
          pokemonList={pokemonList}
          rules={{
            required: "Please select Pokémon",
            validate: (value: any[]) =>
              value?.length === 4 || "Please select exactly 4 Pokémon",
          }}
        />

        {errors.pokemon && (
          <span className="text-red-500 text-sm">
            {errors.pokemon?.message}
          </span>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>

      {isModalOpen && (
        <Modal team={selectedPokemon} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default Form;
