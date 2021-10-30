import React from 'react';


const SocialNetwork = () => {
    const anim = () => {
        let navLinks = document.querySelectorAll('.social-network a');

        navLinks.forEach(link =>{
            link.addEventListener('mouseover', (e) =>{
                let attrX = e.offsetX-20;
                let attrY = e.offsetX-13;

                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
                
            });
            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            })
        })
    }
    return(
        <div class="social-network">
            <ul class="content">
                <a href="https://www.facebook.com/nicolas.touzard1" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-facebook"></i></li>
                </a>
                <a href="https://twitter.com/Nico_Touzy" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-twitter"></i></li>
                </a>
                <a href="https://www.instagram.com/nto_59/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
            </ul>

        </div>

    );
};
export default SocialNetwork;