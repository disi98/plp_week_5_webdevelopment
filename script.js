document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamicText');
    const description = document.getElementById('description');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const styleBtn = document.getElementById('styleBtn');
    const toggleItemBtn = document.getElementById('toggleItemBtn');
    const specialsList = document.getElementById('specials');
    let specialAdded = false;
    let styleToggled = false;

    changeTextBtn.addEventListener('click', () => {
        dynamicText.textContent = 'Experience the Aroma!';
        description.textContent = 'Freshly brewed just for you.';
    });

    styleBtn.addEventListener('click', () => {
        styleToggled = !styleToggled;
        document.body.style.backgroundColor = styleToggled ? '#333' : '#fdf6e3';
        document.body.style.color = styleToggled ? '#fdf6e3' : '#333';
    });

    toggleItemBtn.addEventListener('click', () => {
        if (!specialAdded) {
            const item = document.createElement('li');
            item.textContent = "Today's Special: Caramel Latte";
            item.id = 'specialItem';
            specialsList.appendChild(item);
        } else {
            const existing = document.getElementById('specialItem');
            if (existing) specialsList.removeChild(existing);
        }
        specialAdded = !specialAdded;
    });
});