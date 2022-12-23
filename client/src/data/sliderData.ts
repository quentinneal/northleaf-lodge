// TODO: Find a more efficient way to import data
// TODO: Remember to reduce image quality to improve slider speed

import bedroomImages from './bedroomImages'
import restaurantImages from './restaurantImages'
import gymImages from './gymImages'
import poolImages from './poolImages'
import ballroomImages from './ballroomImages'

export const sliderData = [{
    id: 'slider1',
    image: {
        image320: bedroomImages.image320,
        image640: bedroomImages.image640,
        image960: bedroomImages.image960,
        image1280: bedroomImages.image1280,
        image1600: bedroomImages.image1600,
        image1920: bedroomImages.image1920,
        image2240: bedroomImages.image2240,
        image2560: bedroomImages.image2560,
        image2880: bedroomImages.image2880,
        image3200: bedroomImages.image3200,
        image3520: bedroomImages.image3520,
        image3840: bedroomImages.image3840,
    },
    title: 'Natural Rooms',
    description: 'High quality, nature themed room varieties.',
    buttonLink: '/search',
    buttonText: 'Find Rooms'
},
{
    id: 'slider2',
    image: {
        image320: restaurantImages.image320,
        image640: restaurantImages.image640,
        image960: restaurantImages.image960,
        image1280: restaurantImages.image1280,
        image1600: restaurantImages.image1600,
        image1920: restaurantImages.image1920,
        image2240: restaurantImages.image2240,
        image2560: restaurantImages.image2560,
        image2880: restaurantImages.image2880,
        image3200: restaurantImages.image3200,
        image3520: restaurantImages.image3520,
        image3840: restaurantImages.image3840,
    },
    title: 'Spacious Restaurant',
    description: 'Eat food inspired by the northwest.',
    buttonLink: '/restaurant',
    buttonText: 'Restaurant Details'
},
{
    id: 'slider3',
    image: {
        image320: gymImages.image320,
        image640: gymImages.image640,
        image960: gymImages.image960,
        image1280: gymImages.image1280,
        image1600: gymImages.image1600,
        image1920: gymImages.image1920,
        image2240: gymImages.image2240,
        image2560: gymImages.image2560,
        image2880: gymImages.image2880,
        image3200: gymImages.image3200,
        image3520: gymImages.image3520,
        image3840: gymImages.image3840,
    },
    title: 'Professional Gym',
    description: 'Modern machines and weights for your fitness goals.',
    buttonLink: '/gym',
    buttonText: 'Gym Details'
},
{
    id: 'slider4',
    image: {
        image320: poolImages.image320,
        image640: poolImages.image640,
        image960: poolImages.image960,
        image1280: poolImages.image1280,
        image1600: poolImages.image1600,
        image1920: poolImages.image1920,
        image2240: poolImages.image2240,
        image2560: poolImages.image2560,
        image2880: poolImages.image2880,
        image3200: poolImages.image3200,
        image3520: poolImages.image3520,
        image3840: poolImages.image3840,
    },
    title: 'Warm Pool',
    description: 'Large pool with heater.',
    buttonLink: '/pool',
    buttonText: 'Pool Details'
},
{
    id: 'slider5',
    image: {
        image320: ballroomImages.image320,
        image640: ballroomImages.image640,
        image960: ballroomImages.image960,
        image1280: ballroomImages.image1280,
        image1600: ballroomImages.image1600,
        image1920: ballroomImages.image1920,
        image2240: ballroomImages.image2240,
        image2560: ballroomImages.image2560,
        image2880: ballroomImages.image2880,
        image3200: ballroomImages.image3200,
        image3520: ballroomImages.image3520,
        image3840: ballroomImages.image3840,
    },
    title: 'Elegant Ballroom',
    description: 'Large ballroom for your events.',
    buttonLink: '/ballroom',
    buttonText: 'Ballroom Details'
}];