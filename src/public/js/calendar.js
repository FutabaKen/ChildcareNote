$(function () {
    var addCalendarDate = function(left){
        var currentMonth = new Date($(left + 'current-month').text());
        var year = currentMonth.getFullYear();
        var month = currentMonth.getMonth();
        // 月末日を検索
        var currentMonthEndDate = new Date(year ,month + 1 ,0);
        var monthStartWeekDay = currentMonth.getDay();

        for (var i = 0; i < 35; i++) {
            var monthDate = new Date(year, month,  currentMonth.getDate() + i - monthStartWeekDay);
            $(left + 'calendar-' + i).val(monthDate);
            $(left + 'calendar-' + i).text(monthDate.getDate());
            if ((monthStartWeekDay - i) > 0) {
                $(left + 'calendar-' + i).addClass('prev-month');
            } else if ((currentMonthEndDate.getDate() + monthStartWeekDay) > i) {
                $(left + 'calendar-' + i).addClass('current-month');
            } else {
                $(left + 'calendar-' + i).addClass('next-month');
            }
        }
    }

    // 左のカレンダーを作成
    var left = '#left-';
    addCalendarDate(left);
    var right = '#right-';
    addCalendarDate(right);

});
