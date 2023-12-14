import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();


  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={e=>dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};
