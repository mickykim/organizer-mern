import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Task = ({ task }) => {
    return (
        <Paper className="task">
            <Typography variant="subtitle2">
                {task.author} - {task.due_date}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {task.body}
            </Typography>
        </Paper>
    );
};

Task.defaultProps = {};

Task.propTypes = {};

export default Task;
