function generateMenu () {
    const content = document.querySelector('#content')

    const section = document.createElement('div')
    section.classList.add('content-box')
    section.setAttribute('id','menu')

    const grid = document.createElement('div')
    grid.classList.add('w-layout-grid')
    grid.classList.add('grid')
    section.appendChild(grid)

    const menuCategories = (name) => {
        const category = document.createElement('div')
        category.classList.add('menu-category')
        category.setAttribute('id', name)
        grid.appendChild(category)

        function capitalizeFirstconstter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const h1 = document.createElement('h1')
        h1.textContent = capitalizeFirstconstter(name)
        category.appendChild(h1)

        return category
    }

    const starters = menuCategories('starters')
    const mains = menuCategories('mains')
    const desserts = menuCategories('desserts')

    const menuItems = (name, price, category) => {
        const item = document.createElement('div')
        item.classList.add('menu-item')

        const itemName = document.createElement('div')
        itemName.textContent = name
        item.appendChild(itemName)

        const itemPrice = document.createElement('div')
        itemPrice.textContent = price
        item.appendChild(itemPrice)

        category.appendChild(item)
    };
    
    menuItems('Waffle Fries', '20Rs', starters)
    menuItems('Cheese fries', '40Rs', starters)
    menuItems('Chicken nuggets', '60Rs', starters)
    menuItems('Chicken burger', '50Rs', mains)
    menuItems('Vegan burger', '40Rs', mains)
    menuItems('Ice cream', '60Rs', desserts)
    menuItems('Biryani', '250Rs', mains)

    content.appendChild(section)
}

export default generateMenu