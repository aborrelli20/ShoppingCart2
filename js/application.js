var total = 0;
$(document).ready(function () {

  window.addEventListener('keyup', function (event) {
    $('tbody tr').each(function (i, ele) {
      var price = parseInt($(ele).find('.price').text());
      var number = $(ele).find('.number').children('input').val();
      var subtotal = price * number;
      $(ele).children('.subtotal').html(subtotal);
      return subtotal;
    });
  });

  $('#addItem').on('submit', function (event) {
    event.preventDefault();
    var item = $(this).find('[name=item]').val();
    var price = $(this).find('[name=price]').val();

    $('tbody').children().last().prev().prev().after('<tr>' + '<td class="item">' + item + '</td>' +
      '<td class="price">' + price + '</td>' + '<td></td>' + '<td class="number"><label for="quantity">QTY</label><input type="text"></td>' +
      '<td><button class="button remove">Remove</button></td>' +
      '<td class="subtotal">0</td>' + '</tr>');
  });

  $(document).on('click', '.remove', function (event) {
    $(this).closest('tr').remove();
  });
  $(document).on('click', '#calculate', function () {
    $('tbody tr').each(function (i, ele) {
      var sub = $(ele).children('.subtotal').html();
      sub = parseFloat(sub == null ? "0" : sub);
      total += sub;
      if (sub > 0) {
        total = total;
      }
      var calculate = document.querySelector('.total');

      calculate.innerText = "Total: " + total;

    });
  });
});