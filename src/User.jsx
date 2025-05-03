import PropTypes from 'prop-types'

function User(props){

    const loggedMessage = <h2>Welcome {props.username}</h2>
    const loggedOutMessage = <h2>"Please log in"</h2>

    if(props.isLoggedIn){
        return loggedMessage;
    }
    else{
        return loggedOutMessage;
    }
}

User.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

User.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}


export default User