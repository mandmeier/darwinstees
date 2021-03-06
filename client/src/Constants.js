// Constants.js
const prod = {
    url: {
        //BACKEND_URL: 'https://www.darwinstees.com'
        BACKEND_URL: 'https://darwinstees.herokuapp.com'
   }
}

const dev = {
    url: {
     BACKEND_URL: 'http://localhost:5000'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;