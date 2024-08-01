import { Text } from "react-native";

interface clientCodeLabelInputProps {
  valor: string;
}

export const ClientCodeLabelInput = ({
  valor,
  ...rest
}: clientCodeLabelInputProps) => {
  return <Text {...rest}>{valor}</Text>;
};
