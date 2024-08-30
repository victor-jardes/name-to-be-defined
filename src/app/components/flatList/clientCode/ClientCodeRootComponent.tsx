import { ReactNode } from "react";
import { View } from "react-native";

type clientCodeListRootComponentProps = {
  children: ReactNode;
};

export const ClientCodeListRootComponent = ({
  children,
}: clientCodeListRootComponentProps) => {
  return <View>{children}</View>;
};
