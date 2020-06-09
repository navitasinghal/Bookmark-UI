import React from "react";
import Axios from "axios";
import {
  Typography,
  Divider,
  ExpansionPanel,
  Link,
  Grid,
  ExpansionPanelDetails,
  LinearProgress,
  ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const GET_BOOKMARK = "http://127.0.0.1:5000/bookmark/folder";
const GET_BOOKMARK_URLS = "http://127.0.0.1:5000/bookmark/urls";

function Bookmark() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [bookmarkList, setBookmarkList] = React.useState([]);
  const [urlList, setUrlList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  function LoadingBar() {
    if (loading) {
      return (
        <div>
          <LinearProgress />
          <LinearProgress color="secondary" />
        </div>
      );
    }
    return null;
  }

  const getBookMarks = () => {
    Axios.get(GET_BOOKMARK).then((response) => {
      console.log(response.data);
      setBookmarkList(response.data);
    });
    Axios.get(GET_BOOKMARK_URLS).then((response) => {
      console.log(response.data);
      setUrlList(response.data);
      setLoading(false);
    });
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  React.useEffect(() => {
    getBookMarks();
  }, []);
  return (
    <React.Fragment>
      <div className="scroll">
        <Grid container>
          <Grid item xs={12} className="spacing1">
            {LoadingBar()}

            {urlList.map((item, index) => (
              <div className="spacing" key={index}>
                <ExpansionPanel
                  TransitionProps={{ unmountOnExit: true }}
                  key={index}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    // onClick={() => getSummary(item.email)}
                  >
                    <div>
                      <Typography>
                        <Link
                          className="item"
                          onClick={(e)=>window.open(item.url, "_blank")}
                        >
                          {item.name}
                        </Link>
                      </Typography>
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Divider />
                    <Grid container spacing={6}>
                      <Grid item xs={12}>
                        Certain customers love indulging in products they know
                        are crafted and created by companies who want to deliver
                        quality products to their customers. And companies like
                        Campos Coffee know exactly how to cater to those buyers.
                        Campos uses its website as a way to highlight the time
                        and effort their team puts into their coffee, how it
                        benefits the community, and why you’ll feel good buying
                        it. All these points get wrapped into a wonderful story
                        that they display on the homepage and throughout every
                        other site page.
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Bookmark;
