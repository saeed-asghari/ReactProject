import React, { Component } from "react";
import auth from "../services/authService";
import Paper from "@material-ui/core/Paper";
import {
  PagingState,
  IntegratedPaging,
  EditingState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableColumnResizing,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
import { toast } from "react-toastify";
import * as userService from "../services/userService";
import { loadProgressBar } from "axios-progress-bar";
import Spinner from "react-bootstrap/Spinner";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
class AllArticles extends Component {
  constructor(props) {
    super(props);
    const currentUser = auth.getCurrentUser();
    const user = currentUser.username;
    this.state = {
      user: { user },
      articles: [],
      loading: true,
    };
  }
  getAllArticles = async () => {
    loadProgressBar();
    const { user } = this.state.user;
    const articles = await userService.getAllArticles(user);
    this.setState({ articles: articles, loading: false });
  };
  async componentDidMount() {
    await this.getAllArticles();
  }
  deleteArticles = async (index) => {
    const originalArticles = this.state.articles;
    let articles = originalArticles.filter(
      (row) => row !== originalArticles[index]
    );
    this.setState({ articles: articles });
    try {
      await userService.deleteArticles(originalArticles[index].slug);
      toast.success("Article Deleted successful");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.setState({ articles: originalArticles });
    }
  };

  onCurrentPageChange = (page) => {
    return page;
  };
  //onCurrentPageChange()
  render() {
    this.onCurrentPageChange(1);
    const columns = [
      { name: "rowNumber", title: "#" },
      { name: "title", title: "Title" },
      { name: "author_username", title: "Author" },
      { name: "body", title: "Expert" },
      { name: "tags", title: "Tags" },
      { name: "createdAt", title: "Created" },
    ];
    const defaultColumnWidths = [
      { columnName: "rowNumber", width: 100 },
      { columnName: "title", width: 100 },
      { columnName: "author_username", width: 180 },
      { columnName: "body", width: 240 },
      { columnName: "tags", width: 180 },
      { columnName: "createdAt", width: 150 },
    ];
    const rows = this.state.articles;
    const loading = this.state.loading;
    const commitChanges = ({ deleted }) => {
      //   if (deleted) {
      //     const index = deleted[0];
      //     this.deleteArticles(index);
      //   }
      confirmAlert({
        title: "Delete Article",
        message: "Are you sure to delete Article?",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              if (deleted) {
                const index = deleted[0];
                this.deleteArticles(index);
              }
            },
          },
          {
            label: "No",
            onClick: () => ("Click No"),
          },
        ],
      });

    };
    return (
      <div className="col-12 p-3">
        {loading && <Spinner animation="border" role="status" />}
        {!loading && (
          <Paper>
            <Grid rows={rows} columns={columns}>
              <PagingState
                defaultCurrentPage={0}
                pageSize={5}
                onCurrentPageChange={this.onCurrentPageChange}
              />
              <IntegratedPaging />
              <EditingState onCommitChanges={commitChanges} />
              <Table />
              <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
              <TableEditColumn showDeleteCommand />
              <TableHeaderRow />
              <PagingPanel />
            </Grid>
          </Paper>
        )}
      </div>
    );
  }
}

export default AllArticles;
