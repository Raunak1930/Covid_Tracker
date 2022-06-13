import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

function InfoBox({active,title,cases,total, ...props}) {
  const classes = useStyles();

  return (
    <div className="infobox">
      <Card
        
        className={`"infobox_container" ${classes.root} ${active && "infobox_active"}`} >
        <CardContent>
          <Typography
            // className={classes.title}
            variant="h5" component="h5"
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          Today :
          <Typography variant="h3" component="h2">
            {cases}
          </Typography>
          
          <Typography variant="h5"  component="h2">
            Total : {total}
            <br />
          </Typography>
        </CardContent>
        <CardActions >
          <Button
            onClick={props.onClick}
            color="secondary" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default InfoBox;
