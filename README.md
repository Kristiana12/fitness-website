<a name="readme-top"></a>

# .CLUB

## About The Project
<br/>


I'm excited to present my very first project, which I've personally designed and programmed! The project is build with HTML and CSS, and there's a tiny bit of Javascript for the mobile navigation toggle. I've embraced a desktop-first approach while ensuring full responsiveness, so users can enjoy a seamless experience no matter what device they're using.

<br/>

### Built With

<br/>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) nbsp; nbsp;
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) nbsp; nbsp;
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) nbsp; nbsp;
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

<br/>


## Screenshot

![](screenshot.png)


<br/>

<!-- USAGE EXAMPLES -->

## Usage

<br/>

<p>
    I'm excited to present my very first project, which I've personally designed and programmed! The project is build with HTML and CSS, and there's a tiny bit of Javascript for the mobile navigation toggle. I've embraced a desktop-first approach while ensuring full responsiveness, so users can enjoy a seamless experience no matter what device they're using.
</p>

### Useful resources

- [srcset and sizes attributes by Kevin Powell](https://www.youtube.com/watch?v=2QYpkrX2N48) - A Youtube video from Kevin Powell that really helped me grasp the proper usage of the srcset and sizes attributes in the img tag. Thanks to this video, I now have a clear understanding of how to dynamically download the right image based on the user's device.
- [Mdn Documentation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - I found the MDN Documentation to be incredibly helpful as well, when it came to understanding responsive images. It provides a comprehensive and detailed explanation of everything you need to know about implementing responsive images.

### What I learned

<br>

<p>Resolution switching: Different sizes</p>

```html
<img
  class="coaches__img"
  srcset="
    images/coaches/alyssa-1000.jpg 1000w,
    images/coaches/alyssa-700.jpg   700w,
    images/coaches/alyssa-500.jpg   500w,
    images/coaches/alyssa-350.jpg   350w
  "
  sizes="(max-width: 650px) 50vw,
         (max-width: 1140px) 500px,
          100vw"
  src="images/coaches/alyssa-350.jpg"
  alt="alyssa mendosa"
/>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
