$("#submit").click(function (event) {
    event.preventDefault();
    let data = $("#myForm").serialize();
    $.ajax({
        type: "POST",
        url: "ex03.php",
        data: data,
        success: function (response) {
            alert(response);
        },
        error: function (response) {
            alert(response.responseText);
        },
    });
});
