$(document).ready(function() {
    var amenitiesChecked = {};

    $('.amenity-checkbox').change(function() {
        var id = $(this).data('id');
        var name = $(this).data('name');

        if ($(this).is(':checked')) {
            amenitiesChecked[id] = name;
        } else {
            delete amenitiesChecked[id];
        }

        var amenitiesList = Object.values(amenitiesChecked).join(', ');
        $('div.Amenities h4').text(amenitiesList);
    });
});
