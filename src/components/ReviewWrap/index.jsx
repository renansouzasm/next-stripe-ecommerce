import "./style.css";

import { Star } from "@phosphor-icons/react";

export const ReviewWrap = () => {
  return (
    <div className="reviewWrap">
      <div className="reviewStars">
        <Star size={12} />
        <Star size={12} />
        <Star size={12} />
        <Star size={12} />
        <Star size={12} />
      </div>

      <p className="uppercase">Reviews</p>
    </div>
  );
};
