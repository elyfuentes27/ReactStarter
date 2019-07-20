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
import Cta from "../components/cta"
import toolsResult from '../common/toolsResults'
import { black } from "ansi-colors";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        color: 'black'    },
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
            <h2>Recommendated tools</h2>
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
                <h2>Recommendated architecture</h2>

                <h3>State</h3>
                <p>Looks like you don't have to handle a lot of states, an alternative to using Redux is using React Context, which provides a simpler way to communicate data between components and the state can be allocated within the Context provider.</p>

                <h3>UI Libraries.</h3>            
                <p>If your app requires a low to medium level of customization you can use UI components from libraries like Material UI, Ant design or Bootstrap.</p>

                <h3>Styling components.</h3>            
                <p>Seems like you require a lot of components for your application, a library that you may want to keep in mind is styled components, which will help you to avoid naming collisions and to keep your CSS code isolated.</p>                
            </Grid>
            </Grid>
            <div className="full-width-ctas">
            <Link to="/question-4/">
                <Cta text="Go back to Question 4" arrowType="back" />
            </Link>
            </div>
            <br/>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}
