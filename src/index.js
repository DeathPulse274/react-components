import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className = "ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo="today at 9:00 PM"  comments={faker.random.words()} imageSource={faker.image.avatar()} />
            <CommentDetail author={faker.name.firstName()} timeAgo="yesterday at 4:00 PM" comments={faker.random.words()} imageSource={faker.image.avatar()} />
            <CommentDetail author={faker.name.firstName()} timeAgo="today at 10:00 AM" comments={faker.random.words()} imageSource={faker.image.avatar()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.random.number()} comments={faker.random.words()} imageSource={faker.image.avatar()} />
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector('#root'));