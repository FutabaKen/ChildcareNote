// ajax 通信
$(function () {
    $.ajax('/header', {
        // options
        cache: false,
        async: true, // 非同期処理
        dataType: 'html',
    }).done(function(data) {
        var out_html = $.parseHTML(data);
        $('header').empty().append(out_html);
    }).fail(function() {
        console.error('ajax通信に失敗しました');
    });
});