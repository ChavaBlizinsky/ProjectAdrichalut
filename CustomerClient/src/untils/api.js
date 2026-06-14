import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7110/api',
});

export const getTestimonials = () => api.get('/testimonials');
export const postTestimonial = (testimonial) => api.post('/testimonials', testimonial);