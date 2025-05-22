import { useState } from "react";
import Star from "../Star";


const Rating = () => {

    

    const amountOfStars = 5;
    const stars = [...Array(amountOfStars)]
    const [rate, setRate] = useState(0);

    return (
        <div className="recipe-rating">
            {stars.map((_, i) => (
                <Star
                    key={i}
                    selected={rate > i}
                    atSelect={() => setRate(i + 1) }
                />
            ))}
        </div>
    )

}

export default Rating