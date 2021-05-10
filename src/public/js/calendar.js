$(function () {
    /**
     * @type {String} カレンダーの位置（左）
     */
    const first = 'first-';
    /**
     * @type {String} カレンダーの位置（右）
     */
    const second = '#second-';
    /**
     * @type {Number} 開始年
     */
    const startYear = 2020;
    const endYear = startYear + 6;
    const space = ' ';
    const child = '>';
    const monthNumber = { "jan": 0, "dec": 11 };
    const weekDay = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri', 'Sat'];

    var addSharp = function(str){
        return '#' + str;
    }

    $('#first-select-year').on("change", function () {
        addCalendarDate(first);
    })

    $('body').on("click", '#first-calendar .prev' + child + 'button', function () {
        deleteCalendar(first);
        changeMonth(first, -1);
    })

    $('body').on("click", '#first-calendar .next' + child + 'button', function () {
        deleteCalendar(first);
        changeMonth(first, 1);
    })

    $('body').on("change", '#first-calendar' + space + '.select-year', function () {
        deleteCalendar(first);
        addCalendarDate(first);
        disabledButton(first);
    })

    $('body').on("change", '#first-calendar' + space + '.select-month', function () {
        deleteCalendar(first);
        addCalendarDate(first);
        disabledButton(first);
    })


    // カレンダーのヘッダー
    var createCalendarHeader = function (position, pStartYear) {
        var year = pStartYear;
        const calendar = addSharp(position) + 'calendar';
        $("<div>", {
            id: 'first-calendar',
            class: 'col-md-6'
        }).appendTo('#calendar-area');
        // ulタグの作成
        $("<ul>", {
            class: 'calendar-header p-1 m-0 form-inline justify-content-center'
        }).appendTo(calendar)
        // prevボタンの作成
        $("<li>", {
            class: 'form-group prev'
        }).appendTo(calendar + space + '> ul');
        $("<button>", {
            class: 'btn btn-outline-primary',
            type: 'button'
        }).appendTo(calendar + space + '.prev');
        $("<i>", {
            class: 'bi bi-chevron-double-left'
        }).appendTo(calendar + space + '.prev > button');
        // selectの作成
        $("<li>", {
            class: 'form-group p-1 year'
        }).appendTo(calendar + space + '> ul');
        // calendarの子孫のyearにselectを追加する
        $("<select>", { class: 'form-control select-year' }).appendTo(calendar + space + '.year');
        while (year < endYear) {
            // calendarの子孫のselect-yearにoptionを追加する
            $("<option>", {
                value: year,
                text: year
            }).appendTo(calendar + space + '.select-year');
            year++;
        }
        $("<li>", {
            class: 'form-group p-1 month'
        }).appendTo(calendar + space + '> ul');
        // calendarの子孫のmonthにselectを追加する
        $("<select>", { class: 'form-control select-month' }).appendTo(calendar + space + '.month');
        for (var month = 0; month < 12; month++) {
            // calendarの子孫のselect-monthにoptionを追加する
            $("<option>", {
                value: month,
                text: month + 1
            }).appendTo(calendar + space + '.select-month');
        }
        // nextボタンの作成
        $("<li>", {
            class: 'form-group next'
        }).appendTo(calendar + space + '> ul');
        $("<button>", {
            class: 'btn btn-outline-primary',
            type: 'button'
        }).appendTo(calendar + space + '.next');
        $("<i>", {
            class: 'bi bi-chevron-double-right'
        }).appendTo(calendar + space + '.next > button');
    }

    /**
     * セレクトボックスのカレンダーの年月を返す
     * @param {String} position カレンダーの位置
     * @returns jsonオブジェクト
     */
    var getCurrentMonth = function (position) {
        const calender = addSharp(position) + 'calendar';
        return {
            "year": $(calender + space + '.select-year').val(),
            "month": $(calender + space + '.select-month').val()
        };
    }

    // ボタンの無効化
    var disabledButton = function (position) {
        const calender = addSharp(position) + 'calendar';
        const objYM = getCurrentMonth(position);
        var $btnNext = $(calender + space + '.next' + child + 'button');
        var $btnPrev = $(calender + space + '.prev' + child + 'button');
        $btnNext.attr('disabled', false);
        $btnPrev.attr('disabled', false);
        if (objYM.year == startYear && objYM.month == monthNumber.jan) {
            $btnPrev.attr('disabled', true);
        } else if (objYM.year == endYear - 1 && objYM.month == monthNumber.dec) {
            $btnNext.attr('disabled', true);
        }
    }


    /**
     * カレンダーの表示月を変更する
     * @param {String} position カレンダーの位置
     * @param {Number} addMonth 現在の月から加減する月数
     */
    var changeMonth = function (position, addMonth) {
        alert('a');
        const objYM = getCurrentMonth(position);
        const calendar = addSharp(position) + 'calendar';

        var month = Number(objYM.month) + addMonth;
        var year = objYM.year;
        if (month == -1) {
            // 1月から前月になった場合
            month = monthNumber.dec;
            year--;
        } else if (month == 12) {
            // 12月から次月になった場合
            month = monthNumber.jan;
            year++;
        }
        createCalendarHeader(position, startYear);
        alert(calendar + ' .select-year');
        alert($(calendar + ' .select-year').val());
        $(calendar + ' .select-year').val(year);
        alert($(calendar + ' .select-year').val());
        $(calendar + ' .select-month').val(month).text(month+1);
        disabledButton(position);
        addCalendarDate(position);
        //addCalendarDate(right);
    }

    // カレンダーの中身
    /**
     * カレンダーの数字を作成する
     * @param {String} position カレンダーの位置
     */
    var addCalendarDate = function (position) {
        const objYM = getCurrentMonth(position);
        var currentMonth = new Date(objYM.year, objYM.month);

        // 月末日を検索
        var currentMonthEndDate = new Date(objYM.year, objYM.month + 1, 0);
        var monthStartWeekDay = currentMonth.getDay();

        const calendar = addSharp(position) + 'calendar';
        const side = position + 'calendar';

        // カレンダーtableの作成
        $("<table>", {
            class: 'table-sm table-bordered',
            id: side
        }).appendTo(calendar);

        // tableのヘッダー作成
        $("<thead>").appendTo(calendar + ' table');
        $("<tr>", {
            class: 'week-header'
        }).appendTo(calendar + ' thead');
        for (var i = 0; i < weekDay.length; i++) {
            $("<th>", {
                class: weekDay[i],
                text: weekDay[i]
            }).appendTo(calendar + ' .week-header');
        }

        // tableのbody作成
        $("<tbody>").appendTo(calendar + ' table');
        // 週のループ
        var cellNumber = 0;
        for (var i = 0; i < 7; i++) {

            // 週の追加
            $("<tr>", {
                class: 'week-body-' + i
            }).appendTo(calendar + ' tbody');

            for (var j = 0; j < 7; j++) {
                var monthDate = new Date(objYM.year, objYM.month, currentMonth.getDate() + cellNumber - monthStartWeekDay);
                //var calendarDate = calendar + '-' + i;
                //var calendarDate = 'first-calendar' + '-' + cellNumber;
                var calendarDate = side + cellNumber;
                var monthClass = 'current-month';
                if ((monthStartWeekDay - cellNumber) > 0) {
                    monthClass = 'prev-month';
                } else if ((currentMonthEndDate.getDate() + monthStartWeekDay) > cellNumber) {
                } else {
                    if (cellNumber == 35) {
                        break;
                    } else {
                        monthClass = 'next-month';
                    }
                }
                $("<td>", {
                    id: calendarDate,
                    value: monthDate,
                    text: monthDate.getDate(),
                    class: 'day ' + monthClass
                }).appendTo(calendar + ' .week-body-' + i);
                cellNumber++;
            }
        }

    }

    var deleteCalendar = function (position) {
        const calendar = addSharp(position) + 'calendar';
        // いったんカレンダーを削除
        if ($(calendar).length != 0) {
            $(calendar).remove();
        }
    }

    deleteCalendar(first);
    createCalendarHeader(first, startYear);
    // 左のカレンダーを作成
    addCalendarDate(first);
    //addCalendarDate(second);
    disabledButton(first);

});
