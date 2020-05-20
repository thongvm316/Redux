import React, { Component } from 'react'

class Postform extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())    
            .then(data => console.log(data))    
    }

    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">Title: </label><br/>
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Body: </label><br/>
                        <textarea 
                            name="body" 
                            id="" cols="30" rows="10" 
                            value={this.state.body} 
                            onChange={this.onChange}
                        >
                        </textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform
