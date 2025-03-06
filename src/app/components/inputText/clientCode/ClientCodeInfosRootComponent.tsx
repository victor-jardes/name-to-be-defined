import { ReactNode } from "react";
import { View } from "react-native";

type clientCodeInfostRootComponentProps = {
  children: ReactNode;
};

export const ClientCodeInfostRootComponent = ({
  children,
}: clientCodeInfostRootComponentProps) => {
  return <View>{children}</View>;
};
