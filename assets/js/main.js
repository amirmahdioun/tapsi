const serviceTabs = document.querySelectorAll('.service-tab')
const tabContents = document.querySelectorAll('.tab-content')

serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        serviceTabs.forEach(tab => tab.classList.remove('active'))
        tabContents.forEach(content => content.classList.remove('active'))

        document.querySelector(`#${tab.dataset.tabTarget}`).classList.add('active')
        tab.classList.add('active')

    })
})
