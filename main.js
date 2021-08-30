var modal = document.querySelector('#feedbackModal')
var modalBtn = document.querySelector('#modalBtn')
var closeBtn = document.querySelector('.closeBtn')

modalBtn.addEventListener('click', openModal)

closeBtn.addEventListener('click', closeModal)

function openModal () {
    modal.style.display = 'block';
}

function closeModal () {
    modal.style.display = 'none';
}