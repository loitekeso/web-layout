$.get('https://api.github.com/users/loitekeso/repos')
    .done(function (repoList) {
        var repoHTML = '';
        for(var i = 0; i<repoList.length; i++) {
            repoHTML += '<div class="col"><a  href="' + repoList[i].html_url + '">' + repoList[i].name + '</a></div>';
            if(i%2) {
                repoHTML += '<div class="w-100"></div>'
            }
        }
        $("#repo-block").find('.row').html(repoHTML);
    })
    .fail(function (err) {
        console.error('err ', err);

    })