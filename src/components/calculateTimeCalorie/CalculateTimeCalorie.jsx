import PropTypes from 'prop-types';
let t =0;
let c =0;
const CalculateTimeCalorie = ({items}) => {
    // console.log(items)
    return (
        <div>
            <p>Total Time = {t} minutes</p>
            <p>Total Calories = {c} calories</p>
        </div>
    );
};

CalculateTimeCalorie.propTypes = {
    items: PropTypes.object
}

export default CalculateTimeCalorie;