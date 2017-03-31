$(function () {
    "use strict";

    $("#swal-test-1").on("click", function () {
        swal({
            title: 'Hello!',
            text: 'This is Ghost Production',
            type: 'success',
            confirmButtonClass: 'btn-round btn-success',
            confirmButtonText: 'Close',
        });
    });

    $("#swal-test-2").on("click", function () {
        swal({
            title: 'Hello!',
            text: 'This is not Ghost Production :(',
            type: 'error',
            confirmButtonClass: 'btn-round btn-success',
            confirmButtonText: 'Close',
        });
    });
});

let current_id = null;

let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#1c1e22',
    cursorColor: '#c8c8c8',
    hideScrollbar: true,
    progressColor: '#c8c8c8',
    height: 60
});

function iconToggle(obj) {
    obj.toggleClass('fa-play');
    obj.toggleClass('fa-pause');
}

function iconPlay(obj) {
    obj.removeClass("fa-pause").addClass("fa-play");
}

function iconPause(obj) {
    obj.removeClass("fa-play").addClass("fa-pause");
}

wavesurfer.on('ready', function () {
    wavesurfer.play();
    $("#loading").hide();
});

wavesurfer.on('play', function () {
    iconPause($(".bottom-player-block-control.play").find("i"));
    iconPause($("a[data-id=" + current_id + "]").find("i"));
});

wavesurfer.on('pause', function () {
    iconPlay($(".bottom-player-block-control.play").find("i"));
    iconPlay($("a[data-id=" + current_id + "]").find("i"));
});

function audio_play_pause(object) {
    var myAudio = object.querySelector(".xnine-player");
    var myIcon = object.querySelector(".control");


    var id = $(object).data("id");
    var image = $(object).closest(".track").find(".track-image").attr("src");
    var title = $(object).closest(".track").find(".track-title").text();
    var author = $.trim($(object).closest(".track").find(".track-author").text());
    var src = $(object).closest(".track").find(".track-source-url").attr("src");
    var link = $(object).closest(".track").find(".track-link");

    if (wavesurfer.getCurrentTime() > 0 && current_id == id) {
        wavesurfer.playPause();
    }

    if (current_id != id) {
        $("#loading").show();
        wavesurfer.load(src);
        current_id = id;
        $("body").css("padding-bottom", "205px");
        $(".navbar-bottom").css("bottom", "75px");
        $(".bottom-player-block").css("bottom", "0px");
    }

    $(".bottom-player-block").find("img").attr("src", image);
    $(".bottom-player-block").find(".bottom-player-title > .title").text(title);
    $(".bottom-player-block").find(".bottom-player-title > .author").text(author);

}

$(".bottom-player-block-control > i").on("click", function () {
    wavesurfer.playPause();
});