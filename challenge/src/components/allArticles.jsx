import React, { Component } from "react";
import auth from "../services/authService";
import Paper from "@material-ui/core/Paper";
import { PagingState, IntegratedPaging } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import * as userService from "../services/userService";
import { loadProgressBar } from "axios-progress-bar";

class AllArticles extends Component {
  constructor(props) {
    super(props);
    const currentUser = auth.getCurrentUser();
    const user = currentUser.username;
    this.state = {
      user: { user },
      articles: [],
    };
  }
  getAllArticles = async () => {
    loadProgressBar();
    const { user } = this.state.user;
    const articles = await userService.getAllArticles(user);
    this.setState({ articles: articles });
  };
  async componentDidMount() {
    await this.getAllArticles();
  }
  render() {
    const columns = [
      { name: "rowNumber", title: "#" },
      { name: "title", title: "Title" },
      { name: "author_username", title: "Author" },
      { name: "body", title: "Expert" },
      { name: "tags", title: "Tags" },
      { name: "createdAt", title: "Created" },
    ];
    const rows = this.state.articles;
    return (
      <div className="col-12 p-3">
        <Paper>
          <Grid rows={rows} columns={columns}>
            <PagingState defaultCurrentPage={0} pageSize={5} />
            <IntegratedPaging />
            <Table />
            <TableHeaderRow />
            <PagingPanel />
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default AllArticles;
