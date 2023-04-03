import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { DebounceInput } from 'react-debounce-input';

function Filter() {
  const dispatch = useDispatch();
  const handleInputChange = ({ target }) => {
    dispatch(setFilterValue(target.value));
  };

  return (
    <form>
      <DebounceInput
        element={Input}
        minLength={1}
        debounceTimeout={300}
        onChange={handleInputChange}
        placeholder={'filter by name'}
      />
    </form>
  );
}

export default Filter;
