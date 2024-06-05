const showPopupButtons = document.querySelectorAll('.show-popup');
const closeButtons = document.querySelectorAll('.close-btn');

showPopupButtons.forEach(button => {
    button.onclick = () => {
        const popupId = button.getAttribute('data-popup-id');
        const popup = document.getElementById(popupId);
        popup.classList.add('active');
    }
});

closeButtons.forEach(button => {
    button.onclick = () => {
        const popupContainer = button.closest('.popup-container');
        popupContainer.classList.remove('active');
    }
});
