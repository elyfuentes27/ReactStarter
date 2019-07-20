import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import toolsResult from '../common/toolsResults'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component = "a" {
        ...props
    }
    />;
}
export default function result() {
  const classes = useStyles();
    return (
        <Layout>
            <div className="body-margin-top" />
            <SEO title="result" />
            <h1>Result</h1>

            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <List component="nav" className={classes.root} aria-label="Contacts">
                {toolsResult.map( i => {
                    if(i.name === 'Forms'){
                        return (
                            <div>
                            {i.links.map( list => <ListItemLink href={list.link} target="_blank"><ListItemText inset primary={list.name} /></ListItemLink>)}
                            </div>
                        )
                    }
                })}
                </List>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>

                <List component="nav" className={classes.root} aria-label="Contacts">
                {toolsResult.map( i => {
                    if(i.name === 'Forms'){
                        return (
                            <div>
                            {i.links.map( list => <ListItemLink href={list.link} target="_blank"><ListItemText inset primary={list.name} /></ListItemLink>)}
                            </div>
                        )
                    }
                })}
                </List>
            </Paper>
            </Grid>
            </Grid>

            <Link to="/question-4/">Go back to Question 4</Link>
            <br/>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}
