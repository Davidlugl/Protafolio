$(document).ready(function() {
    let currentUserData = null; // To store the fetched user data

    // Funcion para obtener datos del usuario
    function fetchUser() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                currentUserData = data.results[0]; // Get the first user from the results
                console.log(currentUserData); // Log the data for debugging

                updateProfileDisplay(currentUserData, 'name'); // Display name initially, matching the data-info of the first icon
            },
            error: function(xhr, status, error) {
                console.error("Error fetching user:", status, error);
                $('#user-name').text("Fallo al cargar datos del usuario.");
                $('.greeting').text("Error"); // Update greeting on error
            }
        });
    }

    // Funcion a subir los datos del usuario al DOM
    function updateProfileDisplay(userData, infoType) {
        if (!userData) return;

        $('#profile-picture').attr('src', userData.picture.large);

        let greetingText = "";
        let mainInfoText = "";

        switch (infoType) {
            case 'name':
                greetingText = "Hola, mi nombre es";
                mainInfoText = `${userData.name.first} ${userData.name.last}`;
                break;
            case 'email':
                greetingText = "Mi correo electrónico es";
                mainInfoText = userData.email;
                break;
            case 'dob':
                greetingText = "Mi cumpleaños es";
                // Format date of birth to DD/MM/YYYY
                const dob = new Date(userData.dob.date);
                mainInfoText = `${dob.getDate()}/${dob.getMonth() + 1}/${dob.getFullYear()}`;
                break;
            case 'location':
                greetingText = "Mi dirección es";
                // Muestra la dirección completa
                mainInfoText = `${userData.location.street.number} ${userData.location.street.name}, ${userData.location.city}, ${userData.location.state}, ${userData.location.country}`;
                break;
            case 'phone':
                greetingText = "Mi número de teléfono es";
                mainInfoText = userData.phone;
                break;
            case 'login':
                greetingText = "Mi nombre de usuario es";
                mainInfoText = userData.login.username;
                break;
            case 'gender': // Added case for gender as well, though not an icon for it initially
                greetingText = "Mi género es";
                mainInfoText = userData.gender;
                break;
            default:
                greetingText = "Hola, mi nombre es";
                mainInfoText = `${userData.name.first} ${userData.name.last}`;
        }

        $('.greeting').text(greetingText);
        $('#user-name').text(mainInfoText);
    }

    // Event listener for icon clicks
    $('.icons-container .icon').on('click', function() {
        $('.icons-container .icon').removeClass('active'); // Remove active from all
        $(this).addClass('active'); // Add active to the clicked one

        const infoType = $(this).data('info'); // Get the data-info attribute
        updateProfileDisplay(currentUserData, infoType); // Update display
    });

    // Initial fetch of user data when the page loads
    fetchUser();
});