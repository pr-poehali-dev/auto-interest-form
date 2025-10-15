document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastDescription = document.getElementById('toastDescription');

    function showToast(title, description, type = 'success') {
        toastTitle.textContent = title;
        toastDescription.textContent = description;
        
        toast.className = 'toast show ' + type;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            fullName: document.getElementById('fullName').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            country: document.getElementById('country').value
        };

        if (!formData.fullName || !formData.phone || !formData.country) {
            showToast('Ошибка', 'Пожалуйста, заполните все поля', 'error');
            return;
        }

        console.log('Заявка:', formData);

        showToast('Заявка отправлена!', 'Мы свяжемся с вами в ближайшее время', 'success');

        form.reset();
    });

    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value[0] === '7' || value[0] === '8') {
                value = value.substring(1);
            }
            
            let formatted = '+7';
            
            if (value.length > 0) {
                formatted += ' (' + value.substring(0, 3);
            }
            if (value.length >= 4) {
                formatted += ') ' + value.substring(3, 6);
            }
            if (value.length >= 7) {
                formatted += '-' + value.substring(6, 8);
            }
            if (value.length >= 9) {
                formatted += '-' + value.substring(8, 10);
            }
            
            e.target.value = formatted;
        }
    });
});
