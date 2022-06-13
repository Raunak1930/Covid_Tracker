import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import logo from '../images/corona-logo.gif'

// 5096319018324cdaa3f55ddcd8f10aa9
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 500
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

function Graph({index}) {
    const classes = useStyles();
    
    const slogans = [
        "Better to wear a mask than a ventilator; better to stay at home than in an ICU.",
        "Carefulness costs you nothing. Carelessness may cost you your life.",
        "Safety isn’t expensive, it’s priceless.",
        "At the end of the day, the goals are simple: safety and security.",
        "Safety is something that happens between your ears, not something you hold in your hands.",
        "This too shall pass: Stay home stay safe ",
        "Nothing lasts forever. Not even the coronavirus. So stay home, stay safe and fight hard.",
        "Stay home, stay safe – the only medicine found till now for coronavirus.",
        "Positive anything is better than negative nothing - except the coronavirus. So stay home and help flatten the curve.",
    ]
    

    return (
        <div >
            <Card className={classes.root} >
                <CardContent className="slogan_box">
                    <Typography
                        // className={classes.title}
                        variant="h5" component="h5"
                        color="textSecondary"
                        gutterBottom
                    >
                        Motivation
                    </Typography>
                    <img className="slogan_img" src={logo} alt=""/>
                    <div className="slogan_cont">
                        <Typography className="slogan" variant="h7" component="h7">
                            {slogans[index]}
                        </Typography>
                        <div className="slogan_btn">
                        <Button color="secondary" size="small">Hit Like</Button>
                        </div>
                   </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Graph
