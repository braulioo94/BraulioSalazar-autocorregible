import Swal from 'sweetalert2';
import axios from 'axios';

// Common configs
const alerts = Swal.mixin({
    confirmButtonColor: '#18A0FB',
    cancelButtonColor: '#db5752'
});



// Success alert
// Alert.success(titulo, texto, OPCIONAL texto_boton_confirmacion (DEFAULT: OK))
const success = (title, text, confirmButtonText = 'OK') => {
    alerts.fire({
        title,
        text,
        icon: 'success',
        confirmButtonText
    });
}
// Error alert
// Alert.error(titulo, texto, OPCIONAL texto_boton_confirmacion (DEFAULT: Volver))
const error = (title, text, confirmButtonText = 'Volver') => {
    alerts.fire({
        title,
        text,
        icon: 'error',
        confirmButtonText
    });
}

const detalle =(title, text,imageUrl, confirmButtonText = 'Volver') => {
    
    Swal.fire({
        title,
        text,
        imageUrl,
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonText
      })
}
    const Alert = {
        success,
        error,
        detalle,
        
    }
    
    
    export default Alert;