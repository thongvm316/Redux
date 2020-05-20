import React, { Component } from 'react'

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    componentWillMount() { // duoc goi truoc khi render first time
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}))
    }
    render() {
        console.log(this.state.posts)
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>posts</h1>
                {postItems}
            </div>
        )
    }
}

export default Posts
