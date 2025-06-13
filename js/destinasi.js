// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

});

function moveToDetail(locationName){
	localStorage.setItem('selectedLocation', locationName);
	window.location.href = `${locationName}.html`
}

// Fungsi untuk toggle dropdown
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const button = dropdown.previousElementSibling;
   
    // Toggle dropdown yang diklik
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        button.innerHTML = 'Lihat Detail <i class="fas fa-chevron-down"></i>';
    } else {
        dropdown.style.display = "block";
        button.innerHTML = 'Sembunyikan <i class="fas fa-chevron-up"></i>';
    }
}

// Fungsi untuk filter destinasi (TIDAK BERUBAH)
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Filter cards
         const category = button.dataset.category;
        document.querySelectorAll('.destination-card').forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

