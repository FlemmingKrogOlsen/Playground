export default interface Props {
  image: string;
  children: React.ReactNode;
  info: string;
}

export type ContainerProps = {
  show: boolean;
};
