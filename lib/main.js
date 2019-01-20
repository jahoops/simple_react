"use strict";

/* A one-liner, you can use inline js in html if you like */
ReactDOM.render(React.createElement(HelloWorldBanner, null), document.getElementById('content'));
function onTagChange() {
    console.log('a change')
}
ReactDOM.render(React.createElement(TagsInput, {value:['red'],onChange:onTagChange}), document.getElementById('tags'));