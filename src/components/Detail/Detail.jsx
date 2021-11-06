import {useSelector} from 'react-redux';
// import axios from 'axios';

function Detail () {

    const movieId = useSelector(store => store.movieId)

//     const fetchMovie = () => {
//         axios({
//             method: 'GET',
//             url: '/movieRouter/:id'
//         }).then ((response) => {
//             console.log('response', response)
//         }).catch((err) => {
//             console.log(err)
//         })
//     };
    console.log(movieId)

     return(
        <h1>hello</h1>
     )
}
export default Detail;