function myFunction() {
 
    var name = document.getElementById("name").value;
    console.log(name);
    var email = document.getElementById("email").value;
    console.log(email);
    var message = document.getElementById("message").value;
    console.log(message);
    var select = document.getElementById("select").value;
    console.log(select);
    var check = document.getElementById("check").checked;
    console.log(check);
    var check2 = document.getElementById("check2").checked;
    console.log(check2);
    
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$('.like-btn').on('click', function() {
   $(this).toggleClass('is-active');
});

$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &amp;gt; 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &amp;lt; 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});
