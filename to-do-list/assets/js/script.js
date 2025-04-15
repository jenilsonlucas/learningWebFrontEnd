document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        const isChecked = checkbox.getAttribute('aria-checked') === 'true';

        checkbox.setAttribute('aria-checked', !isChecked);
    })
})