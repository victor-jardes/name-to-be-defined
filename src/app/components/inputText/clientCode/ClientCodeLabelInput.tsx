import { Text } from "react-native";

interface clientCodeLabelInputProps {
  valor: string;
}

export const ClientCodeLabelInput = ({
  valor,
  ...rest
}: clientCodeLabelInputProps) => {
  return (
    <Text className="text-xl" {...rest}>
      {valor}
    </Text>
  );
};
