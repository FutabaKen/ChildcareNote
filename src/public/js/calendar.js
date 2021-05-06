$(function () {
    /**
     * @type {String} カレンダーの位置（左）
     */
    var first = '#first-';
    /**
     * @type {String} カレンダーの位置（右）
     */
    var second = '#second-';
    /**
     * @type {Number} 開始年
     */
    var startYear = 2020;

    $('#first-select-year').on("change", function () {
        addCalendarDate(first);
    })

    $('#first-btn-prev').on("click", function () {
        changeMonth(first, -1);
    })

    $('#first-btn-next').on("click", function () {
        changeMonth(first, 1);
    })


    // カレンダーのヘッダー
    var createYear = function (position, startYear) {
        var year = startYear;
        var endYear = startYear + 6;
        $("<select>", {
            id: 'first-select-year',
            class: 'form-control'
        }).appendTo('#first-year');
        while (year < endYear) {
            $("<option>", {
                value: year,
                text: year
            }).appendTo('#first-select-year');
            year++;
        }
        $("<select>", {
            id: 'first-select-month',
            class: 'form-control'
        }).appendTo('#first-month');
        for (var month = 0; month < 12; month++) {
            $("<option>", {
                value: month,
                text: month + 1
            }).appendTo('#first-select-month');
        }
    }

    $('body').on("change", '#first-select-year', function () {
        addCalendarDate(first);
    })

    $('body').on("change", '#first-select-month', function () {
        addCalendarDate(first);
    })

    /**
     * カレンダーの年月を返す
     * @param {String} position カレンダーの位置
     * @returns {Date} カレンダーの年月
     */
    var getCurrentMonth = function (position) {
        return new Date($(position + 'select-year').val(), $(position + 'select-month').val());
    }

    /**
     * カレンダーの表示月を変更する
     * @param {String} position カレンダーの位置
     * @param {Number} addMonth 現在の月から加減する月数
     */
    var changeMonth = function (position, addMonth) {
        var currentMonth = getCurrentMonth(position);
        var year = currentMonth.getFullYear();
        var month = currentMonth.getMonth();

        month = month + addMonth;
        if (month == -1) {
            // 1月から前月になった場合
            month = 11;
            year--;
        } else if (month == 12) {
            // 12月から次月になった場合
            month = 0;
            year++;
        }
        $(position + 'select-year').val(year);
        $(position + 'select-month').val(month);
        addCalendarDate(position);
        //addCalendarDate(right);
    }

    // カレンダーの中身
    /**
     * カレンダーの数字を作成する
     * @param {String} position カレンダーの位置
     */
    var addCalendarDate = function (position) {
        var currentMonth = getCurrentMonth(position);
        var year = currentMonth.getFullYear();
        var month = currentMonth.getMonth();
        // 月末日を検索
        var currentMonthEndDate = new Date(year, month + 1, 0);
        var monthStartWeekDay = currentMonth.getDay();

        for (var i = 0; i < 42; i++) {
            var monthDate = new Date(year, month, currentMonth.getDate() + i - monthStartWeekDay);
            $(position + 'calendar-' + i).val(monthDate);
            $(position + 'calendar-' + i).text(monthDate.getDate());
            if ((monthStartWeekDay - i) > 0) {
                $(position + 'calendar-' + i).addClass('prev-month');
            } else if ((currentMonthEndDate.getDate() + monthStartWeekDay) > i) {
                $(position + 'calendar-' + i).addClass('current-month');
            } else {
                $(position + 'calendar-' + i).addClass('next-month');
            }
        }
    }

    createYear(first, startYear);
    // 左のカレンダーを作成
    addCalendarDate(first);
    addCalendarDate(second);

});
