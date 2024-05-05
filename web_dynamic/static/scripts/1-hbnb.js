$(document).ready(function() {
    var amenitiesChecked = {};

    $('input[type=checkbox]').change(function() {
        var id = $(this).attr('data-id');
        var name = $(this).attr('data-name');

        if ($(this).is('checked')) {
            amenitiesChecked[id] = name;
        } else {
            delete amenitiesChecked[id];
        }

        var amenitiesList = Object.values(amenitiesChecked).join(', ');
        $('div.Amenities h4').text(amenitiesList);
    });
});
