import axios from 'axios';

export default {
  teste: async () => {
    axios.get('http://10.0.2.2:5000/api')
      .then(response => response.data
      ).then(data => console.log(data));
  }
}
