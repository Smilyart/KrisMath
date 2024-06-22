document.querySelectorAll('.faq__accordion').forEach((el) => {
    el.addEventListener('click', () => {
        let faq__content = el.nextElementSibling;
        
        if (faq__content.style.maxHeight) {
            document.querySelectorAll('.faq__content').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.faq__content').forEach((el) => el.style.maxHeight = null)
            faq__content.style.maxHeight = faq__content.scrollHeight + 'px'
        }
    })
})