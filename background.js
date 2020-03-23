//Fetching events from API

          fetch('https://api.nitdgplug.org/api/events/')
              .then(response => response.json())
              .then(events => {
                  let output = '<h2></h2>';
                   output += ' <div>';
                    events.forEach(function(event) {
                      output += `
                       <div class="card mb-3">
                           <div class="cont">
                              <img src="${event.event_image}" class="image" >
                                 <div class="middle">
                                   <div class="text">
                                   <i class="fas fa-map-marker-alt" ></i>${event.venue}
                              </div>
                           </div>
                        </div>
                            <div class="card-body">
                               <h5 class="card-title">  ${event.title} </h5>
                                     <p class="card-text">
                                            ${event.description}  </p>
                                        </div>
                                  </div>
                            `;
                  })

                  output += '</div>'

                  document.getElementById("response").innerHTML = output;

                }) .catch(function(error) {
                    console.log(error);

      });
