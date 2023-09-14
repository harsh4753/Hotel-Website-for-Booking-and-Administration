import axios from 'axios';

const apiUrl = 'http://localhost:8081';

export const submitFormData = async (formData) => {
  try {
    const response = await axios.post(`${apiUrl}/form`, formData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
