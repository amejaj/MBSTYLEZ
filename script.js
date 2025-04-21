$(document).ready(function () {
    // Load services from JSON
    $.getJSON("services.json", function (data) {
        let html = "";
        data.forEach(service => {
            html += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${service.name}</h5>
              <p class="card-text">${service.description}</p>
              <p><strong>$${service.price}</strong></p>
              <button class="btn btn-outline-dark">
                <i class="fa fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>`;
        });
        $("#services-container").html(html);
    });

    // Booking form modal
    $("#booking-form").submit(function (e) {
        e.preventDefault();
        const bookingModal = new bootstrap.Modal(
            document.getElementById("bookingModal")
        );
        bookingModal.show();
        this.reset();
    });
});
