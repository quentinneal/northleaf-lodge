// TODO: Find a more efficient way to import data
// TODO: Remember to reduce image quality to improve slider speed

import sliderImage1 from '../../assets/imageone.jpg';
import sliderImage2 from '../../assets/lycsarchitectureH77w4l3UWy4unsplash.jpg';
import sliderImage3 from '../../assets/svenmiekeMsCgmHuirDounsplash.jpg';
import sliderImage4 from '../../assets/brettjordan7aygbuJpgxEunsplash(2).jpg';
import sliderImage5 from '../../assets/brettjordan7aygbuJpgxEunsplash(1).jpg';

export const sliderData = [{
    id: 'slider1',
    image: sliderImage1,
    title: 'Natural Rooms',
    description: 'High quality, nature themed room varieties.',
    buttonLink: '/search',
    buttonText: 'Find Rooms'
},
{
    id: 'slider2',
    image: sliderImage2,
    title: 'Spacious Restaurant',
    description: 'Eat food inspired by the northwest.',
    buttonLink: '/restaurant',
    buttonText: 'Restaurant Details'
},
{
    id: 'slider3',
    image: sliderImage3,
    title: 'Professional Gym',
    description: 'Modern machines and weights for your fitness goals.',
    buttonLink: '/gym',
    buttonText: 'Gym Details'
},
{
    id: 'slider4',
    image: sliderImage4,
    title: 'Warm Pool',
    description: 'Large pool with heater.',
    buttonLink: '/pool',
    buttonText: 'Pool Details'
},
{
    id: 'slider5',
    image: sliderImage5,
    title: 'Elegant Ballroom',
    description: 'Large ballroom for your events.',
    buttonLink: '/ballroom',
    buttonText: 'Ballroom Details'
}];