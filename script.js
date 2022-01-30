(function () {

    const detailsForm = document.querySelector('#destination_details_form');
    

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const destName = event.target.elements['name'].value;
        const destLoc = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDesc = event.target.elements["description"].value;

        for (let i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        //create card
        const destCard= createDestinationCard(destName, destLoc, destPhoto, destDesc);

        const wishListContainer = document.getElementById("destinations_container");

        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = "My Wish List";

        }

        document.querySelector('#destinations_container').appendChild(destCard);

        function createDestinationCard(name, location, photoURL, desc) {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.setAttribute('alt', name);

            const constantPhotoUrl = 'images/signpost.jpg';
            if (photoURL.length === 0) {
                img.setAttribute('src', constantPhotoUrl);
            } else {
                img.setAttribute('src', destPhoto);
            }

            card.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.className = "card-body";

            const cardTitle = document.createElement('h3');
            cardTitle.innerHTML = destName;
            cardBody.appendChild(cardTitle);

            const cardLoc = document.createElement('h4');
            cardLoc.innerHTML = destLoc;
            cardBody.appendChild(cardLoc);

            if (desc.length !== 0) {
                const cardText = document.createElement('p');
                cardText.className = "card-text";
                cardText.innerHTML = destDesc;
                cardBody.appendChild(cardText);
            }
            const CardDeleteBtn = document.createElement('button');
            CardDeleteBtn.innerText = 'Remove';
            CardDeleteBtn.addEventListener('click', removeDestination);
            cardBody.appendChild(CardDeleteBtn);

            card.appendChild(cardBody);

            return card;
           
        }
    };

function removeDestination(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
            };
        
//add the card
            

})();