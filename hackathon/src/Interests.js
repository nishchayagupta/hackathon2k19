import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Divider } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Hiking" },
    { key: 1, label: "Karate" },
    { key: 2, label: "Coding" },
    { key: 3, label: "Travelling" }
  ]);

  const handleDelete = chipToDelete => () => {
    if (chipToDelete.label === "React") {
      alert("Why would you want to delete React?! :)");
      return;
    }

    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <Card style={{ width: "-webkit-fill-available" }}>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "-webkit-fill-available",
              height: "10vw",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <div>
              <Typography
                style={{ fontFamily: "Oswald, sans-serif", fontSize: "2.5vw" }}
              >
                {" "}
                Interests{" "}
              </Typography>
            </div>
            <div>
              <Divider style={{ width: "55vw" }} />
            <br/>
              {chipData.map(data => {
                let icon;

                if (data.label === "React") {
                  icon = <TagFacesIcon />;
                }

                return (
                  <Chip
                    key={data.key}
                    icon={icon}
                    label={data.label}
                    onDelete={handleDelete(data)}
                    className={classes.chip}
                    color = "primary"
                  />
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
