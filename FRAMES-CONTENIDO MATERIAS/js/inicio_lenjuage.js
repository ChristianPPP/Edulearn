{/* <button id="open" class= "ingresar">Ingresar</button>

<div class="overlay" id="overlay">
                <div class="popup" id="popup">
                    <a href="#" id="cerrar-popup" class="cerrar-popup"><i class="fa-solid fa-circle-xmark"></i></a>
                    <h3>REGISTRO EXITOSO!</h3>
                    <img src="pictures/popup.png" width="500px" height="170">
                    <h4>Gracias por formar parte de nuestro grupo de aprendizaje</h4>
                </div>
            </div> */}

            //para botones de ingresar 


            //botones de ingresar apartado "Nuevos"

            //1
            const open2 = document.getElementById('open2');
            const modal_container2 = document.getElementById('modal_container1');
            const close2 = document.getElementById('close1');
            
            open2.addEventListener('click', () => {
                modal_container2.classList.add('show');  
            });
            
            close2.addEventListener('click', () => {
                modal_container2.classList.remove('show');
             });

            //2
            const open3 = document.getElementById('open3');
            const modal_container3 = document.getElementById('modal_container1');
            const close3 = document.getElementById('close1');
            
            open3.addEventListener('click', () => {
                modal_container3.classList.add('show');  
            });
            
            close3.addEventListener('click', () => {
                modal_container3.classList.remove('show');
             });
            

             //botones de ingresar apartado "Podrían interesarte"
            //1
             const open = document.getElementById('open');
            const modal_container = document.getElementById('modal_container');
            const close = document.getElementById('close');
            
            open.addEventListener('click', () => {
              modal_container.classList.add('show');  
            });
            
            close.addEventListener('click', () => {
              modal_container.classList.remove('show');
            });

            //2
            const open1 = document.getElementById('open1');
            const modal_container1 = document.getElementById('modal_container');
            const close1 = document.getElementById('close');
            
            open1.addEventListener('click', () => {
                modal_container1.classList.add('show');  
            });
            close1.addEventListener('click', () => {
                modal_container1.classList.remove('show');
             });
