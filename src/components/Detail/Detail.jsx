import useSelector from 'react-redux';
import axios from 'axios';

function Detail () {

    const films = useSelector(store => store.movies)

    const fetchMovie = () => {
        axios({
            method: 'GET',
            url: '/movieRouter/:id'
        }).then ((response) => {
            console.log('response', response)
        }).catch((err) => {
            console.log(err)
        })
    };

    return(
        
    )
}
export default Detail;