import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import PropTypes from 'prop-types'
import { FilterWrap } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    const dispatch = useDispatch();

    return (
        <FilterWrap>
            <h3>Find contact by name: </h3>
            <input
                type="text"
                name="filter"
                onChange={event => dispatch(setFilter(event.target.value))}
            />
        </FilterWrap>
    )
} 

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };