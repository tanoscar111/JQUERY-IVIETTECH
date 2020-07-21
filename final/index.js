$(function () {
    $('#id_setsel').click(function () {
        var a = $("#id_select").val();
        var content_ = '';
        for (let i = 0; i < a.length; i++) {
            content_ += '<option ' + 'value="' + a[i] + '">' + a[i] + '<' + '/option>';


        }

        $('#id_setselect').html(content_);
        $("#id_select option:selected").remove()

        $("#id_removesel").click(function () {


            var b = $('#id_setselect').val();
            var content_ = '';
            for (let i = 0; i < b.length; i++) {
                content_ += '<option ' + 'value="' + b[i] + '">' + b[i] + '<' + '/option>';




            }
            $('#id_select').append(content_);
            $('#id_setselect option:selected').remove();

        })
    })

})
