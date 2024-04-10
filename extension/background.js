setTimeout(() => {
    const url = document.location.href;
    const name = document.getElementsByClassName("text-heading-xlarge")[0].innerText;;
    const about = document.getElementsByClassName("pv-shared-text-with-see-more")[0].getElementsByClassName("visually-hidden")[0].innerText;
    const bio = document.getElementsByClassName("text-body-medium")[0].innerText;
    const location = document.getElementsByClassName("text-body-small inline t-black--light break-words")[0].innerText;
    const follower_count = document.getElementsByClassName("pvs-header__optional-link text-body-small")[0].getElementsByTagName("span")[0].innerText.replace(" followers","").replace(",","")
    let conLen = document.getElementsByClassName("ph5")[0].getElementsByTagName("ul")[1].getElementsByTagName("li").length
    let connection_count;
    if (conLen == 2) {
        connection_count = document.getElementsByClassName("ph5")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[1].innerText.replace(" connections","")
    } else {
        connection_count = document.getElementsByClassName("ph5")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0].innerText.replace(" connections","")
    }
    fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, name, about, bio, location, follower_count, connection_count })
    })
}, 5000)