const form = document.querySelector('.filter');
const value = document.querySelector('.filter__value');

export const formFilter = () => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nameList = Object.fromEntries(formData);
        const data = nameList.filter.split(',');
        const result = data.filter(name => name.match(/\w\.(jsx|js|ts)/));
        value.innerHTML = '';
        value.append([...result]);
    })
};