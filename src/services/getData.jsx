export default function getData() {

    return fetch('data.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            return jsonObject.hosts;
        }).then((a) => {
            /*  return array results   */
            return (a);
        });
}