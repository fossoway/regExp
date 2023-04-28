const form = document.querySelector('.brackets');
const result = document.querySelector('.brackets__value');


export const bracketSearch = () => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const text = Object.fromEntries(formData);
        const data = text.text;
        const allText = data.matchAll(/\((.*?)\)/g);
        const list = Array.from(allText);
        result.innerHTML = '';
        list.forEach(item => result.append(`${item[0]}\n`));
    })
}