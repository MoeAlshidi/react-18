import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!isLiked);
    onClick;
  };

  if (isLiked) return <AiFillHeart color="#ff6b81" onClick={toggle} />;
  return <AiOutlineHeart onClick={toggle} />;
};

export default Like;
