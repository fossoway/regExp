const form = document.querySelector('.validation');
const result = document.querySelector('.validation__info');


export const emailValidation = () => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = Object.fromEntries(formData);
        const data = email.email;
        data.match(/\w+@[a-zA-Z]{3,}\.[a-zA-z]{2,5}/) ? result.innerHTML = 'Корректное значение' : result.innerHTML = 'Некорректное значение';
    })
}