$(function(){
    var list = [
        {
            'name': '睡眠・他',
            'appointments': [
                {'start': '08:00', 'end': '09:00', 'title': 'Make strange noises',             'class': 'nonsense', 'payload': {myId: 1}},
                {'start': '08:50', 'end': '10:10', 'title': 'Somehow Han Solo understands me', 'class': 'nonsense', 'payload': {myId: 2}}
            ]
        }
    ];

    var steps = [
        '00:00',
        '02:00',
        '04:00',
        '06:00',
        '08:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00'
    ];

    var onClickAppointment = function(payload){
        $("#onClickAppointment").html(JSON.stringify(payload));
    };

    var $scheduler = $("#scheduler").schedulerjs({
        'list': list,
        'steps': steps,
        'pixelsPerHour': 30,
        'start': '09:30',
        'end': '10:30',
        'headName': 'Members',
        'onClickAppointment': onClickAppointment
    });

    // Change time after initialization
    $scheduler.schedulerjs('start', '11:00');
    $scheduler.schedulerjs('end', '11:30');

    $("#times-button").on('click', function(){
        var times = $scheduler.schedulerjs('selected');
        $("#times").html(times.start + ' - ' + times.end);
    });

    /* Update list
    $scheduler.schedulerjs('update', [
        {
            name: 'hello',
            appointments: [
                {start: '10:00', end: '11:00', title: 'myesh'}
            ]
        }
    ]);
    */
});