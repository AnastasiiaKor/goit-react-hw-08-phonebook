import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/actions';
import { DebounceInput } from 'react-debounce-input';

function Filter() {
  const dispatch = useDispatch();
  const handleInputChange = ({ target }) => {
    dispatch(setFilterValue(target.value));
  };

  return (
    <form>
      <label>
        Find contacts by name
        <DebounceInput
          element={Input}
          minLength={1}
          debounceTimeout={300}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}

export default Filter;
