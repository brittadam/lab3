export default class Cats {
    constructor() {
        this.getCats();
    }

    getCats(){
        let url = `https://meowfacts.herokuapp.com/`
        fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("#cats").innerHTML = `${data.data[0]}`;
        }).catch(err => {
            console.log(err);
        });
    };
}