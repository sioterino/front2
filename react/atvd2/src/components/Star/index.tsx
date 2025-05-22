import { FaStar } from "react-icons/fa";

type StarProps = {
  selected: boolean;
  atSelect: () => void;
};

const Star = ({ selected, atSelect }: StarProps) => {

    return <FaStar color={selected ? "goldenrod" : "darkgray"} style={{ cursor: "pointer"}} onClick={atSelect} />

}

export default Star