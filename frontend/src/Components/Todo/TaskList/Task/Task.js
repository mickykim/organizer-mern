import PropTypes from 'prop-types';
import { ListItemText, Grid } from '@material-ui/core';

const Task = ({ task, uniqueKey }) => {
    return (
        <>
            <ListItemText
                primary={task.body}
                secondary={task.author}
                key={uniqueKey + '1'}
                style={{ marginLeft: '15px' }}
            ></ListItemText>

            <ListItemText
                variant="body1"
                secondary={'Complete by: ' + task.due_date}
                key={uniqueKey + '2'}
                style={{}}
                secondaryTypographyProps={{ align: 'right' }}
            ></ListItemText>
        </>
    );
};

Task.defaultProps = {};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    uniqueKey: PropTypes.string.isRequired,
};

export default Task;
