import MaterialComunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface clientCodeSendProps {
  text: string;
}

export const ClientCodeSend = ({ text, ...rest }: clientCodeSendProps) => {
  return (
    <MaterialComunityIcons.Button name="send" {...rest}>
      {text}
    </MaterialComunityIcons.Button>
  );
};
