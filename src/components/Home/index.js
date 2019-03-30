import React, { Component } from "react";

import CardBlock from "../utils/card_block";

import { connect } from "react-redux";
import { getRepositoryDetails } from "../../actions/repositories_actions";

class Home extends Component {
  state = {
    items: [],
    page: 1,
    totalPages: 34,
    scrolling: false
  };

  componentDidMount() {
    this.loadRepository();
    window.addEventListener("scroll", this.handleScroll, false);
  }
  componentWillMount = () => {
    window.removeEventListener("scroll", this.handleScroll, false);
  };

  loadRepository = () => {
    const { page, items } = this.state;
    this.props.dispatch(getRepositoryDetails(page)).then(data =>
      this.setState({
        items: [...items, ...data.payload],
        scrolling: false
      })
    );
  };

  handleScroll = () => {
    const { scrolling, totalPages, page } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return;
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      this.loadMore();
    }
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadRepository
    );
  };

  render() {
    return <CardBlock list={this.state.items} load={this.state.scrolling} />;
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos
  };
};

export default connect(mapStateToProps)(Home);
