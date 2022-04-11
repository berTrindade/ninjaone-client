import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { DIRECTION } from '../../../constants';

export function DirectionFilter({ direction, changeDirection }) {
  return (
    <button onClick={changeDirection}>
      { direction === DIRECTION.SORT_DIRECTION_DESC && (
        <FaSortAmountDown
          data-testid={DIRECTION.SORT_DIRECTION_DESC}
        />
      )}
      { direction === DIRECTION.SORT_DIRECTION_ASC && (
        <FaSortAmountUp
          data-testid={DIRECTION.SORT_DIRECTION_ASC}
        />
      )}
    </button>
  );
};

export default DirectionFilter;