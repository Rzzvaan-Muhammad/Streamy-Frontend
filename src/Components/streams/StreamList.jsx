import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import BorderColorTwoToneIcon from "@material-ui/icons/BorderColorTwoTone";
import DeleteSweepTwoToneIcon from "@material-ui/icons/DeleteSweepTwoTone";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  createIcon: {
    height: 50,
    width: 50,
    justifySelf: "center",
  },
}));

const StreamList = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.fetchStreams();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className="StreamList">
          {props.StreamList.map((row) => (
            <Box
              key={row.id}
              style={{ marginTop: "1%" }}
              width={1 / 3}
              bgcolor="grey.300"
              p={1}
            >
              <Card className={`CardList ${classes.root}`}>
                <div className={`details ${classes.details}`}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      <Link
                        style={{ textDecoration: "none", color: "#555" }}
                        to={`/stream/show/${row.id}`}
                      >
                        {row.title}
                      </Link>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {row.description}
                    </Typography>
                  </CardContent>
                  {props.UserId === row.userId ? (
                    <div className={classes.controls}>
                      <Link to={`/stream/edit/${row.id}`}>
                        <IconButton aria-label="previous">
                          <EditSharpIcon />
                        </IconButton>
                      </Link>
                      <Link to={`/stream/delete/${row.id}`}>
                        <IconButton aria-label="play/pause">
                          <DeleteSweepTwoToneIcon
                            className={classes.playIcon}
                          />
                        </IconButton>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <CardMedia
                  className={classes.cover}
                  image={`https://picsum.photos/40${row.id}`}
                  title="Live from space album cover"
                />
              </Card>
            </Box>
          ))}
        </div>
        <div>
          {props.isSignedIn ? (
            <IconButton>
              <Link to="/stream/new">
                <BorderColorTwoToneIcon className={classes.createIcon} />
              </Link>
            </IconButton>
          ) : (
            ""
          )}
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    StreamList: Object.values(state.streams),
    UserId: state.Auth.userId,
    isSignedIn: state.Auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
