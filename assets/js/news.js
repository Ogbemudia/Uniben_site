
const section = document.querySelector('.section-list')


let news = [
    {
        title: "46th Matriculation Ceremony",
        type: "NEWS",
        content: "Students' Matriculation Ceremony in the University of Benin.",
        image: "./assets/img/news/news_image.jpg",
        alt: "46th Matriculation Ceremony"
    },
    {
        title: "234th Inaugural Lecture",
        type: "VIDEOS",
        content: "234 Inaugural Lecture of the University of Benin. Watch live by clicking here.",
        image: "./assets/img/videos/video_image.jpg",
        alt: "234th Inaugural Lecture"
    },
    {
        title: "Anti-Corruption Sensitization Lecture",
        type: "LECTURES",
        content: "Anti-Corruption Sensitization Lecture at the Main Auditorium of the University of Benin.",
        image: "./assets/img/lectures/lecture_image.jpg",
        alt: "Anti-Corruption Sensitization Lecture"
    },
    {
        title: "AEBRG Presentation in Session",
        type: "RESEARCH",
        content: "The University of Benin has numerous research groups engaged in conducting various researches in the University.",
        image: "./assets/img/research/research_image.jpg",
        alt: "AEBRG Presentation in Session"
    }
]

news.forEach(({title, type, content, image,alt}, i) => {
    const slide = document.createElement('article');
    slide.classList.add('news-section')
    slide.classList.add('blog-left')


    const div_image = document.createElement('div')
    
    div_image.classList.add('blog-left-image')

    const news_image = document.createElement('img')
    news_image.classList.add('news-blog-image')
    news_image.alt = alt
    news_image.src = image
    div_image.appendChild(news_image)
  
    const slide_content = document.createElement('div')
    slide_content.classList.add('blog-right-info')

    const content_title = document.createElement('h5')
    content_title.textContent = title

    const content_type = document.createElement('h6')
    content_type.textContent = type

   
    const content_content = document.createElement('p')
    content_content.textContent = content

    slide_content.appendChild(content_title)
    slide_content.appendChild(content_content)
    slide_content.appendChild(content_type)

    slide.appendChild(div_image)
    slide.appendChild(slide_content)

    section.appendChild(slide)
})

/* next_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active')
    let nextSibling = active_slide.nextElementSibling

    if (nextSibling == null) {
        nextSibling = first_slide
    }

    if (nextSibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active')
        nextSibling.classList.add('active')
    }
})

prev_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active')
    let nextSibling = active_slide.previousElementSibling

    if (nextSibling == null || !nextSibling.classList.contains('slider__slide')) {
        nextSibling = last_slide
    }

    if (nextSibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active')
        nextSibling.classList.add('active')
    }
})

function TimerHandler () {
    const active_slide = document.querySelector('.slider__slide.active')
    let nextSibling = active_slide.nextElementSibling

    if (nextSibling == null) {
        nextSibling = first_slide
    }

    if (nextSibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active')
        nextSibling.classList.add('active')
    }
}

 */