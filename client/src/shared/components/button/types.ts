type ButtonType = React.ComponentPropsWithoutRef<'button'>['type'];

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: ButtonType;
}
