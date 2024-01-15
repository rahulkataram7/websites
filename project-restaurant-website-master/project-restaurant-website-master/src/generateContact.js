function generateContact() {
    const content = document.querySelector('#content')

    const section = document.createElement('div')
    section.classList.add('content-box')

    const h1 = document.createElement('h1')
    h1.textContent = 'Get in touch'
    section.appendChild(h1)

    const contactItem = (name, link, anchorText) => {
        const div = document.createElement('div')
        div.classList.add('contact-items')
        div.textContent = `${name}:`

        const a = document.createElement('a')
        a.classList.add('contact-link')
        a.textContent = anchorText
        a.href = link
        div.appendChild(a)

        section.appendChild(div)
    }

    contactItem('Email', 'mailto:rahulk@gmail.com', 'rahulk@gmail.com')
    contactItem('LinkedIn', 'https://www.linkedin.com/in/rk/', 'linkedin.com/in/rk')
    contactItem('Github', 'https://github.com/rk', 'rk')

    content.appendChild(section)
}

export default generateContact