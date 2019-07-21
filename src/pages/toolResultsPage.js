import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import toolsResult from '../common/toolsResults'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360
    },
}));

function ListItemLink(props) {
    return <ListItem button component = "a" {
        ...props
    }
    />;
}

export default function toolResult() {
  const classes = useStyles();
    return (
        <Layout>
            <div className="body-margin-top" />
            <SEO title="tool result" />
            <h1>Tools Link</h1>
            <div>
                {toolsResult.map( (i, index) => 
                    <div key={index} style={{marginBottom: "25px"}}>
                    <h3>{i.name}</h3>
                        <div>
                            <List component="nav" className={classes.root} aria-label="Contacts">
                                <div>
                                    {i.links.map( (list, index) => <ListItemLink href={list.link} target="_blank" key={index}><ListItemText inset primary={list.name}
                                     /></ListItemLink>)}
                                </div>
                            </List>
                        </div>
                    </div>
                    )}
            </div>
            <br/>
            <Link to="/"><span className="link">Go Back to Home</span></Link>
        </Layout>
    )
}
