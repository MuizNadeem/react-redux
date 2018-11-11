import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class PostsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }
  formSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }
    
    //call action
    this.props.createPost(post);


  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.formSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input onChange={this.changeHandler} name="title" type="text" />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea onChange={this.changeHandler} name="body" />
          </div>
          <div>
            <br />
            <button type="submit">Submit</button>
          </div>
          <h4>{this.state.title}</h4>
        </form>
      </div>
    )
  }
}


PostsForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostsForm);