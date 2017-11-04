import React, {
  Component
} from 'react'

class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comments.username} </span>：
        </div>
        <p>{this.props.comments.content}</p>
      </div>
    )
  }
}

export default Comment