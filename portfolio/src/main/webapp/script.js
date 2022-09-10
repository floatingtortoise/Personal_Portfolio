// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function getTime(){
    const response = await fetch('/time-record');
    const time = await response.text();
    document.getElementById('timeShown').innerText = time;
}
 

async function getInfo(){
    const params = new URLSearchParams();
    const email = document.getElementById("email-id").value;
    console.log(email);
    params.append('email', email);

    const response = await fetch("/info-handler");
    const info = await response.json();
    var displayedInfo = document.getElementById("displayedMessage");
    console.log(info);
    displayedInfo.innerHTML = '';
    // displayedInfo += 'you are sending \"' + info.message + '\"' + "with the email" + info.email + 'at' + info.time;
    displayedInfo.innerHTML += info.message;
}


$(document).ready(function() {
// Gets the video src from the data-src on each button
    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
// when the modal is opened autoplay it
    $('#myModal').on('shown.bs.modal', function (e) {
// set the video src to autoplay and not to show related video.
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
    })
// stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc);
    })
// document ready
});


