import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import {Review} from '../../types/review';

type ReviewListProps = {
  reviews: Review[];
  offerId: string;
  isAuthorized: boolean;
};

function ReviewList({reviews, offerId, isAuthorized}: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {isAuthorized && <ReviewForm offerId={offerId} />}
    </section>
  );
}

export default ReviewList;
