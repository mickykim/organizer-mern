const taskFormStyle = (theme) => ({
    button: {
        border: 0,
        borderRadius: 3,
        height: 48,
        padding: '0 30px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    input: {
        width: 250,
        marginBottom: 15,
    },
});
export default taskFormStyle;
