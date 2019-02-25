import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

class SearchBar extends React.Component {
  state = { term: "", timeOutId: null };

  onInputChange = event => {
    this.setState({ term: event.target.value });
    if (this.state.timeOutId) {
      clearTimeout(this.state.timeOutId);
    }
    const timeOutId = setTimeout(
      () => this.props.searchVideos(this.state.term),
      750
    );
    this.setState({ timeOutId });
  };

  onFormSubmit = e => e.preventDefault();

  render() {
    return (
      <Form inline onSubmit={this.onFormSubmit} className="textCenter">
        <FormGroup className="mb-4 mr-sm-2 mb-sm-0">
          <Label for="searchInput" className="mr-sm-2">
            Search for videos
          </Label>
          <Input
            type="text"
            id="searchInput"
            placeholder="Start typing"
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBar;
