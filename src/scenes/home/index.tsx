import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return <div>Home</div>;
};

export default Home;
