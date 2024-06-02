// $(document).ready(function () {
//     $('#addFlavorForm').on('submit', function (event) {
//         event.preventDefault();

//         var formData = {
//             name: $('#name').val(),
//             description: $('#description').val(),
//             isSeasonal: $('#isSeasonal').is(':checked')
//         };

//         $.ajax({
//             url: '/user',
//             type: 'POST',
//             contentType: 'application/json',
//             data: JSON.stringify(formData),
//             success: function () {
//                 alert('Flavor added successfully!');
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error adding tea flavor:', error);
//                 alert('Error adding tea flavor:', error);
//             }
//         });
//     });
// });