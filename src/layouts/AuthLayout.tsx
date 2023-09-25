import ContainerLayout from "./ContainerLayout";

const AuthLayout = ({ children }: any) => {
  return (
    <ContainerLayout>
      <div>{children}</div>
    </ContainerLayout>
  );
};

export default AuthLayout;
