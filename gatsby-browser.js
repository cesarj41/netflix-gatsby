const React = require("react")
const { GlobalStyles } = require('./src/global-styles')
const { FirebaseContext } = require('./src/context/firebase')
const { firebase } = require('./src/lib/firebase.prod')

require('normalize.css');


exports.wrapPageElement = ({ element }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            {element}
        </FirebaseContext.Provider>
    )
}