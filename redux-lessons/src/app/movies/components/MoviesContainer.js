import React from 'react'
import { connect } from 'react-redux'

const MoviesContainer = (props) => 
    <ul>
        {props.movies.list.map( movie => <li>{ movie }</li> )}
    </ul>
    
const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, {})( MoviesContainer )