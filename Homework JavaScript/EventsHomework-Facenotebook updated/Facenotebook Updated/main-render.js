var images = {};

function PageRenderer(data) {
    this.userData = data;

    this.renderAll = function() {
        var mainContainer = document.getElementById("main-container");
        mainContainer.style.display = "flex";
        mainContainer.appendChild(this.renderLeft());
        mainContainer.appendChild(this.renderRight());
    }

    this.renderLeft = function() {
        var leftContainer = document.createElement("div");
        leftContainer.style.width = "35%";
        leftContainer.style.display = "flex";
        leftContainer.style.flexDirection = "column";

        var profileContainer = document.createElement("div");
        var profileImage = document.createElement("img");
        profileImage.style.width = "200px";
        profileImage.style.height = "200px";
        // profileImage.src = "data:image/jpeg;base64,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"
        profileImage.src = this.userData.profilePicture.link;
        profileImage.alt = this.userData.profilePicture.text;

        profileImage.addEventListener("mouseover", function(event){
            profileImage.style.width = "400px";
            profileImage.style.height = "400px";
        });
        profileImage.addEventListener("mouseleave", function(event){
            profileImage.style.width = "200px";
            profileImage.style.height = "200px";
        });

        profileContainer.appendChild(profileImage);

        var aboutMeContainer = document.createElement("div");
        var aboutHeader = document.createElement("h1");
        // aboutHeader.innerHTML = "My name is Vladimir";
        aboutHeader.innerHTML = this.userData.biography.header;
    
        var aboutText = document.createElement("p");
        // aboutText.innerHTML = "And I love cats";
        aboutText.innerHTML = this.userData.biography.paragraph;
        
        aboutMeContainer.appendChild(aboutHeader);
        aboutMeContainer.appendChild(aboutText);

        leftContainer.appendChild(profileContainer);
        leftContainer.appendChild(aboutMeContainer);
        return leftContainer;
    }

    this.renderRight = function() {
        var rightContainer = document.createElement("div");
        rightContainer.style.width = "65%";
        rightContainer.style.display = "flex";
        rightContainer.style.flexDirection = "column";

        var albumContainer = document.createElement("div");
        // for(var i = 0; i < 14; i++) {   // i < this.userData.album.length treba ovoj uslov za da vrti dodeka ima vo nizata

        for (var i = 0; i < this.userData.album.length; i++){
            images[i] = this.userData.album[i].link;
            var albumImage = document.createElement("img");
            // albumImage.src = "data:image/jpeg;base64,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"
            albumImage.src = this.userData.album[i].link;
            albumImage.style.width = "100px";
            albumImage.setAttribute('image-position', i);
            albumImage.setAttribute('onclick', 'renderModal(this)');
            // albumImage.addEventListener("click", function(event){
            //     renderModal(this);
            //     this.addEventListener('click', function (ev) {
            //         console.log('as')
            //         renderModal(this);
            //     })
            // });

            albumImage.style.height = "100px";
            albumImage.style.margin = "10px";
            albumContainer.appendChild(albumImage);
        //     albumImage.addEventListener("mouseover", function(event){
        //         albumImage.style.width = "200px";
        //         albumImage.style.height = "200px";
        //     });
        //     albumImage.addEventListener("mouseleave", function(event){
        //         albumImage.style.width = "100px";
        //         albumImage.style.height = "100px";
        //     });
    //  raboti ama grdo e;
        }

        var storiesContainer = document.createElement("div");

        for (var j = 0; j < this.userData.stories.length; j++){  
        var boxContainer = document.createElement("div"); 
        
        var storiesHeader = document.createElement("h1");
        // storiesHeader.innerHTML = "My name is cat";
        storiesHeader.innerHTML = this.userData.stories[j].header;
        var storiesDate = document.createElement("h4");
        // storiesDate.innerHTML = "December";
        storiesDate.innerHTML =  this.userData.stories[j].newDate;
        var storiesText = document.createElement("p");
        // storiesText.innerHTML = "And I love cats And I love cats And I love cats And I love catsAnd I love catsAnd I And I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catsAnd I love catslove catsAnd I love catsAnd I love cats";
        storiesText.innerHTML = this.userData.stories[j].paragraph; 
        
        boxContainer.appendChild(storiesHeader);
        boxContainer.appendChild(storiesDate);
        boxContainer.appendChild(storiesText);

        storiesContainer.appendChild(boxContainer);

        }

        rightContainer.appendChild(albumContainer);
        rightContainer.appendChild(storiesContainer);

        return rightContainer;
    }
}

function renderModal(imageElement) {
    let position = imageElement.getAttribute('image-position');
    let imageModal = document.getElementById('imagemodal');

    document.getElementById('imagepreview').src = images[position];
    imageModal.setAttribute('current-position', position);
    imageModal.style.display = 'block';
    imageModal.style.height = '';
    imageModal.style.opacity = 1;
    imageModal.style.zIndex = 9999;
}

function disableModal() {
    let imageModal = document.getElementById('imagemodal');
    imageModal.style.display = 'hide';
    imageModal.style.height = '';
    imageModal.style.opacity = 0;
    imageModal.style.zIndex = -1;
}

function nextPage() {
    let imageModal = document.getElementById('imagemodal');
    let currentPosition = imageModal.getAttribute('current-position');

    imageModal.setAttribute('current-position', ++currentPosition);
    document.getElementById('imagepreview').src = images[currentPosition];
    imageModal.style.display = 'block';
    imageModal.style.height = '';
    imageModal.style.opacity = 1;
    imageModal.style.zIndex = 9999;
}

function previousPage() {
    let imageModal = document.getElementById('imagemodal');
    let currentPosition = imageModal.getAttribute('current-position');

    imageModal.setAttribute('current-position', --currentPosition);
    document.getElementById('imagepreview').src = images[currentPosition];
    imageModal.style.display = 'block';
    imageModal.style.height = '';
    imageModal.style.opacity = 1;
    imageModal.style.zIndex = 9999;
}


