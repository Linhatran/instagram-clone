//randomize usernames for feed - DONE
//randomize user avis
//add hearts, comments, airplanes, save/bookmarks - DONE
//add like function and increase like counts - DONE
//add comments CRUD
//add "hours ago" - DONE
$(document).ready(function () {
  const createPost = (url) => {
    return `<div
          class="postContainer col-md-7 border px-0 mb-3 mx-auto"
          style="background-color: #fff"
        >
          <div class="d-flex flex-row">
            <div class="accounts col-10 flex-row d-flex">
              <div class="col-1 pl-0 mr-2 ml-1">
                <svg
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 16 16"
                  class="bi bi-person-circle mt-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                  />
                </svg>
              </div>
              <div class="col-10 pl-0">
                <p class="mt-2 pt-1" style="font-size: 0.8rem"><b>${randomUsers()}</b></p>
              </div>
            </div>
            <div class="col-2 text-right align-self-center">
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 16 16"
                class="bi bi-three-dots"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
              </svg>
            </div>
          </div>

          <div class="post-img">
            <img
              src=${url}
              alt=""
              class="img-responsive"
              width="100%"
            />
          </div>
          <div class="row d-flex flex-row mt-3">
            <div class="col-6">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-heart mr-2 ml-3 outlinedHeart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                    <svg style="display: none" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-heart-fill mr-2 ml-3 filledHeart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chat mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                </svg>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-cursor mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
                </svg>    
            </div>
            <div class="col-6 text-right">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-bookmark mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
                <svg style="display: none" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-bookmark-fill mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z"/>
                </svg>
            </div>   
        </div>
        <p class="pl-3 mt-2 mb-1" id="likes" style="font-size: 0.9rem; font-weight: 600">${randomLikes(
          101,
          250
        )} likes</p>
        <div class="comments">
            <p class="pl-3 mb-1 my-0" style="font-size: 0.9rem"><b>comment1</b> I love this post!</p>
            <p class="pl-3 mb-1" style="font-size: 0.9rem"><b>comment2</b> Wow! Look at this</p>
        </div>
        <p class="text-muted pl-3 mb-1" style="font-size: 0.6rem">${postHour()} HOURS AGO</p>
        <form class="border-top mb-4 mx-3 d-flex flex-row justify-content-spacebetween">
            <input class="border-0 col-9 pl-0" type="text" class="comment" placeholder="Add a comment..." required>
            <button type="submit" disabled class="btn btn-link btn-sm ml-auto text-primary postBtn" style="font-weight: 600">Post</button>
        </form>
    </div>`;
  };

  //this function is to generate random posting hours
  const postHour = () => Math.floor(Math.random() * 23 + 1);
  const randomUsers = () => `random_user_${postHour()}`;
  const randomLikes = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const incLikes = (string) => {
    return `${parseInt(string.split(' ')[0]) + 1} likes`;
  };
  const decLikes = (string) => {
    return `${parseInt(string.split(' ')[0]) - 1} likes`;
  };

  $.get('https://image-server-codesmith.firebaseapp.com/images', function (
    data,
    status
  ) {
    data.forEach((url) => {
      $('#feed').append(createPost(url));
      const img = $('img').last();
      $(img).on('error', function () {
        $(img).closest('.postContainer').remove();
      });
    });
  });

  //////////handle likes
  $('body').on('dblclick', 'img', function () {
    let likes = $(this).parent().next().next().html();
    let outlinedHeart = $(this).parent().next().children().children()[0];
    let increasedLikes = incLikes(likes);
    let decreasedLikes = decLikes(likes);

    if ($(outlinedHeart).attr('style') === 'display: none') {
      $(this).parent().next().next().html(decreasedLikes);
    } else {
      $(this).parent().next().next().html(increasedLikes);
    }
    $(this)
      .parent()
      .next()
      .find('.outlinedHeart')
      .attr('style', function (index, attr) {
        return attr === undefined ? 'display: none' : null;
      });

    $(this)
      .parent()
      .next()
      .find('.filledHeart')
      .attr('style', function (index, attr) {
        return attr === 'color: #f54242' ? 'display: none' : 'color: #f54242';
      });
  });
  $('body').on('click', '.outlinedHeart', function () {
    let likesDiv = $(this).parent().parent().siblings()[2];
    let likes = $(likesDiv).html();

    let increasedLikes = incLikes(likes);
    $(this).attr('style', function (index, attr) {
      $(likesDiv).html(increasedLikes);
      return attr === undefined ? 'display: none' : null;
    });
    $(this)
      .next()
      .attr('style', function (index, attr) {
        if (attr === 'color: #f54242') {
          return (attr = 'display: none');
        } else {
          return (attr = 'color: #f54242');
        }
      });
  });
  $('body').on('click', '.filledHeart', function () {
    let likesDiv = $(this).parent().parent().siblings()[2];
    let likes = $(likesDiv).html();
    let decreasedLikes = decLikes(likes);
    $(likesDiv).html(decreasedLikes);
    $(this)
      .prev()
      .attr('style', function (index, attr) {
        return attr === undefined ? 'display: none' : null;
      });
    $(this).attr('style', function (index, attr) {
      return attr === 'color: #f54242' ? 'display: none' : 'color: #f54242';
    });
  });

  //handle save tag
  $('body').on('click', '.bi-bookmark', function () {
    $(this).attr('style', function (index, attr) {
      return attr === undefined ? 'display: none' : null;
    });
    $(this)
      .siblings()
      .attr('style', function (index, attr) {
        return attr === 'display: none' ? null : 'display: none';
      });
  });
  $('body').on('click', '.bi-bookmark-fill', function () {
    $(this).attr('style', function (index, attr) {
      return attr === undefined ? 'display: none' : 'display: none';
    });
    $(this)
      .siblings()
      .attr('style', function (index, attr) {
        return attr === 'display: none' ? null : 'display: none';
      });
  });

  //handle post button disability
  $('body').on('click', 'input', function (e) {
    $(this).on('keyup', function () {
      if ($(this).val()) {
        $('.postBtn').prop('disabled', false);
      } else {
        $('.postBtn').prop('disabled', true);
      }
    });
  });

  //add comment
  $('body').on('click', 'input', function () {
    let form = $(this).parent();

    $(form).on('submit', function (e) {
      e.preventDefault();
      const input = $(this).children()[0];
      const comment = `
        <p class='pl-3 mb-1 my-0' style='font-size: 0.9rem'>
            <b>natgeotravel</b> ${$(input).val()}
          </p>`;
      const commentSection = $(this).siblings()[4];
      $(commentSection).append(comment);
      $(input).val('');
    });
  });

  //move to homepage
  $('#homepage').on('click', function () {
    window.location.href = 'page.html';
  });

  //end here
});
