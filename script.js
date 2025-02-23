document.querySelectorAll('.chapter').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const subCheckboxes = checkbox.parentNode.querySelectorAll('input[type="checkbox"]');
        
        subCheckboxes.forEach(function (subCheckbox) {
            subCheckbox.checked = checkbox.checked;
        });
    });
});
