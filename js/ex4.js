const form = document.querySelector('.url');
const result = document.querySelector('.url__value');


export const urlToTag = () => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const text = data.text;
        const regExp = /(https?:\/\/(\w{1,}.\w{2,}))/ig;

        const tag = text.replace(regExp, '<a href="$1">$2</a>');
        result.innerHTML = '';
        result.append(tag);
    })
}