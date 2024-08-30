import Materialicons from "@expo/vector-icons/MaterialIcons";
import { ReactNode } from "react";

interface buttonActionsListProps {
  action: () => void;
  children: ReactNode;
  iconName: keyof typeof Materialicons.glyphMap;
}

export const ButtonActionsList = ({
  action,
  children,
  iconName,
  ...rest
}: buttonActionsListProps) => {
  return (
    <Materialicons.Button
      name={iconName}
      onPress={action}
      {...rest}
      className="w-32"
    >
      {children}
    </Materialicons.Button>
  );
};
