$(document).ready(function () {
    let cart = []; // Create cart array


    $.getJSON("services.json", function (data) {
        let html = '';
        data.forEach((service, index) => {
            html += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${service.name}</h5>
              <p class="card-text">${service.description}</p>
              <p><strong>$${service.price.toFixed(2)}</strong></p>
              <button class="btn btn-outline-dark add-to-cart" data-index="${index}">
                <i class="fa fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>`;
        });
        $("#services-container").html(html);


        $(".add-to-cart").click(function () {
            const serviceIndex = $(this).data("index");
            const selectedService = data[serviceIndex];
            cart.push(selectedService); // Add item to cart
            updateCart(); // Update cart display
        });
    });


    function updateCart() {
        let cartHtml = '';
        let total = 0;
        cart.forEach(item => {
            cartHtml += `<li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.name}
        <span>$${item.price.toFixed(2)}</span>
      </li>`;
            total += item.price;
        });

        $("#cart-items").html(cartHtml);
        $("#cart-total").text(`Total: $${total.toFixed(2)}`);
    }


    $("#booking-form").submit(function (e) {
        e.preventDefault();
        const bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"));
        bookingModal.show();
        this.reset();
    });
});
