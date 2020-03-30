'use strict';

// Main function for page initialization
function onInit() {

    initServicesSection();
    initPortfolioSection();
    initContactSection();
    initHeroParticles();
}

function initHeroParticles() {

    var mastHero = $('.intro-text');
    mastHero.attr('id', 'particles-js');
    createParticles();

}


function initServicesSection() {

    var elServicesContent = $('.services-content');

    var strHtml = servicesSectionData.map((serviceItem) => {

        return `
        <div class="col-md-4">
              <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-${serviceItem.logo} fa-stack-1x fa-inverse"></i>
                </span>
              <h4 class="service-heading">${serviceItem.heading}</h4>
              <p class="text-muted">${serviceItem.content}</p>
            </div>
        `;
    });

    elServicesContent.html(strHtml.join(''));

}

function initPortfolioSection() {

    var elPortfoliosContent = $('.portfolios-content');

    var strHtml = portfoliosSectionData.map((portfolioItem, i) => {

        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="onModalOpen(${i})">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${portfolioItem.imgUrl}" alt="">
              </a>
              <div class="portfolio-caption">
                <h4>${portfolioItem.heading}</h4>
                <p class="text-muted">${portfolioItem.secondary}</p>
              </div>
            </div>
        `;
    });

    elPortfoliosContent.html(strHtml.join(''));

}

function initContactSection() {

    var elModalContact = $('#contact');
    console.log(elModalContact);

    var strHtml = `
    
    <h4>Contact Me</h4>

    <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Name:</span>
        </div>
        <input type="text" class="form-control contact-name" aria-label="Name" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Email:</span>
        </div>
        <input type="text" id="contact-email" class="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="input-group">
        <div class="input-group-prepend">
        <span class="input-group-text">Message:</span>
        </div>
        <textarea class="form-control" id="contact-message" aria-label="Message"></textarea>
    </div>

    <button type="button" class="btn btn-dark contact-btn" onclick="onContactSend()">Send</button>`;

    elModalContact.html(strHtml);
}


function onModalOpen(index) {

    $('.modal-body h2').text(portfoliosModalData[index].name);
    $('.modal-body .item-intro').text(portfoliosModalData[index].secondary);
    $('.modal-body a').attr('href', portfoliosModalData[index].gitUrl);
    $('.modal-body img').attr('src', `img/portfolio/${portfoliosModalData[index].imgUrl}`);
    $('.modal-body .item-desc').text(portfoliosModalData[index].desc);
    $('.modal-body .item-list-date').text(portfoliosModalData[index].date);
    $('.modal-body .item-list-client').text(portfoliosModalData[index].client);
    $('.modal-body .item-list-category').text(portfoliosModalData[index].category);
}

function onContactSend() {

    var elOffCanvasContact = $('#contact');

    
    var contactName = $('.contact-name').val();
    var contactEmail = $('#contact-email').val();
    var contactMsg = $('#contact-message').val();
    
    console.log(contactName, contactEmail, contactMsg);
    
    elOffCanvasContact.html('<p class="reached-out-msg">Thanks For Reaching Out!</p>');

    setTimeout(() => {

        openCanvas();

        setTimeout(() => {
            initContactSection();
        }, 300);
    }, 2000);



}