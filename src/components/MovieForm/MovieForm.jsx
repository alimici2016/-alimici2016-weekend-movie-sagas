import axios from 'axios';
import {useState} from 'react'

function MovieForm() {

    const [movie, setMovie] = useState([])

    const postData = () => {
        axios({
            method: 'POST',
            url: '/api/movie',
            data: movie
        }).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        });

    }

};

export default MovieForm 