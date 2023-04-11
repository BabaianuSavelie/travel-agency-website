const Card = ({
  country,
  starting_date,
  leave_date,
  food_type,
  price,
  stars,
  city,
  image_url,
}) => {
  const formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "mdl",
  });

  return `
    <div class="card bidder-card is-flex mt-3">
                        <div class=" bidder-card-image ml-2 mt-2">
                            <img src="${image_url}" alt="${country}">
                        </div>
                        <div class="card-content bidder-card-content pb-0 ">

                            <div class="is-flex is-justify-content-space-between">
                                <div class="left">
                                    <h1 id="location title">${country}</h1>
                                    <div class="mb-3 mt-2" style="color: #fd9d0b;">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h2>${city}</h2>
                                    <div class="flay is-flex">
                                        <div class="departure">
                                            <img src="/assets/img/bidder_img/result_item_avia_in.svg" alt="">
                                            <p>${starting_date}</p>
                                        </div>
                                        <div class="arrival ml-2">
                                            <img src="/assets/img/bidder_img/result_item_avia_out.svg" alt="">
                                            <p>${leave_date}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="board">
                                        <h1>Board</h1>
                                        <p> <b>${food_type}</b></p>
                                    </div>
                                </div>
                                <div class="price ">
                                    <h1>Price per 2 adult 7 Night</h1>
                                    <h2> <b>${formatter.format(price)}</b></h2>
                                </div>
                            </div>


                        </div>

                    </div>
    `;
};

export { Card };
