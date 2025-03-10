import { StoryFn, Meta } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import Select from "../components/Select";

export default {
  title: "Pokemon Select",
  component: Select,
} as Meta;


type PokemonSelectProps = {
  control: any;
  name: string;
  pokemonList: any[];
  rules: any;
};
const Template: StoryFn<PokemonSelectProps> = (args) => {
  const methods = useForm({ defaultValues: { pokemon: [] } });
  return (
    <FormProvider {...methods}>
      <Select {...args} control={methods.control} />
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "pokemon",
  pokemonList: [
    { name: "bulbasaur" },
    { name: "ivysaur" },
    { name: "venusaur" },
    { name: "rattata" },

  ],
  rules: {
    required: "Please select Pokémon",
    validate: (value:any[]) =>
      value?.length === 4 || "Please select exactly 4 Pokémon",
  },
};
