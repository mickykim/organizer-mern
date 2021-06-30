import PropTypes from 'prop-types'; //impt + tab
import Task from './Task/Task';
import { Grid, List, Divider } from '@material-ui/core';
import TaskDeleteButton from './Task/TaskDeleteButton';

//rafce + tab
const TaskList = ({ tasks, updatePage }) => {
    //TODO: Fix unique key for each child element in a list
    return (
        <List>
            {tasks.map((task, i) => (
                <>
                    <Grid container>
                        <Grid item xs={10}>
                            <Task
                                task={task}
                                uniqueKey={task._id}
                                key={task._id}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TaskDeleteButton
                                id={task._id}
                                updatePage={updatePage}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider key={i} />
                        </Grid>
                    </Grid>
                </>
            ))}
        </List>
    );
};

TaskList.defaultProps = {};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
};

export default TaskList;
