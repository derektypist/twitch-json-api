$(document).ready(function() {
    // Set Up Channels Array
    let channels = ["ESL_SC2","OgamingSC2","cretetion",
    "freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas"];

    getChannelInfo();

    // Function to Get Channel Information
    function getChannelInfo() {
        channels.forEach(function(channel) {
            function makeURL(type,name) {
                return `https://twitch-proxy.freecodecamp.rocks/twitch-api/${type}/${name}?callback=?`;
            };
            // GET JSON for Streams 
            $.getJSON(makeURL("streams",channel), function(data) {
                let game,status;
                if (data.stream === null) {
                    game = "Offline";
                    status = "offline";
                } else if (data.stream === undefined) {
                    game = "Account Closed";
                    status = "offline";
                } else {
                    game = data.stream.game;
                    status = "online";
                }
            });

            // GET JSON for Channels
            $.getJSON(makrURL("channels",channel), function(data) {
                let logo = data.logo != null ? data.logo : "https://www.dummyimage.com/50x50/000/fff.jpg&text=channel",
                name = data.display_name != null ? data.display_name : channel,
                description = status === 'online' ? `: ${data.status}` : "";
                let html = `<article class="row players-${status}">
                    <article class="col-xs-2 col-sm-1">
                    <img src="${logo}"></article>
                    <article class="col-sm-3 col-xs-10" id="name">
                    <a href="${data.url}" target="_blank">${name}</a></article>
                    <article class="col-xs-10 col-sm-8" id="streaming">${game}
                    <span>${description}</span></article></article>`;
                status === "online" ? $("#display").prepend(html) : $("#display").append(html);
            });

        });
    }

    // Clicks on Buttons
    $('.online').click(function() {
        $('.players-online').show();
        $('.players-offline').hide();
    });

    $('.offline').click(function() {
        $('.players-online').hide();
        $('.players-offline').show();
    });

    $('.all').click(function() {
        $('.players-online').show();
        $('.players-offline').show();
    });



});