export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  videoUrl: string;
  thumbnail: string;
  content: string;
  likes: number;
  comments: number;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}