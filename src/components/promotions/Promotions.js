import SinglePromotion from './SinglePromotion';
import ArrPromotions from './ArrayPromotions';

const Promotions = (promotion) => {
    return (
        <section className="Promotion-display">
            {promotion.promotion.type === "array" && (<ArrPromotions products={promotion.promotion.products} button={promotion.promotion.SeeMoreButton} />)}
            {promotion.promotion.type === "object" && (<SinglePromotion promotion={promotion.promotion} products={promotion.promotion.products} button={promotion.promotion.SeeMoreButton} />)}
        </section>
    )
};

export default Promotions;