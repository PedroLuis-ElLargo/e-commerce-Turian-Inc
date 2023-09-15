document.addEventListener('DOMContentLoaded', function () {
    const profilePictureInput = document.getElementById('profile-picture');
    const imagePreview = document.getElementById('image-preview');

    profilePictureInput.addEventListener('change', function () {
        const file = profilePictureInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imagePreview.src = e.target.result;
            };

            reader.readAsDataURL(file);
        } else {
            // Si no se selecciona un archivo, borra la previsualización
            imagePreview.src = '';
        }
    });
});
