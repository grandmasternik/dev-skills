$('#addButton').click(function (event) {
        let element = $('input').val();
        let newRow = `<tr>
            <td ><button class="remove">X</button></td>
            <td >${element}</td>
          </tr>`;
        $('#skills tbody').append(newRow);
    });

$(document).ready(function () {

    let removedSkills = [];

    $('#skills tbody').on('click', 'button', function () {
        let row = $(this).closest('tr');
        removedSkills.push(row[0].outerHTML);
        row.fadeOut(500, function () {
            row.remove();
        });
    });
})
