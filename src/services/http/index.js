const enHancedFetch = (method, url, data) => {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            console.log(res);

            return res.json();
        })
        .catch(error => {
            console.log(error);
        })
}

export default enHancedFetch;