document.addEventListener('DOMContentLoaded', function() {
    const writeReviewButton = document.querySelector('#middle-middle-col button');
    const reviewFormContainer = document.querySelector('#review-form');
    const reviewForm = document.querySelector('#reviewForm');
    const reviewsContainer = document.querySelector('#reviews-container');
    const starInputs = document.querySelectorAll('input[name="starRating"]');
    const currentDate = new Date();

    writeReviewButton.addEventListener('click', function() {
        reviewFormContainer.style.display = 'block';
    });

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameCaption = reviewForm.querySelector('#nameCaption').value;
        const reviewHeader = reviewForm.querySelector('#reviewHeader').value;
        const reviewText = reviewForm.querySelector('#reviewText').value;
        const selectedRating = getSelectedRating();
        addReview(nameCaption, reviewHeader, reviewText, selectedRating);
        reviewForm.reset();
        reviewFormContainer.style.display = 'none';
    });

    function getSelectedRating() {
        let selectedRating = 0;
        starInputs.forEach(input => {
            if (input.checked) {
                selectedRating = parseInt(input.value.charAt(0)); // Extracting the numeric value from the input value
            }
        });
        return selectedRating;
    }

    function addReview(nameCaption, reviewHeader, reviewText, rating) {
        const reviewElement = document.createElement('div');
        reviewElement.setAttribute('class', 'ml-10');
        
        // Create container for star rating and header
        const ratingHeaderContainer = document.createElement('div');
        ratingHeaderContainer.setAttribute('class', 'flex-center');
    
        // Create star rating element
        const ratingElement = document.createElement('p');
        ratingElement.setAttribute('class', 'stars review');

        for (let i = 0; i < rating; i++) {
            ratingElement.innerHTML += '&#9733;'; // Unicode for star icon
        }

        // Code to add empty stars
        const fiveStar = 5;
        let leftOver = fiveStar - rating;
        if (leftOver > 0) {
            for (let i = 0; i < leftOver; i++) {
                ratingElement.innerHTML += "☆";
            }
        }

        // Adds spacing between the stars and the header
        const spacing = document.createElement('span');
        spacing.innerHTML = " ";
        spacing.style.marginRight = "10px";
    
        // Create header element
        const headerElement = document.createElement('p');
        headerElement.textContent = reviewHeader;
        headerElement.setAttribute('class', 'review')

        const nameCaptionElement = document.createElement('p');
        nameCaptionElement.textContent = "By " + nameCaption;

        const nameCaptionContainer = document.createElement('div');
        nameCaptionContainer.setAttribute('class', 'flex name-date-header');
        nameCaptionContainer.appendChild(nameCaptionElement);
    
        // Append rating and header elements to the container
        ratingHeaderContainer.appendChild(ratingElement);
        ratingHeaderContainer.appendChild(spacing);
        ratingHeaderContainer.appendChild(headerElement);
    
        // Create text element
        const textElement = document.createElement('p');
        textElement.setAttribute('class', 'text-section');
        textElement.textContent = reviewText;
        
        // Get the current date
        const year = currentDate.getFullYear();
        const month = currentDate.toLocaleString('default', { month: 'long' });; // Month in name format
        const day = currentDate.getDate();

        const dateElement = document.createElement('p');
        dateElement.textContent = `(${month} ${day}, ${year}) `;
        nameCaptionContainer.appendChild(dateElement);

        // Border line
        const borderLine = document.createElement('hr');

        // Append container and text elements to the review element
        reviewElement.appendChild(ratingHeaderContainer);
        reviewElement.appendChild(nameCaptionContainer);
        reviewElement.appendChild(textElement);
        reviewElement.appendChild(borderLine);

        // Append the review element to the reviews container
        reviewsContainer.appendChild(reviewElement);
    }
    
    
    
});
