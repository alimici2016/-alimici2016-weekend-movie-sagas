import axios from 'axios';

function MovieForm() {

    const [movie, setMovie]

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


        return(
            
        )
    }

}