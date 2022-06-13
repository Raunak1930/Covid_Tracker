import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        // height: 400,

    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Table({countries}) {
    const classes = useStyles();
    return (
        <div className="table">
            <Card className={classes.root} >
                <CardContent>
                    <Typography
                        // className={classes.title}
                        variant="h5" component="h5"
                        color="textSecondary"
                        gutterBottom
                    >
                       Live Cases by Country 
                    </Typography>
                </CardContent>
                {
                    countries.map(({ country, cases }) => (
                        <div className="table_row">
                            <tr className="table_container">
                                <td className="table_ele">{country }</td>
                                <td className="table_cases">{cases}</td>
                            </tr>
                        </div>    
                    ))
                } 
            </Card>
        </div>
    )
}

export default Table
